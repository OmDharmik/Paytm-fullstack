const express = require('express');
const { authMiddleware } = require('../middleware');
const z = require('zod')
const mongoose = require('mongoose')
const {Account} = require('../db')

const router = express.Router();
router.use(express.json())

router.get("/balance", authMiddleware, async (req, res) => {
    const account = await Account.findOne({
        userId: req.userId
    });


    res.json({
        balance: account.balance
    })
});

router.post("/transfer", authMiddleware, async (req, res) => {
    const session = await mongoose.startSession();

    try {
        session.startTransaction();
        const { amount, to } = req.body;

        // Fetch the accounts within the transaction
        const account = await Account.findOne({ userId: req.userId }).session(session);

        if (!account || account.balance < amount) {
            await session.abortTransaction();
            return res.status(400).json({
                message: "Insufficient balance"
            });
        }

        const toAccount = await Account.findOne({ userId: to }).session(session);

        if (!toAccount) {
            await session.abortTransaction();
            return res.status(400).json({
                message: "Invalid account"
            });
        }

        // Perform the transfer
        await Account.findOneAndUpdate(
            { userId: req.userId },
            { $inc: { balance: -amount } },
            { new: true, session }
        );

        await Account.findOneAndUpdate(
            { userId: to },
            { $inc: { balance: amount } },
            { new: true, session }
        );

        // Commit the transaction
        await session.commitTransaction();
        res.json({
            message: "Transfer successful"
        });
    } catch (error) {
        // Handle any errors
        await session.abortTransaction();
        console.error(error);
        res.status(500).json({
            message: "Internal server error"
        });
    } finally {
        session.endSession();
    }
});



module.exports = router;
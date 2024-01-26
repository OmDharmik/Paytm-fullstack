const express = require('express');
const {User} = require('../db');
const z = require('zod');
const jwt = require('jsonwebtoken');
const {JWT_SECRET} = require('../config')

const router = express.Router();
router.use(express.json())

const userValidation = z.object({
    username: z.string().email(),
    password:   z.string(),
    firstname: z.string(),
    lastname: z.string()
})


router.post('/signup', async (req, res) => {
    const validate = userValidation.safeParse(req.body);
    if (!validate.success) {
        return res.status(400).json({
            msg: "Incorrect inputs."
        })
    }

    const existinguser = await User.findOne({
        username: req.body.username,
        password: req.body.password
    })
    if(existinguser){
        return res.status(400).json({
            msg: "User already exists"
        })
    }

    const user = await User.create({
        username: req.body.username,
        password : req.body.password,
        firstname : req.body.firstname,
        lastname : req.body.lastname
    })

    let usertoken;
    if(user){
        usertoken = jwt.sign({userId: user._id},JWT_SECRET)
    }
    
    res.status(400).json({
        msg: "User created successfully.",
        token: usertoken
    })
});

const usersignin = z.object({
    username: z.string().email()
})

router.post('/signin', async(req,res)=>{
    const userValidation = usersignin.safeParse(req.body)
    if(!userValidation){
        return res.status(411).json({
            msg: "invalid username"
        })
    }

    const existinguser = await User.findOne({username: req.body.username})
    if(!existinguser){
        return res.status(411).json({
            msg: "User does not exists"
        });
    }

    const token = jwt.sign({userId: existinguser._id},JWT_SECRET)
    res.json({
        token: token
    })
})


router.get(('update', (req,res)=>{

}))

module.exports = router;
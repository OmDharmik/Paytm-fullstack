import Heading from "../components/Heading"
import InputBox from "../components/InputBox"
import Button2 from "../components/Button2"

export default function Send(){
    return ( <div className="flex h-screen bg-slate-400 justify-center">
        <div className="flex flex-col justify-center">
            <div className="bg-white w-96 justify-center rounded-md text-center shadow-lg">
                <Heading label="Send Money" />
                <div className="flex ml-2">
                    <div className="rounded-full h-12 w-12 bg-slate-200">
                            <div className="flex bg-green-500 rounded-full flex-col justify-center h-full text-xl text-center">
                                U
                            </div>
                    </div>
                    <div className="flex flex-col justify-center ml-5 text-xl font-bold">User 1</div>
                </div>
                <InputBox label={"Amount (in Rs)"}></InputBox>
                <Button2 label={"Initiate Transfer"}></Button2>
            </div>
        </div>
    </div>

)}
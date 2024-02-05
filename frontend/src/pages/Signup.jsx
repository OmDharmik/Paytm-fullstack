import InputBox from "../components/InputBox";
import Heading from "../components/Heading"
import Button from "../components/Button"

function Signup(){
    return ( <div className="bg-slate-600 h-screen flex justify-center">
        <div className="flex flex-col justify-center">
            <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4">
                <Heading label="Sign Up"></Heading>
                <p className="text-gray-500 text-md">Enter your information to create an account</p>
                <InputBox label="First Name" placeholder="John"></InputBox>
                <InputBox label="Last Name" placeholder="Doe"></InputBox>
                <InputBox label="Email" placeholder="johndoe@example.com"></InputBox>
                <InputBox label="Password"></InputBox>
                <Button label="Sign Up"></Button>
                <p>Already have an account? <a className="underline" href="">Login</a></p>
            </div>
        </div>
    </div>
    )
}

export default Signup;
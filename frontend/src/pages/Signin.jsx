import InputBox from "../components/InputBox";
import Heading from "../components/Heading"
import Button from "../components/Button"

function Signin(){
    return ( <div className="bg-slate-600 h-screen flex justify-center">
        <div className="flex flex-col justify-center">
            <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4">
                <Heading label="Sign In"></Heading>
                <p className="text-gray-500 text-md">Enter your credentials to access to your account</p>
                <InputBox label="Email" placeholder="johndoe@example.com"></InputBox>
                <InputBox label="Password"></InputBox>
                <Button label="Sign In"></Button>
                <p>Don't have an account? <a className="underline" href="">Signup</a></p>
            </div>
        </div>
    </div>
    )
}

export default Signin;
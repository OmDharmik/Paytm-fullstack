import Heading from "../components/Heading";
import Paragraph from "../components/Paragraph"
import InputBox from "../components/InputBox";
import Button from "../components/Button";
import BottomWarning  from "../components/BottomWarning";

function Signin(){
    return ( <div className="flex h-screen bg-slate-400 justify-center">
        <div className="flex flex-col justify-center">
            <div className="bg-white w-80 justify-center rounded-md">
                <Heading label="Sign In" />
                <Paragraph label="Enter your credentials to access your account"></Paragraph>
                <InputBox label="Email" placeholder="johndoe@example.com"></InputBox>
                <InputBox label="Password"></InputBox>
                <Button label="Sign In"></Button>
                <BottomWarning label={"Don't have an account?"} buttonText={"Sign Up"} to={"/signup"} />
            </div>
        </div>
    </div>
    )
}

export default Signin;
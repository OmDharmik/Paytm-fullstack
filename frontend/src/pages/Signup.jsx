import Heading from "../components/Heading";
import Paragraph from "../components/Paragraph"
import InputBox from "../components/InputBox";
import Button from "../components/Button";
import BottomWarning  from "../components/BottomWarning";

function Signup(){
    return ( <div className="flex h-screen bg-slate-400 justify-center">
        <div className="flex flex-col justify-center">
            <div className="bg-white w-80 justify-center rounded-md text-center">
                <Heading label="Sign Up" />
                <Paragraph label="Enter your information to create an account"></Paragraph>
                <InputBox label="First Name" placeholder="John"></InputBox>
                <InputBox label="Last Name" placeholder="Doe"></InputBox>
                <InputBox label="Email" placeholder="johndoe@example.com"></InputBox>
                <InputBox label="Password"></InputBox>
                <Button label="Sign Up"></Button>
                <BottomWarning label={"Already have an account?"} buttonText={"Sign In"} to={"/signin"} />
            </div>
        </div>
    </div>
    )
}

export default Signup;
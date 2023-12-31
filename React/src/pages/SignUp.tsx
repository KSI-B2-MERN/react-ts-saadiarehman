import NavBar from "../components/navbar-signup"
import SignUpForm from "../components/signup-form"

function SignUp() {
    return (
        <>
        <div className="bg-blue-50 w-screen h-screen">
            <div>
            <NavBar />    
            </div >
            <div className=" ">
            <div className=" text-black grid justify-items-center">
                <p className="font-bold text-3xl mt-10 ml-10">Sign Up</p>
                <p className="mt-3">Please enter your details to create account</p>
            </div>
            <div className="  flex items-center mt-20">
                <div className="   w-3/4 ">
                    <img src="src\assets\sign_up.png" className=" ml-28"alt="" />
                </div>
                <div className="w-1/2">
                    <SignUpForm />
                </div>
            </div>
            </div>
                        
        </div>
        
            

            
        </>
    )



    }


export default SignUp

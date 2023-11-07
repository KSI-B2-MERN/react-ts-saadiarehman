import NavBar from "../components/navbar-login"
import LoginForm from "../components/login-from"

function Login() {
    return (
        <>
        <div className="bg-blue-50 w-screen h-screen">
            <div>
            <NavBar />    
            </div >
            <div className=" ">
            <div className=" text-black grid justify-items-center">
                <p className="font-bold text-3xl mt-10 ml-10">Login</p>
                <p className="mt-3">Provide your valid login credentials</p>
            </div>
            <div className="  flex items-center mt-20">
                <div className="   w-3/4 ">
                    <img src="src\assets\sign_up.png" className=" ml-28"alt="" />
                </div>
                <div className="w-1/2">
                    <LoginForm />
                </div>
            </div>
            </div>
                        
        </div>
        
            

            
        </>
    )



    }


export default Login

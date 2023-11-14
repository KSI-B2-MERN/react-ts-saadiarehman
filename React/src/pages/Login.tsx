import { useState } from "react";
import NavBar from "../components/navbar-login"
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Login() {
    const navigate =useNavigate();
   
    const [username, setUsername] = useState<string>("");
    const [password, setPassword] = useState<string>("");
  
    
    const onUsernameChange = ((username: string) => {
        setUsername(username);
    });
    const onPasswordChange = ((password: string) => {
        setPassword(password);
    });
  
    const Login = async ({ username, password }: { username: string, password: string }) => {
        try {
          const loginRes = await axios.post("http://localhost:3000/auth/login", {
            username: username,
            password: password,
          });
      
          console.log(loginRes.data);
      
          // Check specific conditions in the response data to determine login success
          if (loginRes.data && loginRes.data.success) {
            alert("Logged in successfully");
            navigate("/");
          } else {
            alert("Incorrect username/password");
          }
        } catch (error) {
          console.error("Error during login:", error);
          // Handle error, e.g., show an error message to the user
          alert("An error occurred during login. Please try again later.");
        }
      };
      
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
                <div className="  flex flex-col items-start justify-start">
                <div className="  text-gray-500">

                    <div className="flex flex-col justify-center">
                        
                        
                        <label className="mt-3">Username</label>
                        <input
                            type="text"
                            className="bg-gray-200 w-80 p-1 border-2 border-gray-500 rounded-md hover:border-black"
                            onChange={(e) => {
                                void onUsernameChange(e.target.value);
                            }} />
                        <label className="mt-3">Password</label>
                        <input
                            type="password"
                            className="bg-gray-200 w-80 p-1 border-2 border-gray-500 rounded-md hover:border-black"
                            onChange={(e) => {
                                void onPasswordChange(e.target.value);
                            }} />
                       
                        

                    </div>
                    <div className=" flex justify-center items-center">
                        <button
                            className=" bg-blue-500 text-black mt-4 w-52 rounded-md p-2 disabled:bg-gray-300"
                            disabled={!(username&& password)}
                            onClick={(() => {
                                void Login({ username: username, password: password });
                            })}
                        >Login</button>
                    </div>
                </div>
            </div >
                </div>
            </div>
            </div>
                        
        </div>
        
            

            
        </>
    )



    }


export default Login

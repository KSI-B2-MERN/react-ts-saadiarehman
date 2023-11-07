
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";



function LoginForm() {

    const navigate =useNavigate();
   
    const [username, setUsername] = useState<string>("");
    const [password, setPassword] = useState<string>("");
  
    
    const onUsernameChange = ((username: string) => {
        setUsername(username);
    });
    const onPasswordChange = ((password: string) => {
        setPassword(password);
    });
  
    const Login = async () => {
        const loginRes = await axios.post("http://localhost:3000/auth/login", {
           
            username: username,
            password: password,
    
        });
        if (loginRes.data) {
        //    alert("logged in successfuly");
            navigate("/");
        } else {
            alert("incorrect username/password");
        }

    }

    return (
        <>
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
                                void Login();
                            })}
                        >Login</button>
                    </div>
                </div>
            </div >
        </>
    )
}

export default LoginForm
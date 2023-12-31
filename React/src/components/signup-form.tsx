import Select from "react-select";
import { useState } from "react";
import axios from "axios";

const roleOptions = [
    { value: "1", label: "student" },
    { value: "2", label: "teacher" }
];


function SignUpForm() {

    const [fname, setFName] = useState<string>("");
    const [lname, setLName] = useState<string>("");
    const [username, setUserName] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [role, setRole] = useState<string>("");

    const onfirstNameChange = ((fname: string) => {
        setFName(fname);
    });
    const onlastNameChange = ((lname: string) => {
        setLName(lname);
    });
    const onUserNameChange = ((username: string) => {
        setUserName(username);
    });
    const onPasswordChange = ((password: string) => {
        setPassword(password);
    });
    const onRoleChange = ((role: string) => {
        setRole(role);
    });
    const SignUp = async () => {
   
        const loginRes = await axios.post("http://localhost:3000/auth/signup", {
            fname: fname,
            lname: lname,
            username: username,
            password: password,
            role: role,
        });
        console.log(loginRes);
        
        if (loginRes.data) {
           
            alert("logged in successfuly");
        } else {
            alert("incorrect username/password");
        }

    }

    return (
        <>
            <div className="  flex flex-col items-start justify-start">
                <div className="  text-gray-500">

                    <div className="flex flex-col justify-center">
                        <label className="mt-3">First Name</label>
                        <input
                            type="text"
                            className="bg-gray-200 w-80 p-1 border-2 border-gray-500 rounded-md hover:border-black"
                            onChange={(e) => {
                                void onfirstNameChange(e.target.value);
                            }} />
                        <label className="mt-3">Last Name</label>
                        <input
                            type="text"
                            className="bg-gray-200 w-80 p-1 border-2 border-gray-500 rounded-md hover:border-black"
                            onChange={(e) => {
                                void onlastNameChange(e.target.value);
                            }} />
                        <label className="mt-3">User Name</label>
                        <input
                            type="text"
                            className="bg-gray-200 w-80 p-1 border-2 border-gray-500 rounded-md hover:border-black"
                            onChange={(e) => {
                                void onUserNameChange(e.target.value);
                            }} />
                        <label className="mt-3">Password</label>
                        <input
                            type="password"
                            className="bg-gray-200 w-80 p-1 border-2 border-gray-500 rounded-md hover:border-black"
                            onChange={(e) => {
                                void onPasswordChange(e.target.value);
                            }} />
                        <label className="mt-3">Role</label>
                        <Select
                            isSearchable={true}
                            options={roleOptions}
                            onChange={(e) => {
                                void onRoleChange(e?.value || "");
                            }}
                            className=" w-80 p-1 border-2 border-gray-500 rounded-md hover:border-black"
                            placeholder="Select Role"
                            isDisabled={false}
                        />

                    </div>
                    <div className=" flex justify-center items-center">
                        <button
                            className=" bg-blue-500 text-black mt-4 w-52 rounded-md p-2 disabled:bg-gray-300"
                            disabled={!(fname && lname && username && password && role)}
                            onClick={(() => {
                                void SignUp();
                            })}
                        >Sign Up</button>
                    </div>
                </div>
            </div >
        </>
    )
}

export default SignUpForm
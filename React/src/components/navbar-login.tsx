import {useNavigate} from "react-router-dom";


function NavBar() {
    const navigate = useNavigate();
    return(
        <>
        <div className="h-16  bg-white shadow-md shadow-white-200 flex justify-between">
        <div className=" flex items-center ml-10">
            <img src="src\assets\logo_ks.png" alt="" />
            <p className="ml-3">Knowledge Streams</p>
        </div>
        <div className=" mr-12  flex items-center">
            <button 
            className="bg-blue-600 p-3 w-full h-1/2  border rounded-md flex items-center text-white"
            onClick={()=>{
                navigate("/signup");
            }}
            >Sign Up</button>
        </div>
        </div>
        </>
    )
}


export default NavBar
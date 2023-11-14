import axios from "axios";
import { useEffect, useState } from "react";
type Users={
    fname: string,
    lname:string,
    username:string,
    id:number,
    role:string
};

function NavBar() {
    const [userData, setUserData] = useState<Users[]>([])
    
   
        const getUserData = async () => {
            try {
              const Response = await axios.get("http://localhost:3000/users/getUser", {
                params: {
                  id: 1
                },
              });
          
              setUserData(Response.data);
              console.log(Response.data)
            } catch (error) {
              console.error("Error fetching user data:", error);
              // Handle error, e.g., show an error message to the user
            }
          };
      
    useEffect(()=>{
        void getUserData();
    },[]);
    
    return(
        <>
        <div className="h-16  bg-blue-600 shadow-md shadow-white-200 flex justify-between text-white">
        <div className=" flex items-center ml-10">
            <img src="src\assets\logo_ks_blue.png" alt="" />
            <p className="ml-3">Knowledge Streams</p>
            <p className="ml-8 border p-2 shadow-lg cursor-pointer"><a href="https://knowledge.tech/">Visit website</a></p>
        </div>
        <div className=" mr-12  flex items-center border shadow-lg border-blue-900 text-xs ">
            <div className="p-3">
                <img src="src\assets\smiley.png" className="h-10 w-10" alt="" />
            </div>
            <div className="text-semibold p-2">
                <p>{`${userData.fname+" "+userData.lname}`}</p>
                <p className="ml-2">{userData.role==1? "Trainee":"Instructor"}</p>
            </div>
        </div>
       
        </div>
        </>
    )
}


export default NavBar
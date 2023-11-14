import axios from "axios";
import { useEffect, useState } from "react";
type Users={
    fname: string,
    lname:string,
    username:string,
    id:number,
    role:string
};

function SideBarHome (){
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
        <div className=" bg-white border rounded-md h-screen">
        <img src="src\assets\sidebar-icon.png" className="w-full h-5"  alt="" />
            <div className="ml-20">
                
                <img src="src\assets\smiley.png" className="w-8 h-8 ml-10 mt-5 mb-5" alt="" />
                <p className="font-semibold ml-6">
                {`${userData.fname+" "+userData.lname}`}
                </p>
              
            </div>
            <h3 className="mt-10 ml-5 font-semibold">NAVIGATION</h3>
            <div className="mt-10 w-80 ml-5">
               <div className="flex p-3 hover:bg-gray-200">
                <img src="src\assets\course-icon.jpg" className="w-8 h-8"/>
                <p className="text-2xl ml-5">Curriculam</p>
               </div>
               <div className="flex p-3 hover:bg-gray-200">
                <img src="src\assets\message.jpg" className="w-8 h-8"/>
                <p className="text-2xl ml-5">Message</p>
               </div>
               <div className="flex hover:bg-gray-200  p-3">
                <img src="src\assets\people.png" className="w-8 h-8"/>
                <p className="text-2xl ml-5">Manage Profile</p>
               </div>
            </div>
            
        </div>
        </>
        
    )

}

export default SideBarHome



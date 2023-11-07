import {useEffect, useState} from "react";
import axios from "axios";
import NavBar from "../components/navbarhome"
import HomeSidebar from "../components/sidebarhome"
import Taskbar from "../components/taskbar"
import Model1 from "../components/model1"
import Model2 from "../components/model2"


type Users={
    fname: string,
    lname:string,
    username:string,
    id:number,
};



function UserComponent({user}:{user:Users}){
    return (
        <>
       
           
                    <tr className="flex justify-between bg-gray-200  text-sm text-gray-700 pt-5">
                        <th  >
                        {` ${user.id}`}
                        </th>
                        <th >
                        {`${user.fname+" "+user.lname}`}
                        </th>
                        <th >
                        {`${user.username}`}
                        </th>
                        <td>
                            <p> 
                        <Model1 />
                        <Model2 />
                            </p>
                           

                        </td>
                    </tr>
               
      
          
           
        </>
    );
}


function HomePage() {
    const [users, setUsers] = useState<Users[]>([]);
    
    const getAllUsers=async ()=>{
        const userData=await axios.get("http://localhost:3000/users/getAllUsers");
        console.log("userData", userData.data);

        setUsers(userData.data);
    };
    useEffect(()=>{
        void getAllUsers();
    },[]);
    return (
        <>
        <div className="bg-blue-100 w-screen h-screen">
            <div>
            <NavBar />    
            </div >
        <div className="flex ">
            <div className="w-1/4 p-5">
                <HomeSidebar />
            </div>
            <div className="w-3/4">
                <div className="p-5">
                <Taskbar Task={"Manage Trainees"}/>
                    <div className="pt-6 rounded-md">
                        
                        <table className="w-full h-full text-lg  bg-gray-500 text-white">
                            <thead className="">
                                <tr className="flex justify-between">
                                    <th scope="col" className="pt-5 pb-5 pl-3">
                                        ID
                                    </th>
                                    <th scope="col" className="pr-11 pt-5 pb-5">
                                        NAME
                                    </th>
                                    <th scope="col" className="pr-11 pt-5 pb-5  ">
                                        USERNAME
                                    </th>
                                    <th scope="col" className=" pr-11 pt-5 pb-5 ">
                                        ACTIONS
                                    </th>
                                
                                </tr>
                            </thead>
                            
                        </table>

                       
                            <div className="w-full h-full bg-white ">
                                {users?(
                                <>
                                {users.map((user)=>{
                                    return <UserComponent user={user} />
                                })}
                                </>
                                ):(
                                <>
                                <p className="text-gray-700 text-xl font-normal">NO RESULT</p>
                                </>
                                )}
                                
                            </div>

                        </div>
                    </div>
                </div> 
                <p>
               
                </p>
               
            </div>
        </div>          
     
        </>
    )}

export default HomePage

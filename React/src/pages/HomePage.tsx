import {useEffect, useState} from "react";
import axios from "axios";
import NavBar from "../components/navbarhome"
import HomeSidebar from "../components/sidebarhome"
import Taskbar from "../components/taskbar"



type Users={
    fname: string,
    lname:string,
    username:string,
    id:number,
    role:string
};





function HomePage() {
    const [users, setUsers] = useState<Users[]>([])
    const [isDeleteModelVisible, setDeleteModelVisible] = useState(false);
    const [isUpdateModelVisible, setUpdateModelVisible] = useState(false);
    const handleDeleteButtonClick=()=>{
        setDeleteModelVisible(true);
       
      }
      const onFirstNameChange = (newFName: string) => {
        setUsers((prevUsers) => [
          {
            ...prevUsers[0],
            fname: newFName,
          },
          // Include other users from the previous state if needed
          // ...prevUsers.slice(1),
        ]);
      
      };
      
      
      const onLastNameChange = (newLName: string) => {
        setUsers((prevUsers) => [
          {
            ...prevUsers[0],
            lname: newLName,
          },
          // Include other users from the previous state if needed
          // ...prevUsers.slice(1),
        ]);
      };
      
      
      
      const updateUser = async() => {
        // Add your update user logic here
        console.log(users)
        const updateRes= await axios.put("http://localhost:3000/users/updateuser",{
            id:users[0].id,
            fname: users[0].fname,
            lname: users[0].lname,
        });
        console.log(updateRes.data);
      
        if(updateRes.data){
            alert("Updated Successfully");
        }else{
            alert("Updated Failed");
        }
        setUpdateModelVisible(false);
        
      }
      const handleUpdateButtonClick=()=>{
        setUpdateModelVisible(true);
       
      }      
    const deleteUser = async (id: number) => {
  try {
  
    const response = await axios.delete("http://localhost:3000/users/deleteUser", {
      params: { id: id },
    });

    console.log("User deleted successfully", response.data);
    // Handle success, update your state, or perform any other necessary actions
   void getAllUsers();
  } catch (error) {
    console.error("Error deleting user:", error);
    // Handle error, show an error message to the user, etc.
  }
  setDeleteModelVisible(false);
};
    const getAllUsers=async ()=>{
        const userData=await axios.get("http://localhost:3000/users/getAllUsers");
        // console.log("userData", userData.data);

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
                                    return(
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
                                                <button
                                                    className="bg-blue-300 text-black active:bg-blue-500 
                                                    font-bold px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1"
                                                    onClick={()=> handleUpdateButtonClick()}>
                                                    Update</button>
                                                <button
                                                        className="bg-red-500 text-black active:bg-blue-500 
                                                        font-bold px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1"
                                                        onClick={()=> handleDeleteButtonClick()}
                                                    >Delete</button>
                                                    {isDeleteModelVisible?( <>
                                                            <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                                                            <div className="relative w-auto my-6 mx-auto max-w-3xl">
                                                                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                                                <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t ">
                                                                    <div className="relative p-6 flex-auto">
                                                                    <p>Are You Sure You Want to Delete this Item</p>
                                                                </div>
                                                                
                                                                
                                                                </div>
                                                                <div className="flex justify-around">
                                                                    <button
                                                                    className="bg-blue-300 text-black active:bg-blue-500 
                                                                    font-bold px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 mt-3"
                                                                    onClick={() => setDeleteModelVisible(false)}
                                                                    >Cancel</button>
                                                                    <button
                                                                    className="bg-red-500 text-black active:bg-blue-500 
                                                                    font-bold px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 mt-3"
                                                                    onClick={()=> void deleteUser(user.id)}
                                                                    >Delete</button>
                                                                    
                                                                </div>
                                                                </div>
                                                            </div>
                                                            </div>
                                                        </>):(null)}
                                                        {isUpdateModelVisible?(<>
                      <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t ">
                 
                  <button
                    className="bg-transparent border-0 text-black float-right"
                    onClick={() => setUpdateModelVisible(false)}
                  >
                    
                    <span className="text-black opacity-7 h-9 w-6 text-xl block bg-gray-400 py-0 rounded-full">
                      x
                    </span>
                    </button>
                    <div className="relative p-6 flex-auto">
                  <form className="bg-gray-200 shadow-md rounded px-8 pt-6 pb-8 w-full">
                    <label className="block text-black text-sm font-bold mb-1">
                      First Name 
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-1 text-black" 
                    defaultValue={user.fname}
                    onChange={(e) => {
                      onFirstNameChange(e.target.value);
                    }}
                    
                    />
                    <label className="block text-black text-sm font-bold mb-1">
                      Last Name
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-1 text-black" 
                    defaultValue={user.lname}
                    onChange={(e) => {
                      onLastNameChange(e.target.value);
                    }}
                    
                    />
                    <label className="block text-black text-sm font-bold mb-1">
                      User Name
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-1 text-black" 
                    readOnly
                    placeholder={user.username}
                    />
                    
                    <label className="block text-black text-sm font-bold mb-1">
                      Role
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-1 text-black" 
                    placeholder={(user.role=="2")? ("Instructor"):("Trainee")} 
                    readOnly
                    />

                    <button
                    className="bg-blue-300 text-black active:bg-blue-500 
                    font-bold px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 mt-3"
                     onClick={()=> 
                       void updateUser()
                     }
                  >Update</button>
                  </form>
                </div>
                
                </div>
                
              </div>
            </div>
          </div>
                    
                    </>):null}
                                                </td>
                                            </tr>
                                        </>
                                    );
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

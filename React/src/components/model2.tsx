import { useEffect, useState } from "react";
import axios from "axios";

type Users={
  fname: string,
  lname:string,
  username:string,
  id:number,
  role:string
};

const deleteUser=async (id:number)=>{
  await axios.delete("http://localhost:3000/users/deleteUser",{
    params:{
      id: id,
    }

    
  });
  
  // console.log("userData", userData.data);

 
};


const Model2 = ({user}:{user:Users}) => {
  // console.log(user)
  useEffect(() => {
    // Call deleteUser when the component mounts
    deleteUser(user.id);
  }, [user.id]);
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <button
        className="bg-red-200 text-black active:bg-blue-500 
      font-bold px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
        type="button"
        onClick={() => setShowModal(true)}
      >
        Delete
      </button>
      {showModal ? (
        <>
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
                    onClick={() => setShowModal(false)}
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
        </>
      ) : null}
    </>
  );
};

export default Model2;

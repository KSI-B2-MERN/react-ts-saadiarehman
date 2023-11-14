import axios from "axios";
import { useState } from "react";

type Users={
  fname: string,
  lname:string,
  username:string,
  id:number,
  role:string
};

const Model1 = ({user}:{user:Users}) => {
  const [showModal, setShowModal] = useState(false);
  const [fname, setFName] = useState<string>(user.fname);
    const [lname, setLName] = useState<string>(user.lname); 
    
    const onfirstNameChange = ((fname: string) => {
      setFName(fname);
  });
 
  const onlastNameChange = ((lname: string) => {
      setLName(lname);
  });

  const updateUser = async () => {
    
    const loginRes = await axios.put("http://localhost:3000/users/updateUser", {
        fname: fname,
        lname: lname,
      
    });
    alert(loginRes.data);
    
    if (loginRes.data) {
       
        alert("user updated successfuly");
    } else {
        alert("user cannot update");
    }

}


  return (
    <>
    
      <button
        className="bg-blue-200 text-black active:bg-blue-500 
      font-bold px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
        type="button"
        onClick={() => setShowModal(true)}
      >
        Edit
      </button>
      {showModal ? (
        <>
          <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t ">
                 
                  <button
                    className="bg-transparent border-0 text-black float-right"
                    onClick={() => setShowModal(false)}
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
                    defaultValue={fname}
                    onChange={(e) => {
                      void onfirstNameChange(e.target.value);
                  }}
                    />
                    <label className="block text-black text-sm font-bold mb-1">
                      Last Name
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-1 text-black" 
                    defaultValue={lname}
                    onChange={(e) => {
                      void onlastNameChange(e.target.value);
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
        </>
      ) : null}
    </>
  );
};

export default Model1;

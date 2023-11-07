import { useState } from "react";

const Moda2 = () => {
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
                 
                  <button
                    className="bg-transparent border-0 text-black float-right"
                    onClick={() => setShowModal(false)}
                  >
                    
                    <span className="text-black opacity-7 h-9 w-6 text-xl block bg-gray-400 py-0 rounded-full font-bolder">
                      x
                    </span>
                    </button>
                    <div className="relative p-6 flex-auto">
                  <p>Are You Sure You Want to Delete this Item</p>
                </div>
                
                
                </div>
                <div className="flex justify-around">
                    <button
                    className="bg-blue-300 text-black active:bg-blue-500 
                    font-bold px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 mt-3"
                    
                  >Cancel</button>
                  <button
                    className="bg-red-500 text-black active:bg-blue-500 
                    font-bold px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 mt-3"
                    
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

export default Moda2;

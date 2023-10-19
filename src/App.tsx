

function App() {
  const onUserNameChange = (username: string) => {
    console.log(username);
  }
  const onUserPasswordChange = (userpassword: string) => {
    console.log(userpassword);
  }
  return (
    <>
      <div className="w-screen h-screen flex flex-col justify-center items-center">
        <div className=" ">
          <div className="text-gray-500 flex flex-col w-1/3">
            <label className="">UserName :</label>
            <input
              id="username"
              className="border-2 border-gray-500 w-64 rounded-md p-1"
              type="text"
              placeholder="Enter User Name"
              required
              onChange={(e) => { void onUserNameChange(e.target.value); }
              } />
            <label className="">Password :</label>
            <input
              id="userpassword"
              className="border-2 border-gray-500 w-64 rounded-md p-1"
              type="password"
              placeholder="Enter User Name"
              required
              onChange={(e) => { void onUserPasswordChange(e.target.value); }
              } />
          </div>
          <div className=" bg-slate-100 border-2 w-16 mt-5">
            <button>Login</button>
          </div>
        </div>
      </div >

    </>
  )
}

export default App

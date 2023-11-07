
function NavBar() {
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
                <p>{"saadia rehman"}</p>
                <p>{"Trainee"}</p>
            </div>
        </div>
       
        </div>
        </>
    )
}


export default NavBar
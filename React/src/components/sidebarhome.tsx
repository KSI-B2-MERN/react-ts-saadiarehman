function SideBarHome (){
    return(
        <>
        <div className=" bg-white border rounded-md h-screen">
        <img src="src\assets\sidebar-icon.png" className="w-full h-5"  alt="" />
            <div className="ml-20">
                
                <img src="src\assets\smiley.png" className="w-8 h-8 ml-10 mt-5 mb-5" alt="" />
                <p>
                    {"Saadia Rehman"}
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



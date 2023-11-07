function Taskbar({ Task }: { Task: string }) {
    return (
      <>
        <div className="w-full h-1/6 shadow-lg p-4">
          <div className="w-full h-full  flex items-center ">
            <p className="text-gray-700 font-semibold text-2xl">{Task}</p>
          </div>
        </div>
      </>
    );
  }
  
  export default Taskbar;
  
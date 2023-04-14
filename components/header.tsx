const Header = ()=>{
return (
<div className="relative bg-gray-100 w-full h-[5rem] overflow-hidden text-left text-[1.13rem] text-white font-poppins">
<div className="absolute top-[0rem] left-[0rem] bg-gray-100 shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] w-[94.5rem] h-[5rem] overflow-hidden text-gray-100">
        <img
          className="absolute top-[1.13rem] left-[5.06rem] w-[3.13rem] h-[2.75rem] object-cover cursor-pointer"
          alt=""
          src="/logo@2x.png"
        />
        <div className="absolute top-[1rem] left-[80.13rem] rounded-8xs bg-turquoise flex flex-row py-[0.63rem] px-[0.94rem] items-center justify-center gap-[0.63rem]">
          <img
            className="relative w-[0.94rem] h-[1.04rem] shrink-0"
            alt=""
            src="/vector7.svg"
          />
          <img
            className="relative w-[1.12rem] h-[1.13rem] shrink-0 hidden"
            alt=""
            src="/vector1.svg"
          />
          <div className="relative uppercase font-semibold">contact</div>
        </div>
        <div className="absolute top-[1rem] left-[28.38rem] flex flex-row items-center justify-center gap-[1.88rem] text-white">
          <div className="flex flex-row p-[0.63rem] items-center justify-center gap-[0.63rem] text-mediumaquamarine">
            <div className="relative capitalize font-semibold">Home</div>
          </div>
          <div className="flex flex-row p-[0.63rem] items-center justify-center gap-[0.63rem]">
            <div className="relative capitalize font-medium">about</div>
            
          </div>
          <div className="flex flex-row p-[0.63rem] items-center justify-center gap-[0.63rem]">
            <div className="relative capitalize font-medium">projects</div>
            
          </div>
          <div className="flex flex-row p-[0.63rem] items-center justify-center gap-[0.63rem]">
            <div className="relative capitalize font-medium">skills</div>
            
          </div>
          <div className="flex flex-row p-[0.63rem] items-center justify-center gap-[0.63rem]">
            <div className="relative capitalize font-medium">achievements</div>
            
          </div>
        </div>
        </div>
        </div>
        )
    }

    export default Header;
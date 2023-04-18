import Image from "next/image";
import logo2x from "../public/logo@2x.png"
import vector7 from "../public/vector7.svg"
import vector1 from "../public/vector1.svg"

const Header = ()=>{
return (
<div className="relative bg-gray-100 w-full h-[5rem] overflow-hidden text-left text-[1.13rem] text-white font-poppins">
<div className="absolute top-[0rem] left-[0rem] bg-gray-100 shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] w-[94.5rem] h-[5rem] overflow-hidden text-gray-100">
        <Image
          className="absolute top-[1.13rem] left-[5.06rem] w-[3.13rem] h-[2.75rem] object-cover cursor-pointer"
          alt=""
          src={logo2x}
        />
        <button className="absolute top-[1rem] hover:text-white text-black left-[80.13rem] rounded-8xs hover:bg-transparent border-solid border-[4px] border-turquoise bg-turquoise flex flex-row py-[0.63rem] px-[0.94rem] items-center justify-center gap-[0.63rem]">
          <Image
            className="relative w-[0.94rem] h-[1.04rem] shrink-0"
            alt=""
            src={vector7}
          />
            <div className="relative uppercase text-lg font-poppins font-medium">Contact</div>
        </button>
        <div className="absolute top-[1rem] left-[28.38rem] flex flex-row items-center justify-center gap-[1.88rem] text-white">
          <div className="flex flex-row p-[0.63rem] items-center justify-center gap-[0.63rem] text-white">
            <button className="relative text-lg bg-transparent max-w-fit text-white font-poppins capitalize font-medium hover:text-mediumaquamarine hover:font-semibold">Home</button>
          </div>
          <div className="flex flex-row p-[0.63rem] items-center justify-center gap-[0.63rem]">
            <button className="relative text-lg bg-transparent max-w-fit text-white font-poppins capitalize font-medium hover:text-mediumaquamarine hover:font-semibold">about</button>
            
          </div>
          <div className="flex flex-row p-[0.63rem] items-center justify-center gap-[0.63rem]">
            <button className="relative text-lg bg-transparent max-w-fit text-white font-poppins capitalize font-medium hover:text-mediumaquamarine hover:font-semibold">projects</button>
            
          </div>
          <div className="flex flex-row p-[0.63rem] items-center justify-center gap-[0.63rem]">
            <button className="relative text-lg bg-transparent max-w-fit text-white font-poppins capitalize font-medium hover:text-mediumaquamarine hover:font-semibold">skills</button>
            
          </div>
          <div className="flex flex-row p-[0.63rem] items-center justify-center gap-[0.63rem]">
            <button className="relative text-lg bg-transparent max-w-fit text-white font-poppins capitalize font-medium hover:text-mediumaquamarine hover:font-semibold">achievements</button>
            
          </div>
        </div>
        </div>
        </div>
        )
    }

    export default Header;
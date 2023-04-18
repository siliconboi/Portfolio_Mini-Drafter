import Image from "next/image";
import blur from "../public/blur.svg";
import skill from "../public/Polygon1.png";

const Skills = () => {
  return (
    <div className="relative bg-gray-100 w-full h-[56.38rem] overflow-hidden text-left text-[4.5rem] text-white font-poppins">
      <div className="absolute left-[0rem] w-[94.5rem] h-[56.38rem] overflow-hidden">
        <div className="absolute top-[0rem] left-[0rem] bg-gray-200 w-[44.88rem] h-[56.38rem]" />
        <Image
          className="absolute top-[0rem] left-[38.44rem] w-[56.06rem] h-[56.38rem]"
          alt=""
          src={blur}
        />
        <Image
          className="absolute top-[9.25rem] left-[53.88rem] w-[31.63rem] h-[35.38rem]"
          alt=""
          src={skill}
        />
        <div className="absolute top-[10.56rem] left-[5.06rem] w-[35.81rem] h-[33.25rem]">
          <div className="absolute top-[0rem] left-[0rem] leading-[140.5%] capitalize font-medium">
            my skills
          </div>
          <button className="cursor-pointer [border:none] py-[0.63rem] px-[1.88rem] bg-turquoise absolute top-[10.19rem] left-[16.69rem] rounded-8xs flex flex-row items-center justify-center">
            <div className="relative text-[1.4rem] uppercase font-medium font-poppins text-gray-100 text-left">
              mongodb
            </div>
          </button>
          <button className="cursor-pointer [border:none] py-[0.63rem] px-[1.88rem] bg-turquoise absolute top-[10.19rem] left-[0.5rem] rounded-8xs flex flex-row items-center justify-center">
            <div className="relative text-[1.4rem] uppercase font-medium font-poppins text-gray-100 text-left">
              postgresql
            </div>
          </button>
          <button className="cursor-pointer [border:none] py-[0.63rem] px-[1.88rem] bg-turquoise absolute top-[15.69rem] left-[25.25rem] rounded-8xs flex flex-row items-center justify-center">
            <div className="relative text-[1.4rem] uppercase font-medium font-poppins text-gray-100 text-left">
              GIT
            </div>
          </button>
          <button className="cursor-pointer [border:none] py-[0.63rem] px-[1.88rem] bg-turquoise absolute top-[21.19rem] left-[0.5rem] rounded-8xs flex flex-row items-center justify-center">
            <div className="relative text-[1.4rem] uppercase font-medium font-poppins text-gray-100 text-left">
              react.js
            </div>
          </button>
          <button className="cursor-pointer [border:none] py-[0.63rem] px-[1.88rem] bg-turquoise absolute top-[21.19rem] left-[13.44rem] rounded-8xs flex flex-row items-center justify-center">
            <div className="relative text-[1.4rem] uppercase font-medium font-poppins text-gray-100 text-left">
              docker
            </div>
          </button>
          <button className="cursor-pointer py-[0.94rem] px-[1.88rem] hover:text-mediumaquamarine font-medium hover:font-semibold hover:border-mediumaquamarine text-turquoise bg-[transparent] absolute top-[29.69rem] left-[0.5rem] rounded-8xs flex flex-row items-center justify-center border-[4px] border-solid border-turquoise">
            <div className="relative text-[1.75rem] uppercase font-poppins text-left">
              projects
            </div>
          </button>
          <button className="cursor-pointer [border:none] py-[0.63rem] px-[1.88rem] bg-turquoise absolute top-[15.69rem] left-[1.06rem] rounded-8xs flex flex-row items-center justify-center">
            <div className="relative text-[1.4rem] uppercase font-medium font-poppins text-gray-100 text-left">
              node.js
            </div>
          </button>
          <button className="cursor-pointer [border:none] py-[0.63rem] px-[1.88rem] bg-turquoise absolute top-[15.69rem] left-[13.69rem] rounded-8xs flex flex-row items-center justify-center">
            <div className="relative text-[1.4rem] uppercase font-medium font-poppins text-gray-100 text-left">
              next.js
            </div>
          </button>
          <button className="cursor-pointer [border:none] py-[0.63rem] px-[1.88rem] bg-turquoise absolute top-[21.19rem] left-[25.25rem] rounded-8xs flex flex-row items-center justify-center">
            <div className="relative text-[1.4rem] uppercase font-medium font-poppins text-gray-100 text-left">
              d3.js
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Skills;

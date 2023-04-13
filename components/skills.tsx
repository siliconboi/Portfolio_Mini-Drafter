import type { NextPage } from "next";
import { useCallback } from "react";

const Skills: NextPage = () => {
  const onLogoIconClick = useCallback(() => {
    // Please sync "profile" to the project
  }, []);

  return (
    <div className="relative bg-gray-100 w-full h-[61.38rem] overflow-hidden text-left text-[4.5rem] text-white font-poppins">
      <div className="absolute top-[5rem] left-[0rem] w-[94.5rem] h-[56.38rem] overflow-hidden">
        <div className="absolute top-[0rem] left-[0rem] bg-gray-200 w-[44.88rem] h-[56.38rem]" />
        <img
          className="absolute top-[0rem] left-[38.44rem] w-[56.06rem] h-[56.38rem]"
          alt=""
          src="/blur.svg"
        />
        <img
          className="absolute top-[9.25rem] left-[53.88rem] w-[31.63rem] h-[35.38rem]"
          alt=""
          src="/skill.svg"
        />
        <div className="absolute top-[10.56rem] left-[5.06rem] w-[35.81rem] h-[33.25rem]">
          <div className="absolute top-[0rem] left-[0rem] leading-[140.5%] capitalize font-medium">
            my skills
          </div>
          <button className="cursor-pointer [border:none] py-[0.63rem] px-[1.88rem] bg-turquoise absolute top-[10.19rem] left-[0.5rem] rounded-8xs flex flex-row items-center justify-center">
            <div className="relative text-[1.75rem] uppercase font-medium font-poppins text-gray-100 text-left">
              html
            </div>
          </button>
          <button className="cursor-pointer [border:none] py-[0.63rem] px-[1.88rem] bg-turquoise absolute top-[15.69rem] left-[25.25rem] rounded-8xs flex flex-row items-center justify-center">
            <div className="relative text-[1.75rem] uppercase font-medium font-poppins text-gray-100 text-left">
              GIT HUB
            </div>
          </button>
          <button className="cursor-pointer [border:none] py-[0.63rem] px-[1.88rem] bg-turquoise absolute top-[21.19rem] left-[0.5rem] rounded-8xs flex flex-row items-center justify-center">
            <div className="relative text-[1.75rem] uppercase font-medium font-poppins text-gray-100 text-left">
              react
            </div>
          </button>
          <button className="cursor-pointer [border:none] py-[0.63rem] px-[1.88rem] bg-turquoise absolute top-[21.19rem] left-[11.44rem] rounded-8xs flex flex-row items-center justify-center">
            <div className="relative text-[1.75rem] uppercase font-medium font-poppins text-gray-100 text-left">
              responsive website
            </div>
          </button>
          <div className="absolute top-[10.19rem] left-[19.19rem] rounded-8xs bg-turquoise flex flex-row py-[0.63rem] px-[1.88rem] items-center justify-center text-[1.75rem] text-gray-100">
            <div className="relative uppercase font-medium">js</div>
          </div>
          <button className="cursor-pointer py-[0.94rem] px-[1.88rem] bg-[transparent] absolute top-[29.69rem] left-[0.5rem] rounded-8xs flex flex-row items-center justify-center border-[4px] border-solid border-turquoise">
            <div className="relative text-[1.13rem] uppercase font-semibold font-poppins text-turquoise text-left">
              projects
            </div>
          </button>
          <button className="cursor-pointer [border:none] py-[0.63rem] px-[1.88rem] bg-turquoise absolute top-[15.69rem] left-[1.06rem] rounded-8xs flex flex-row items-center justify-center">
            <div className="relative text-[1.75rem] uppercase font-medium font-poppins text-gray-100 text-left">
              node js
            </div>
          </button>
          <button className="cursor-pointer [border:none] py-[0.63rem] px-[1.88rem] bg-turquoise absolute top-[15.69rem] left-[13.69rem] rounded-8xs flex flex-row items-center justify-center">
            <div className="relative text-[1.75rem] uppercase font-medium font-poppins text-gray-100 text-left">
              next.js
            </div>
          </button>
          <textarea
            className="[border:none] bg-turquoise font-medium font-poppins text-[1.75rem] absolute top-[10.19rem] left-[10.94rem] rounded-8xs flex flex-row py-[0.63rem] px-[1.88rem] items-center justify-center"
            placeholder="css"
          />
        </div>
      </div>
      <div className="absolute top-[0rem] left-[0rem] bg-gray-100 shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] w-[94.5rem] h-[5rem] overflow-hidden text-[1.13rem]">
        <img
          className="absolute top-[1.13rem] left-[5.06rem] w-[3.13rem] h-[2.75rem] object-cover cursor-pointer"
          alt=""
          src="/logo@2x.png"
          onClick={onLogoIconClick}
        />
        <button className="cursor-pointer [border:none] py-[0.63rem] px-[0.94rem] bg-turquoise absolute top-[1rem] left-[80.13rem] rounded-8xs flex flex-row items-center justify-center gap-[0.63rem]">
          <img
            className="relative w-[0.94rem] h-[1.04rem] shrink-0"
            alt=""
            src="/vector.svg"
          />
          <img
            className="relative w-[1.12rem] h-[1.13rem] shrink-0 hidden"
            alt=""
            src="/vector1.svg"
          />
          <div className="relative text-[1.13rem] uppercase font-semibold font-poppins text-gray-100 text-left">
            contact
          </div>
        </button>
        <div className="absolute top-[1rem] left-[28.38rem] flex flex-row items-center justify-center gap-[1.88rem]">
          <div className="flex flex-row p-[0.63rem] items-center justify-center gap-[0.63rem]">
            <div className="relative capitalize font-medium">home</div>
            <img
              className="relative w-[0.94rem] h-[0.94rem] shrink-0 overflow-hidden hidden"
              alt=""
              src="/up.svg"
            />
          </div>
          <div className="flex flex-row p-[0.63rem] items-center justify-center gap-[0.63rem]">
            <div className="relative capitalize font-medium">about</div>
            <img
              className="relative w-[0.94rem] h-[0.94rem] shrink-0 overflow-hidden"
              alt=""
              src="/up.svg"
            />
          </div>
          <div className="flex flex-row p-[0.63rem] items-center justify-center gap-[0.63rem]">
            <div className="relative capitalize font-medium">projects</div>
            <img
              className="relative w-[0.94rem] h-[0.94rem] shrink-0 overflow-hidden hidden"
              alt=""
              src="/up.svg"
            />
          </div>
          <div className="flex flex-row p-[0.63rem] items-center justify-center gap-[0.63rem] text-mediumaquamarine">
            <div className="relative capitalize font-semibold">skills</div>
            <img
              className="relative w-[0.94rem] h-[0.94rem] shrink-0 overflow-hidden hidden"
              alt=""
              src="/up1.svg"
            />
          </div>
          <div className="flex flex-row p-[0.63rem] items-center justify-center gap-[0.63rem]">
            <div className="relative capitalize font-medium">achievements</div>
            <img
              className="relative w-[0.94rem] h-[0.94rem] shrink-0 overflow-hidden hidden"
              alt=""
              src="/up.svg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;

import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";

const Home: NextPage = () => {
  const router = useRouter();

  const onLogoIconClick = useCallback(() => {
    router.push("/profile");
  }, [router]);

  return (
    <div className="relative bg-gray-100 w-full h-[61.38rem] overflow-hidden text-left text-[1.13rem] text-white font-poppins">
      <div className="absolute top-[5rem] left-[0rem] w-[94.5rem] h-[56.38rem] overflow-hidden">
        <img
          className="absolute top-[0rem] left-[35.25rem] w-[59.25rem] h-[56.38rem]"
          alt=""
          src="/blur.svg"
        />
        <img
          className="absolute top-[0rem] left-[42rem] w-[52.5rem] h-[55.13rem]"
          alt=""
          src="/animationplanet.svg"
        />
        <div className="absolute top-[0rem] left-[72.44rem] bg-gray-200 w-[22.06rem] h-[56.38rem]" />
        <div className="absolute top-[13.44rem] left-[5.13rem] w-[35.19rem] h-[29.44rem]">
          <div className="absolute top-[0rem] left-[0rem] text-[4.5rem] leading-[135%] font-medium inline-block w-[35.19rem]">
            <span>
              <span className="capitalize">i’</span>
              <span className="lowercase">m a</span>
            </span>
            <span className="capitalize">
              <span>{` full stack `}</span>
              <span className="text-turquoise">developer</span>
            </span>
          </div>
          <div className="absolute top-[12.94rem] left-[0rem] w-[16.94rem] h-[2.19rem]">
            <img
              className="absolute top-[0rem] left-[0rem] w-[2.3rem] h-[2.19rem] object-cover"
              alt=""
              src="/image-11@2x.png"
            />
            <img
              className="absolute top-[0rem] left-[2.93rem] w-[2.3rem] h-[2.19rem] object-cover"
              alt=""
              src="/image-2@2x.png"
            />
            <img
              className="absolute top-[0rem] left-[5.86rem] w-[2.3rem] h-[2.19rem] object-cover"
              alt=""
              src="/image-3@2x.png"
            />
            <img
              className="absolute top-[0rem] left-[8.78rem] w-[2.3rem] h-[2.19rem] object-cover"
              alt=""
              src="/image-41@2x.png"
            />
            <img
              className="absolute top-[0rem] left-[11.71rem] w-[2.3rem] h-[2.19rem] object-cover"
              alt=""
              src="/image-51@2x.png"
            />
            <img
              className="absolute top-[0rem] left-[14.64rem] rounded-26xl w-[2.3rem] h-[2.19rem] object-cover"
              alt=""
              src="/image-6@2x.png"
            />
          </div>
          <div className="absolute top-[16.38rem] left-[0rem] leading-[189.5%] text-gray-400 inline-block w-[32.06rem]">
            <p className="m-0">
              <span className="capitalize">{`Lorem `}</span>
              <span className="lowercase">
                ipsum dolor sit amet consectetur
              </span>
              <span className="capitalize">{`. Egestas `}</span>
              <span className="lowercase">
                ultrices viverra nibh bibendum lacus ac hendrerit mauris
              </span>
              <span className="capitalize">. Augue</span>
            </p>
            <p className="m-0">
              <span className="lowercase">
                nulla at id egestas odio ornare tellus
              </span>
              <span className="capitalize">.</span>
            </p>
          </div>
          <div className="absolute top-[25.88rem] left-[12.75rem] rounded-8xs flex flex-row py-[0.94rem] px-[1.88rem] items-center justify-center text-turquoise border-[4px] border-solid border-turquoise">
            <div className="relative uppercase font-semibold">projects</div>
          </div>
          <div className="absolute top-[25.88rem] left-[0rem] rounded-8xs bg-turquoise flex flex-row py-[0.94rem] px-[1.88rem] items-center justify-center gap-[0.63rem] text-gray-100">
            <img
              className="relative w-[0.94rem] h-[1.04rem] shrink-0"
              alt=""
              src="/vector6.svg"
            />
            <img
              className="relative w-[1.12rem] h-[1.13rem] shrink-0 hidden"
              alt=""
              src="/vector4.svg"
            />
            <div className="relative uppercase font-semibold">contact</div>
          </div>
        </div>
        <img
          className="absolute top-[13.31rem] left-[52.63rem] rounded-3xs w-[32rem] h-[29.69rem] object-cover"
          alt=""
          src="/profile-pic1@2x.png"
        />
        <div className="absolute top-[41rem] left-[58.63rem] rounded-8xs bg-white flex flex-row py-[0.63rem] px-[1.56rem] items-center justify-center text-[2.13rem] text-gray-100 font-petrona">
          <div className="relative capitalize font-medium">
            Aishwary Tripathi
          </div>
        </div>
      </div>
      <div className="absolute top-[0rem] left-[0rem] bg-gray-100 shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] w-[94.5rem] h-[5rem] overflow-hidden text-gray-100">
        <img
          className="absolute top-[1.13rem] left-[5.06rem] w-[3.13rem] h-[2.75rem] object-cover cursor-pointer"
          alt=""
          src="/logo@2x.png"
          onClick={onLogoIconClick}
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
            <div className="relative capitalize font-semibold">home</div>
            <img
              className="relative w-[0.94rem] h-[0.94rem] shrink-0 overflow-hidden hidden"
              alt=""
              src="/up1.svg"
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
          <div className="flex flex-row p-[0.63rem] items-center justify-center gap-[0.63rem]">
            <div className="relative capitalize font-medium">skills</div>
            <img
              className="relative w-[0.94rem] h-[0.94rem] shrink-0 overflow-hidden hidden"
              alt=""
              src="/up.svg"
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

export default Home;

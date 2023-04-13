import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";

const Contacts: NextPage = () => {
  const router = useRouter();

  const onLogoIconClick = useCallback(() => {
    router.push("/profile");
  }, [router]);

  return (
    <div className="relative bg-gray-100 w-full h-[61.38rem] overflow-hidden text-left text-[4.5rem] text-white font-poppins">
      <div className="absolute top-[5rem] left-[0rem] w-[94.5rem] h-[56.38rem] overflow-hidden">
        <img
          className="absolute top-[0rem] left-[13.88rem] w-[66.81rem] h-[56.38rem]"
          alt=""
          src="/blur.svg"
        />
        <div className="absolute top-[3.75rem] left-[35.88rem] leading-[140.5%] capitalize font-medium">
          contacts
        </div>
        <div className="absolute top-[15.69rem] left-[13.5rem] w-[71.44rem] h-[25rem] overflow-hidden text-[2.5rem] text-gray-500">
          <div className="absolute top-[0.13rem] left-[27.69rem] w-[43.75rem] h-[24.75rem] overflow-hidden">
            <div className="absolute top-[0rem] left-[0rem] rounded-3xs [background:linear-gradient(103.67deg,_rgba(255,_255,_255,_0.3),_rgba(255,_255,_255,_0.1))] [backdrop-filter:blur(200px)] w-[43.75rem] h-[24.75rem]" />
            <div className="absolute top-[7.63rem] left-[8.06rem] flex flex-row items-center justify-center gap-[1.25rem]">
              <img
                className="relative w-[4rem] h-[4rem] shrink-0 object-cover"
                alt=""
                src="/image-7@2x.png"
              />
              <div className="flex flex-row p-[0.63rem] items-center justify-center gap-[0.63rem]">
                <div className="relative font-medium">
                  <span className="capitalize">send</span>
                  <span className="lowercase"> an</span>
                  <span className="capitalize"> email</span>
                </div>
                <img
                  className="relative w-[0.94rem] h-[0.94rem] shrink-0 overflow-hidden hidden"
                  alt=""
                  src="/up2.svg"
                />
              </div>
            </div>
            <div className="absolute top-[13.5rem] left-[8.06rem] flex flex-row items-center justify-center gap-[1.25rem]">
              <img
                className="relative w-[4rem] h-[4rem] shrink-0 object-cover"
                alt=""
                src="/image-8@2x.png"
              />
              <div className="flex flex-row p-[0.63rem] items-center justify-center gap-[0.63rem]">
                <div className="relative font-medium">
                  <span className="capitalize">send</span>
                  <span className="lowercase">{` on `}</span>
                  <span className="capitalize">linkedin</span>
                </div>
                <img
                  className="relative w-[0.94rem] h-[0.94rem] shrink-0 overflow-hidden hidden"
                  alt=""
                  src="/up2.svg"
                />
              </div>
            </div>
          </div>
          <img
            className="absolute top-[0rem] left-[0rem] rounded-3xs w-[26.97rem] h-[25rem] object-cover"
            alt=""
            src="/profile-pic@2x.png"
          />
          <textarea className="[border:none] bg-[transparent] absolute top-[19.19rem] left-[10.31rem] w-[4.06rem] h-[4.06rem] opacity-[0]" />
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

export default Contacts;

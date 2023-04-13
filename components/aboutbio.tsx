import type { NextPage } from "next";
import { useState, useCallback } from "react";
import { useRouter } from "next/router";
import About from "./about";
import PortalPopup from "./portal-popup";

const Aboutbio: NextPage = () => {
  const router = useRouter();
  const [isAboutOpen, setAboutOpen] = useState(false);

  const onLogoIconClick = useCallback(() => {
    router.push("/profile");
  }, [router]);

  const openAbout = useCallback(() => {
    setAboutOpen(true);
  }, []);

  const closeAbout = useCallback(() => {
    setAboutOpen(false);
  }, []);

  return (
    <>
      <div className="relative bg-gray-100 w-full h-[61.38rem] overflow-hidden text-left text-[4.5rem] text-white font-poppins">
        <div className="absolute top-[5rem] left-[0rem] w-[94.5rem] h-[56.38rem] overflow-hidden">
          <img
            className="absolute h-[104.77%] w-[62.5%] top-[0%] right-[37.5%] bottom-[-4.77%] left-[0%] max-w-full overflow-hidden max-h-full"
            alt=""
            src="/circlesbg.svg"
          />
          <div className="absolute top-[0rem] left-[49.63rem] bg-gray-200 w-[44.88rem] h-[56.38rem]" />
          <img
            className="absolute top-[0rem] left-[0rem] w-[56.81rem] h-[56.38rem]"
            alt=""
            src="/blur.svg"
          />
          <div className="absolute top-[10.56rem] left-[57.31rem] w-[32.13rem] h-[35.25rem]">
            <div className="absolute top-[0rem] left-[0rem] leading-[140.5%] capitalize font-medium">
              bio
            </div>
            <textarea
              className="[border:none] bg-[transparent] font-poppins text-[1.13rem] absolute top-[7.56rem] left-[0.06rem] w-[32.06rem] h-[21rem]"
              placeholder={`Lorem ipsum dolor sit amet consectetur. Egestas ultrices viverra nibh bibendum lacus ac hendrerit mauris. Augue
nulla at id egestas odio ornare tellus.`}
              defaultValue={`Lorem ipsum dolor sit amet consectetur. Egestas ultrices viverra nibh bibendum lacus ac hendrerit mauris. Augue
nulla at id egestas odio ornare tellus.`}
            />
            <button className="cursor-pointer [border:none] py-[0.94rem] px-[1.88rem] bg-turquoise absolute top-[31.69rem] left-[0.06rem] rounded-8xs flex flex-row items-center justify-center gap-[0.63rem]">
              <img
                className="relative w-[0.94rem] h-[1.04rem] shrink-0"
                alt=""
                src="/vector2.svg"
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
          </div>
          <img
            className="absolute top-[20.63rem] left-[10rem] w-[29.13rem] h-[15.05rem]"
            alt=""
            src="/group-2.svg"
          />
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
              src="/vector3.svg"
            />
            <img
              className="relative w-[1.12rem] h-[1.13rem] shrink-0 hidden"
              alt=""
              src="/vector4.svg"
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
            <button
              className="cursor-pointer [border:none] p-[0.63rem] bg-[transparent] flex flex-row items-center justify-center gap-[0.63rem]"
              onClick={openAbout}
            >
              <div className="relative text-[1.13rem] capitalize font-semibold font-poppins text-mediumaquamarine text-left">
                about
              </div>
              <img
                className="relative w-[0.94rem] h-[0.94rem] shrink-0 overflow-hidden"
                alt=""
                src="/up1.svg"
              />
            </button>
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
              <div className="relative capitalize font-medium">
                achievements
              </div>
              <img
                className="relative w-[0.94rem] h-[0.94rem] shrink-0 overflow-hidden hidden"
                alt=""
                src="/up.svg"
              />
            </div>
          </div>
        </div>
      </div>
      {isAboutOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeAbout}
        >
          <About onClose={closeAbout} />
        </PortalPopup>
      )}
    </>
  );
};

export default Aboutbio;

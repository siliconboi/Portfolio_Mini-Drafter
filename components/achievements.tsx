import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";

const Achivements: NextPage = () => {
  const router = useRouter();

  const onLogoIconClick = useCallback(() => {
    router.push("/profile");
  }, [router]);

  return (
    <div className="relative bg-gray-100 w-full h-[61.38rem] overflow-hidden text-left text-[4.5rem] text-white font-poppins">
      <div className="absolute top-[5rem] left-[0rem] w-[94.5rem] h-[56.38rem] overflow-hidden">
        <img
          className="absolute h-[104.77%] w-[62.5%] top-[0%] right-[37.5%] bottom-[-4.77%] left-[0%] max-w-full overflow-hidden max-h-full"
          alt=""
          src="/circlesbg.svg"
        />
        <div className="absolute top-[0rem] left-[49.63rem] bg-gray-200 w-[44.88rem] h-[56.38rem]" />
        <img
          className="absolute top-[0rem] left-[0rem] w-[56.19rem] h-[56.38rem]"
          alt=""
          src="/blur1.svg"
        />
        <div className="absolute top-[9.63rem] left-[58.19rem] w-[31.25rem] h-[37.19rem]">
          <div className="absolute top-[0rem] left-[0.13rem] leading-[140.5%] capitalize font-medium">
            achivements
          </div>
          <div className="absolute top-[7.56rem] left-[0rem] w-[31.25rem] h-[29.63rem] text-[1rem] text-gray-500 font-inter">
            <div className="absolute top-[0rem] left-[0rem] rounded-3xs bg-aquamarine w-[31.25rem] h-[9.38rem] overflow-hidden">
              <div className="absolute top-[1.5rem] left-[1.25rem] w-[26.75rem] h-[6.38rem]">
                <div className="absolute top-[0rem] left-[0rem] text-[1.38rem] font-semibold text-gray-100">
                  Lorem ipsum dolor sit amet consectetur.
                </div>
                <div className="absolute top-[4.25rem] left-[0rem] w-[26.75rem] flex flex-row items-start justify-start gap-[0.38rem]">
                  <div className="relative capitalize">about :</div>
                  <div className="relative text-[0.88rem] inline-block w-[22.94rem] shrink-0">
                    <span className="capitalize">{`Lorem `}</span>
                    <span className="lowercase">
                      ipsum dolor sit amet consectetur
                    </span>
                    <span className="capitalize">{`. Ultrices `}</span>
                    <span className="lowercase">
                      feugiat nec quis mi et sed lorem sit faucibus
                    </span>
                    <span className="capitalize">.</span>
                  </div>
                </div>
                <div className="absolute top-[2.44rem] left-[0rem] flex flex-row items-center justify-start gap-[0.38rem]">
                  <div className="relative capitalize">date :</div>
                  <div className="relative uppercase"> mm yY</div>
                </div>
              </div>
              <img
                className="absolute top-[0.63rem] left-[29rem] w-[1rem] h-[1rem] overflow-hidden"
                alt=""
                src="/streamlineinterfacearrowsexpand5expandsmallbiggerretractsmallerbig1.svg"
              />
            </div>
            <div className="absolute top-[10.13rem] left-[0rem] rounded-3xs bg-aquamarine w-[31.25rem] h-[9.38rem] overflow-hidden">
              <div className="absolute top-[1.5rem] left-[1.25rem] w-[26.75rem] h-[6.38rem]">
                <div className="absolute top-[0rem] left-[0rem] text-[1.38rem] font-semibold text-gray-100">
                  Lorem ipsum dolor sit amet consectetur.
                </div>
                <div className="absolute top-[4.25rem] left-[0rem] w-[26.75rem] flex flex-row items-start justify-start gap-[0.38rem]">
                  <div className="relative capitalize">about :</div>
                  <div className="relative text-[0.88rem] inline-block w-[22.94rem] shrink-0">
                    <span className="capitalize">{`Lorem `}</span>
                    <span className="lowercase">
                      ipsum dolor sit amet consectetur
                    </span>
                    <span className="capitalize">{`. Ultrices `}</span>
                    <span className="lowercase">
                      feugiat nec quis mi et sed lorem sit faucibus
                    </span>
                    <span className="capitalize">.</span>
                  </div>
                </div>
                <div className="absolute top-[2.44rem] left-[0rem] flex flex-row items-center justify-start gap-[0.38rem]">
                  <div className="relative capitalize">date :</div>
                  <div className="relative uppercase"> mm yY</div>
                </div>
              </div>
              <img
                className="absolute top-[0.63rem] left-[29rem] w-[1rem] h-[1rem] overflow-hidden"
                alt=""
                src="/streamlineinterfacearrowsexpand5expandsmallbiggerretractsmallerbig1.svg"
              />
            </div>
            <div className="absolute top-[20.25rem] left-[0rem] rounded-3xs bg-aquamarine w-[31.25rem] h-[9.38rem] overflow-hidden">
              <div className="absolute top-[1.5rem] left-[1.25rem] w-[26.75rem] h-[6.38rem]">
                <div className="absolute top-[0rem] left-[0rem] text-[1.38rem] font-semibold text-gray-100">
                  Lorem ipsum dolor sit amet consectetur.
                </div>
                <div className="absolute top-[4.25rem] left-[0rem] w-[26.75rem] flex flex-row items-start justify-start gap-[0.38rem]">
                  <div className="relative capitalize">about :</div>
                  <div className="relative text-[0.88rem] inline-block w-[22.94rem] shrink-0">
                    <span className="capitalize">{`Lorem `}</span>
                    <span className="lowercase">
                      ipsum dolor sit amet consectetur
                    </span>
                    <span className="capitalize">{`. Ultrices `}</span>
                    <span className="lowercase">
                      feugiat nec quis mi et sed lorem sit faucibus
                    </span>
                    <span className="capitalize">.</span>
                  </div>
                </div>
                <div className="absolute top-[2.44rem] left-[0rem] flex flex-row items-center justify-start gap-[0.38rem]">
                  <div className="relative capitalize">date :</div>
                  <div className="relative uppercase"> mm yY</div>
                </div>
              </div>
              <img
                className="absolute top-[0.63rem] left-[29rem] w-[1rem] h-[1rem] overflow-hidden"
                alt=""
                src="/streamlineinterfacearrowsexpand5expandsmallbiggerretractsmallerbig1.svg"
              />
            </div>
          </div>
        </div>
        <img
          className="absolute top-[19.19rem] left-[15.81rem] w-[18.23rem] h-[18.91rem]"
          alt=""
          src="/property-1default6.svg"
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
          <button className="cursor-pointer [border:none] p-[0.63rem] bg-[transparent] flex flex-row items-center justify-center gap-[0.63rem]">
            <div className="relative text-[1.13rem] capitalize font-semibold font-poppins text-mediumaquamarine text-left">
              achievements
            </div>
            <img
              className="relative w-[0.94rem] h-[0.94rem] shrink-0 overflow-hidden hidden"
              alt=""
              src="/up1.svg"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Achivements;

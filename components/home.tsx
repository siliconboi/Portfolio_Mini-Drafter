import Image from "next/image";
import blur from "../public/blur.svg"
import animationplanet from "../public/animationplanet.svg"
import image112x from "../public/image-11@2x.png"
import image22x from "../public/image-2@2x.png"
import image32x from "../public/image-3@2x.png"
import image412x from "../public/image-41@2x.png"
import image512x from "../public/image-51@2x.png"
import image62x from "../public/image-6@2x.png"
import vector4 from "../public/vector4.svg"
import vector6 from "../public/vector6.svg"
import profilepic12x from "../public/profile-pic1@2x.png"

const Homecomp = () => {

  return (
    <div className="relative bg-gray-100 w-full h-[56.38rem] overflow-hidden text-left text-[1.13rem] text-white font-poppins">
      <div className="absolute left-[0rem] w-[94.5rem] h-[56.38rem] overflow-hidden">
        <Image
          className="absolute top-[0rem] left-[35.25rem] w-[59.25rem] h-[56.38rem]"
          alt=""
          src={blur}
        />
        <Image
          className="absolute top-[0rem] left-[42rem] w-[52.5rem] h-[55.13rem]"
          alt=""
          src={animationplanet}
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
            <Image
              className="absolute top-[0rem] left-[0rem] w-[2.3rem] h-[2.19rem] object-cover"
              alt=""
              src={image112x}
            />
            <Image
              className="absolute top-[0rem] left-[2.93rem] w-[2.3rem] h-[2.19rem] object-cover"
              alt=""
              src={image22x}
            />
            <Image
              className="absolute top-[0rem] left-[5.86rem] w-[2.3rem] h-[2.19rem] object-cover"
              alt=""
              src={image32x}
            />
            <Image
              className="absolute top-[0rem] left-[8.78rem] w-[2.3rem] h-[2.19rem] object-cover"
              alt=""
              src={image412x}
            />
            <Image
              className="absolute top-[0rem] left-[11.71rem] w-[2.3rem] h-[2.19rem] object-cover"
              alt=""
              src={image512x}
            />
            <Image
              className="absolute top-[0rem] left-[14.64rem] rounded-26xl w-[2.3rem] h-[2.19rem] object-cover"
              alt=""
              src={image62x}
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
          <button className="absolute w-[9rem] my-[1rem] top-[25.88rem] hover:text-white text-black left-[12.75rem] rounded-8xs hover:bg-transparent border-solid border-[4px] border-turquoise bg-turquoise flex flex-row py-[0.63rem] px-[1.88remrem] items-center justify-center gap-[0.94rem]">
            <div className="relative uppercase text-lg font-poppins font-medium">Projects</div>
        </button>
          <button className="absolute my-[1rem] top-[25.88rem] hover:text-white text-black left-[0rem] rounded-8xs hover:bg-transparent border-solid border-[4px] border-turquoise bg-turquoise flex flex-row py-[0.63rem] px-[1.88remrem] items-center justify-center gap-[0.94rem]">
          <Image
            className="relative w-[0.94rem] h-[1.04rem] shrink-0"
            alt=""
            src={vector6}
          />
            <div className="relative uppercase text-lg font-poppins font-medium">Contact</div>
        </button>
        </div>
        <Image
          className="absolute top-[13.31rem] left-[52.63rem] rounded-full w-[32rem] h-[29.69rem] object-cover"
          alt=""
          src={profilepic12x}
        />
        <div className="absolute top-[41rem] left-[58.63rem] rounded-8xs bg-white flex flex-row py-[0.63rem] px-[1.56rem] items-center justify-center text-[2.13rem] text-gray-100 font-petrona">
          <div className="relative capitalize font-medium">
            Aishwary Tripathi
          </div>
        </div>
      </div>
      </div>
  );
};

export default Homecomp;

import Image from "next/image";
import circlesbg from "../public/circlesbg.svg"
import blur from "../public/blur.svg"
import vector2 from "../public/vector2.svg"
import vector1 from "../public/vector1.svg"
import group2 from "../public/group-2.svg"

const Aboutbio = () => {

  return (
    <>
      <div className="relative bg-gray-100 w-full h-[56.38rem] overflow-hidden text-left text-[4.5rem] text-white font-poppins">
        <div className="absolute left-[0rem] w-[94.5rem] h-[56.38rem] overflow-hidden">
          <Image
            src={circlesbg}
            className="absolute h-[104.77%] w-[62.5%] top-[0%] right-[37.5%] bottom-[-4.77%] left-[0%] max-w-full overflow-hidden max-h-full"
            alt=""
          />

          <div className="absolute top-[0rem] left-[49.63rem] bg-gray-200 w-[44.88rem] h-[56.38rem]" />

          <Image
            src={blur}
            className="absolute top-[0rem] left-[0rem] w-[56.81rem] h-[56.38rem]"
            alt=""
          />
          <div className="absolute top-[10.56rem] left-[57.31rem] w-[32.13rem] h-[35.25rem]">
            <div className="absolute top-[0rem] left-[0rem] leading-[140.5%] capitalize font-medium">
              bio
            </div>
            <div
              className="[border:none] bg-[transparent] font-poppins text-[1.13rem] absolute top-[7.56rem] left-[0.06rem] w-[32.06rem] h-[21rem]"
            >Lorem ipsum dolor sit amet consectetur. Egestas ultrices viverra nibh bibendum lacus ac hendrerit mauris. Augue
            nulla at id egestas odio ornare tellus.</div>
            <button className="cursor-pointer border-turquoise border-[4px] [border:solid] py-[0.94rem] px-[1.88rem] bg-turquoise hover:bg-transparent hover:text-white absolute top-[31.69rem] left-[0.06rem] rounded-8xs flex flex-row items-center justify-center gap-[0.63rem]">
              <Image
                className="relative w-[0.94rem] h-[1.04rem] shrink-0 hover:hidden"
                alt=""
                src={vector2}
              />
              <div className="relative text-[1.13rem] uppercase font-semibold font-poppins text-left">
                contact
              </div>
            </button>
          </div>
          <Image
            className="absolute top-[20.63rem] left-[10rem] w-[29.13rem] h-[15.05rem]"
            alt=""
            src={group2}
          />
        </div>

      </div>
    </>
  );
};

export default Aboutbio;

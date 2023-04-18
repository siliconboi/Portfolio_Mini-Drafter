import Image from "next/image";
import up2 from "../public/up2.svg"
import profilepic2 from "../public/profile-pic2@2x.png"
import image712x from "../public/image-71@2x.png"
import vector from "../public/vector.svg"
import vector1 from "../public/vector1.svg"

const Footer = () => {
  return (
    <div className="relative bg-gray-100 w-full h-[56.38rem] overflow-hidden text-left text-[4.5rem] text-white font-poppins">
    <div className="absolute left-[0rem] bg-mediumaquamarine w-[94.5rem] h-[40.5rem] overflow-hidden text-[1.5rem] text-gray-100">
        <div className="absolute top-[8.44rem] left-[54.13rem] w-[25.75rem] h-[3.5rem]">
          <div className="absolute top-[0rem] left-[0rem] rounded-8xs bg-turquoise flex flex-row py-[0.63rem] px-[1.25rem] items-center justify-center gap-[0.63rem]">
            <div className="relative capitalize font-medium">home</div>
            <Image
              className="relative w-[0.94rem] h-[0.94rem] shrink-0 overflow-hidden hidden"
              alt=""
              src={up2}
            />
          </div>
          <div className="absolute top-[0rem] left-[8.56rem] rounded-8xs bg-turquoise flex flex-row py-[0.63rem] px-[1.25rem] items-center justify-center gap-[0.63rem]">
            <div className="relative capitalize font-medium">about</div>
            <Image
              className="relative w-[0.94rem] h-[0.94rem] shrink-0 overflow-hidden hidden"
              alt=""
              src={up2}
            />
          </div>
          <div className="absolute top-[0rem] left-[17.19rem] rounded-8xs bg-turquoise flex flex-row py-[0.63rem] px-[1.25rem] items-center justify-center gap-[0.63rem]">
            <div className="relative capitalize font-medium">projects</div>
            <Image
              className="relative w-[0.94rem] h-[0.94rem] shrink-0 overflow-hidden hidden"
              alt=""
              src={up2}
            />
          </div>
        </div>
        <div className="absolute top-[13.44rem] left-[56.88rem] w-[20.25rem] h-[3.5rem]">
          <div className="absolute top-[0rem] left-[0rem] rounded-8xs bg-turquoise flex flex-row py-[0.63rem] px-[1.25rem] items-center justify-center gap-[0.63rem]">
            <div className="relative capitalize font-medium">skills</div>
            <Image
              className="relative w-[0.94rem] h-[0.94rem] shrink-0 overflow-hidden hidden"
              alt=""
              src={up2}
            />
          </div>
          <div className="absolute top-[0rem] left-[7.81rem] rounded-8xs bg-turquoise flex flex-row py-[0.63rem] px-[1.25rem] items-center justify-center gap-[0.63rem]">
            <div className="relative capitalize font-medium">achivements</div>
            <Image
              className="relative w-[0.94rem] h-[0.94rem] shrink-0 overflow-hidden hidden"
              alt=""
              src={up2}
            />
          </div>
        </div>
        <Image
          className="absolute top-[5.19rem] left-[13.44rem] rounded-3xs w-[17.75rem] h-[16.44rem] object-cover"
          alt=""
          src={profilepic2}
        />
        <div className="absolute top-[20.69rem] left-[14.81rem] rounded-8xs bg-white flex flex-row py-[0.63rem] px-[1.56rem] items-center justify-center font-petrona">
          <div className="relative capitalize font-medium">
            Aishwary Tripathi
          </div>
        </div>
        <div className="absolute top-[27.38rem] left-[17.5rem] rounded-3xs bg-lightcyan h-[3.56rem] overflow-hidden flex flex-row py-[0.63rem] pr-[0.63rem] pl-[0.94rem] box-border items-center justify-center gap-[9.38rem] text-[1.13rem] text-gray-300">
          <div className="relative w-[7.75rem] h-[1.69rem] shrink-0">
            <Image
              className="absolute top-[0.06rem] left-[0rem] w-[1.56rem] h-[1.56rem] object-cover"
              alt=""
              src={image712x}
            />
            <div className="absolute top-[0rem] left-[2.19rem] capitalize font-medium">
              send mail
            </div>
          </div>
          <div className="rounded-8xs bg-turquoise flex flex-row py-[0.63rem] px-[0.94rem] items-center justify-center gap-[0.63rem] text-gray-100">
            <Image
              className="relative w-[0.94rem] h-[1.04rem] shrink-0"
              alt=""
              src={vector}
            />
            <Image
              className="relative w-[1.12rem] h-[1.13rem] shrink-0 hidden"
              alt=""
              src={vector1}
            />
            <div className="relative uppercase font-semibold">send</div>
          </div>
        </div>
      </div>
        </div>
  );
};

export default Footer;

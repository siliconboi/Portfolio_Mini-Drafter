import Image from "next/image";
import vector226 from "../public/vector-226.svg"
import up from "../public/up.svg"

const About = () => {
  return (
    <div className="relative rounded-3xs bg-white shadow-[-4px_0px_8px_rgba(0,_0,_0,_0.1),_4px_4px_8px_rgba(0,_0,_0,_0.1)] w-[206px] h-[147px] overflow-hidden max-w-full max-h-full text-left text-lg text-gray-100 font-poppins">
      <Image
      width={206}
        className="absolute top-[0px] left-[0px] w-[206px] h-[18px]"
        alt=""
        src={vector226}
      />
      <div className="absolute top-[12px] left-[0px] bg-lightcyan box-border w-[206px] h-[45px] border-b-[2px] border-dashed border-mediumaquamarine" />
      <div className="absolute top-[57px] left-[0px] bg-lightcyan box-border w-[206px] h-[45px] border-b-[2px] border-dashed border-mediumaquamarine" />
      <div className="absolute top-[102px] left-[0px] bg-lightcyan w-[206px] h-[45px]" />
      <div className="absolute top-[14px] left-[10px] flex flex-row p-2.5 items-center justify-center gap-[10px]">
        <div className="relative capitalize font-medium">bio</div>
        <Image
          className="relative w-[15px] h-[15px] shrink-0 overflow-hidden hidden"
          alt=""
          src={up}
        />
      </div>
      <div className="absolute top-[58px] left-[10px] flex flex-row p-2.5 items-center justify-center gap-[10px]">
        <div className="relative capitalize font-medium">education</div>
        <Image
          className="relative w-[15px] h-[15px] shrink-0 overflow-hidden hidden"
          alt=""
          src={up}
        />
      </div>
      <div className="absolute top-[103px] left-[10px] flex flex-row p-2.5 items-center justify-center gap-[10px]">
        <div className="relative capitalize font-medium">work experience</div>
        <Image
          className="relative w-[15px] h-[15px] shrink-0 overflow-hidden hidden"
          alt=""
          src={up}
        />
      </div>
    </div>
  );
};

export default About;

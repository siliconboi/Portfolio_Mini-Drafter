
const Contacts = () => {
  return (
    <div className="relative bg-gray-100 w-full h-[56.38rem] overflow-hidden text-left text-[4.5rem] text-white font-poppins">
      <div className="absolute left-[0rem] w-[94.5rem] h-[56.38rem] overflow-hidden">
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
      
    </div>
  );
};

export default Contacts;

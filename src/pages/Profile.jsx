import React from "react";

export default function New() {
  return (
    <div className="relative w-[1332px] h-[670px] ml-24 mt-8 bg-[#f4f4f4] rounded-[10px] overflow-hidden">
      <div className="absolute w-[186px] h-[40px] top-[11px] left-[24px]">
        <div className="absolute w-[42px] h-[40px] top-0 left-0">
          <div className="relative w-[40px] h-[40px] bg-[#8b6d50] rounded-[20px] border-[2.5px] border-solid border-white">
            <div className="absolute top-[4px] left-[10px] [font-family:'Inter-Medium',Helvetica] font-medium text-white text-[22px] tracking-[0] leading-[normal]">
              S
            </div>
          </div>
        </div>
        <div className="absolute top-[7px] left-[55px] [font-family:'Inter-Medium',Helvetica] font-medium text-[#a0a0a0] text-[25px] tracking-[0] leading-[normal] whitespace-nowrap">
          Hello, Sree
        </div>
      </div>
      <div className="absolute top-[75px] left-[24px] [font-family:'Inter-Medium',Helvetica] font-medium text-[#40773b] text-[17px] tracking-[0] leading-[normal]">
        Personal Information
      </div>
      <div className="absolute w-[470px] h-[30px] top-[115px] left-[24px]">
        {/* Sree  */}
        <div className="absolute  top-0 left-0 bg-white">
          <div>
            <input
              type="text"
              className="absolute outline-none w-[200px] px-2 h-[30px] top-[0px] left-[10px] [font-family:'Inter-Medium',Helvetica] font-medium text-[#c0c0c0] text-[12px] tracking-[0] leading-[normal]"
              placeholder="Sree"
            />
          </div>
        </div>

        {/* Aranganathan  */}
        <div className="w-[245px] h-[30px] top-0 left-[225px] absolute">
          <div>
            <input
              className=" outline-none absolute top-[0px] px-2 w-[245px] h-[28px] left-[10px] [font-family:'Inter-Medium',Helvetica] font-medium text-[#c0c0c0] text-[12px] tracking-[0] leading-[normal]"
              type="text"
              placeholder="Aranganathan"
            />
          </div>
        </div>
      </div>
      <div className="absolute w-[116px] h-[41px] top-[167px] left-[24px]">
        <div className="absolute top-0 left-0 [font-family:'Inter-Medium',Helvetica] font-medium text-[#40773b] text-[12px] tracking-[0] leading-[normal]">
          Gender
        </div>

        <div className="absolute w-[114px] h-[15px] top-[26px] left-0">
          {/* Male  */}

          <div className="absolute w-[46px] h-[15px] top-0 left-0">
            <div className="absolute w-[15px] h-[15px] top-0 left-0 " />
            <div className="space-x-0.5 absolute top-px left-[10px] [font-family:'Inter-Medium',Helvetica] font-medium text-[#3f3f3f] text-[10px] tracking-[0] leading-[normal] whitespace-nowrap">
              <input type="radio" className="cursor-pointer" />{" "}
              <span className="[font-family:'Inter-Medium',Helvetica] font-medium text-[#3f3f3f] text-[12px] ">
                Male
              </span>
            </div>
          </div>

          {/* Female  */}

          <div className="absolute w-[57px] h-[15px] top-0 left-[59px]">
            <div className="absolute w-[15px] h-[15px] top-0 left-0" />
            <div className="absolute top-px left-[20px] [font-family:'Inter-Medium',Helvetica] font-medium text-[#3f3f3f] text-[10px] tracking-[0] leading-[normal] whitespace-nowrap">
              <input type="radio" className="cursor-pointer" />{" "}
              <span className="[font-family:'Inter-Medium',Helvetica] font-medium text-[#3f3f3f] text-[12px] ">
                Female
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute w-[204px] h-[56px] top-[224px] left-[24px]">



                                    {/* Email  */}
        <div className="absolute w-[200px] h-[30px] top-[26px] -left-5">
          <div className="absolute top-[8px] left-[10px] [font-family:'Inter-Medium',Helvetica] font-medium text-[#c0c0c0] text-[9px] tracking-[0] leading-[normal]">
          <input
              className=" outline-none absolute top-[0px] px-2 w-[200px] h-[28px] left-[10px] [font-family:'Inter-Medium',Helvetica] font-medium text-[#c0c0c0] text-[12px] tracking-[0] leading-[normal]"
              type="text"
              placeholder="ds04aranganthan@gmail.com"
            />
          </div>
        </div>



        <div className="absolute top-0 left-0 [font-family:'Inter-Medium',Helvetica] font-medium text-[#40773b] text-[12px] tracking-[0] leading-[normal]">
          Email Address
        </div>
        <div className="absolute top-0 left-[110px] cursor-pointer [font-family:'Inter-Medium',Helvetica] font-medium text-[#8b6d50] text-[12px] tracking-[0] leading-[normal]">
          Edit
        </div>
      </div>
      <div className="absolute w-[204px] h-[56px] top-[298px] left-[24px]">


                                {/* Num  */}
        <div className="absolute w-[200px] h-[30px] top-[26px] -left-5">
          <div className="absolute top-[8px] left-[10px] [font-family:'Inter-Medium',Helvetica] font-medium text-[#c0c0c0] text-[9px] tracking-[0] leading-[normal]">
          <input
              className=" outline-none absolute top-[0px] px-2 w-[200px] h-[28px] left-[10px] [font-family:'Inter-Medium',Helvetica] font-medium text-[#c0c0c0] text-[12px] tracking-[0] leading-[normal]"
              type="number"
              placeholder="63692 XXXX6"
            />
            
          </div>
        </div>




        <div className="absolute top-0 left-0 [font-family:'Inter-Medium',Helvetica] font-medium text-[#40773b] text-[12px] tracking-[0] leading-[normal]">
          Mobile Number
        </div>
        <div className="absolute top-0 left-[110px] cursor-pointer [font-family:'Inter-Medium',Helvetica] font-medium text-[#8b6d50] text-[12px] tracking-[0] leading-[normal]">
          Edit
        </div>
      </div>
      <div className="absolute w-[339px] h-[216px] top-[396px] left-[24px]">
        <div className="absolute top-0 left-0 [font-family:'Inter-Medium',Helvetica] font-medium text-[#40773b] text-[12px] tracking-[0] leading-[normal]">
          Manage Address
        </div>
        <div className="absolute top-0 cursor-pointer left-[117px] [font-family:'Inter-Medium',Helvetica] font-medium text-[#8b6d50] text-[12px] tracking-[0] leading-[normal]">
          Add
        </div>
        <div className="absolute w-[335px] h-[167px] top-[49px] left-0">
          <div className="w-[335px] h-[71px] top-0 left-0 absolute bg-white">
            <div className="absolute top-[9px] left-[10px] [font-family:'Inter-Regular',Helvetica] font-normal text-[#616161] text-[13px] tracking-[0] leading-[normal]">
              Aravindhan U D
            </div>
            <p className="absolute top-[29px] left-[10px] [font-family:'Inter-Medium',Helvetica] font-medium text-[#616161] text-[9px] tracking-[0] leading-[normal]">
              Plot No. 11, Senthamil 3rd Street, Villapuram
            </p>
            <p className="absolute top-[44px] left-[10px] [font-family:'Inter-Medium',Helvetica] font-medium text-[#616161] text-[9px] tracking-[0] leading-[normal]">
              Madurai, Tamil Nadu - 625012
            </p>
            <img
              className="absolute w-[20px] h-[20px] top-[26px] left-[291px]"
              alt="Edit"
              src="edit-3-1.svg"
            />
          </div>
          <div className="w-[335px] h-[71px] top-[96px] left-0 absolute bg-white">
            <div className="absolute top-[9px] left-[10px] [font-family:'Inter-Regular',Helvetica] font-normal text-[#616161] text-[13px] tracking-[0] leading-[normal]">
              Aravindhan U D
            </div>
            <p className="absolute top-[29px] left-[10px] [font-family:'Inter-Medium',Helvetica] font-medium text-[#616161] text-[9px] tracking-[0] leading-[normal]">
              Plot No. 11, Senthamil 3rd Street, Villapuram
            </p>
            <p className="absolute top-[44px] left-[10px] [font-family:'Inter-Medium',Helvetica] font-medium text-[#616161] text-[9px] tracking-[0] leading-[normal]">
              Madurai, Tamil Nadu - 625012
            </p>
            <img
              className="absolute w-[20px] h-[20px] top-[26px] left-[291px]"
              alt="Edit"
              src="image.svg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

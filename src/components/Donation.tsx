import { Copy, Heart, X } from "lucide-react";
import { donate } from "./donateData";
import { useState } from "react";
export interface Donate {
  title: string;
  body: string;
  accountNo: number;
  bankName: string;
  name: string;
  routing: number;
}

interface Prop {
  handlePop: (text?: string) => void;
  handleCopy: (text: string) => void;
  showPay: Donate | undefined;
  pop: string;
}
const Donation = ({ handlePop, handleCopy, showPay, pop }: Prop) => {
    const [copy,setCopy] = useState<string>("")
  const method: { title: string; text: string }[] = [
    { title: "Online Giving", text: "Secure, convenient, and available 24/7" },
    { title: "bank transfer", text: "Direct transfer to our church account" },
    { title: "In-Person", text: "Cash or check during Sunday service" },
  ];

  return (
    <div className="min-h-dvh relative px-3 py-24 bg-gradient-to-b from-[#feffff] to-[#fafbfd] w-full h-full flex flex-col gap-16 items-center justify-center ">
      <div className="flex flex-col gap-4 items-center justify-center ">
        <Heart color="#f59e0b" size={44} />
        <div className="w-full flex flex-col gap-6 items-center justify-center ">
          <h2 className="capitalize text-center text-4xl sm:text-5xl text-black font-bold ">
            give with purpose
          </h2>
          <p className="text-lg sm:text-2xl p-1 sm:p-8 lg:px-38  text-center text-[#b5c7e5]  ">
            Your generous giving helps us serve our community, support those in
            need, and spread God's love throughout the world
          </p>
        </div>
        {/* verse */}
        <div className="bg-[#eff6ff] w-full md:w-[500px] lg:w-[800px] border-l-[2px] border-[#60a5fa] rounded-md text-[#1d4eda] p-8 flex flex-col items-center justify-center gap-1 text-center ">
          <p className="italic text-center ">
            "Each of you should give what you have decided in your heart to
            give, not reluctantly or under compulsion, for God loves a cheerful
            giver."
          </p>
          <p className="italic text-center ">- 2 Corinthians 9:7</p>
        </div>
      </div>
      {/* Give / Donation */}
      <div className="w-full grid p-1 sm:grid-cols-[repeat(auto-fit,minmax(200px,250px))] gap-5 items-center justify-center ">
        {donate?.map((item, index: number) => (
          <div
            className="bg-white  transition-all transform duration-500 group hover:-translate-y-[6px] hover:shadow-2xl h-[350px] w-full rounded-lg p-6 shadow-lg flex flex-col gap-6 items-center justify-center  "
            key={index}
          >
            <div className="bg-[#f7a712] group-hover:scale-105 transorm transition-all duration-300 flex items-center justify-center w-[60px] h-[60px] rounded-full  ">
              <Heart
                size={24}
                className="group-hover:scale-105 transorm transition-all duration-300"
                color="white"
              />
            </div>
            <div className="w-full flex flex-col gap-4 items-center justify-center ">
              <p className="text-center text-lg font-bold capitalize ">
                {item.title}
              </p>
              <p className="text-center text-[#645569] text-md ">{item.body}</p>
            </div>
            {/* button */}
            <div
              onClick={() => handlePop(item?.title)}
              className="capitalize w-full py-2 transform transition-all px-5 rounded-md flex items-center justify-center text-white text-center cursor-pointer bg-[#2563eb] hover:bg-[#1e4db7] "
            >
              give now
            </div>
          </div>
        ))}
      </div>
      {/* payment */}
      <div className=" bg-gradient-to-tr from-[#f39b0b] to-[#de7e07] h-full md:h-[350px] rounded-lg w-full md:w-[700px] lg:w-[900px] p-[30px] flex flex-col gap-8 items-center justify-start ">
        <h2 className="text-lg sm:text-2xl font-bold text-center text-white w-full flex items-center justify-center ">
          Other Ways to Give
        </h2>
        <div className="w-full grid md:grid-cols-3 gap-4 items-start justify-center ">
          {method?.map((item, index: number) => (
            <div
              className="w-full p-6 bg-[#f1a93b] rounded-lg flex flex-col gap-4 items-center justify-center"
              key={index}
            >
              <p className="capitalize text-center text-lg text-white font-bold ">
                {item.title}
              </p>
              <p className="text-center text-white ">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
      {pop && showPay && (
        <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center">
          <div className="w-full sm:w-[450px] z-50 text-[#645569] h-[450px] rounded-sm sm:rounded-2xl bg-white py-6 flex flex-col gap-4 items-center justify-center px-6 ">
            <div className="w-full flex items-center justify-end ">
              <X
                onClick={() => handlePop()}
                size={14}
                className="cursor-pointer "
              />
            </div>
            <div className="w-full px-4 py-3 bg-[#f9fafb] rounded-md flex items-center justify-between gap-3 ">
              <div className="flex flex-col items-start justify-center gap-[2px] ">
                <p className="capitalize text-sm">Bank name</p>
                <p className="font-semibold text-md text-black ">
                  {showPay.bankName}
                </p>
              </div>
              {copy===showPay.bankName&&"copied"}
              <Copy
                size={16}
                onClick={() => {
                    setCopy(showPay.bankName)
                    handleCopy(String(showPay.bankName))
                    setTimeout(()=>{
                        setCopy("")
                    },1000)
                }}
                className="cursor-pointer"
              />
            </div>
            <div className="w-full px-4 py-3 bg-[#f9fafb] rounded-md flex items-center justify-between gap-3 ">
              <div className="flex flex-col items-start justify-center gap-[2px] ">
                <p className="capitalize text-sm">account name</p>
                <p className="font-semibold text-md text-black ">
                  {showPay.name}
                </p>
              </div>
              {copy===showPay.name&&"copied"}
              <Copy
                size={16}
                 onClick={() => {
                    setCopy(showPay.name)
                    handleCopy(String(showPay.name))
                    setTimeout(()=>{
                        setCopy("")
                    },1000)
                }}
                className="cursor-pointer"
              />
            </div>
            <div className="w-full px-4 py-3 bg-[#f9fafb] rounded-md flex items-center justify-between gap-3 ">
              <div className="flex flex-col items-start justify-center gap-[2px] ">
                <p className="capitalize text-sm">account number</p>
                <p className="font-semibold text-md text-black ">
                  {showPay.accountNo}
                </p>
              </div>
              {copy===String(showPay.accountNo)&&"copied"}
              <Copy
                 onClick={() => {
                    setCopy(String(showPay.accountNo))
                    handleCopy(String(showPay.accountNo))
                    setTimeout(()=>{
                        setCopy("")
                    },1000)
                }}
                size={16}
                className="cursor-pointer"
              />
            </div>
            <div className="w-full px-4 py-3 bg-[#f9fafb] rounded-md flex items-center justify-between gap-3 ">
              <div className="flex flex-col items-start justify-center gap-[2px] ">
                <p className="capitalize text-sm">routing number</p>
                <p className="font-semibold text-md text-black ">
                  {showPay.routing}
                </p>
              </div>
              {copy===String(showPay.routing)&&"copied"}
              <Copy
                size={16}
                 onClick={() => {
                    setCopy(String(showPay.routing))
                    handleCopy(String(showPay.routing))
                    setTimeout(()=>{
                        setCopy("")
                    },1000)
                }}
                className="cursor-pointer"
              />
            </div>
            <p className="text-center">
              Click the copy button next to each detail to copy it to your
              clipboard
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Donation;

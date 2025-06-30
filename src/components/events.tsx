import { CalendarDays } from "lucide-react";
import { Link } from "react-router-dom";
import { event } from "./eventData";


const Event = () => {
    return ( 
        <div className=" w-full py-24 flex flex-col items-center justify-center ">
            <div className="flex flex-col items-center justify-center">
                <CalendarDays size={40} color="#2563eb" className="my-1" />
                <div className="w-full flex flex-col gap-6 items-center justify-center ">
                    <h2 className="capitalize text-center text-4xl sm:text-5xl text-[#1e293b] font-bold ">upcoming events</h2>
                    <p className="text-lg text-center text-[#645569]  ">Join us for worship, fellowship, and community service opportunities</p>
                </div>
            </div>
            <div className="grid gap-5 items-center justify-center md:grid-cols-2 lg:grid-cols-3 p-3 sm:p-12 ">
                {event?.map((item,index:number)=>(
                    <div className="w-full  transition-all transform duration-500 group hover:-translate-y-[6px] hover:shadow-2xl shadow-lg rounded-lg overflow-hidden flex flex-col gap-5 items-start justify-center "key={index}>
                        <div className="bg-[#2157e1] w-full flex items-center justify-between p-5 ">
                            <p className="capitalize text-white font-bold text-lg ">{item.title}</p>
                            {item.recur && <p className="text-sm p-1 px-2 rounded-full text-white bg-[#3b82f6] capitalize ">{item?.recur}</p>}
                        </div>
                        <div className="p-5 w-full flex flex-col gap-7 items-start justify-center ">
                            <div className="flex flex-col gap-4 items-start justify-center ">
                                <p className="font-semibold">{item.date}</p>
                                <p className="font-medium text-[#4f63eb] ">{item.time}</p>
                                <p className="text-[#586781] ">{item.description}</p>
                            </div>
                            {/* learn more button */}
                            <div className="w-full px-5 py-2 text-white rounded-md flex items-center justify-center bg-[#2563eb] hover:bg-[#2157e1] cursor-pointer ">
                                <p className="capitalize">learn more</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="w-full flex items-center justify-center ">
                <Link to="/calendar" className="border hidden border-[#3363eb] text-[#3363eb] hover:text-white px-5 py-2 rounded-md bg-white transform duration-300 transition-all hover:bg-[#3363eb] cursor-pointer  ">
                    <p className="capitalize  transform duration-300 transition-all  ">view full calendar</p>
                </Link>
                <div className="border border-[#3363eb] text-[#3363eb] hover:text-white px-5 py-2 rounded-md bg-white transform duration-300 transition-all hover:bg-[#3363eb] cursor-pointer  ">
                    <p className="capitalize  transform duration-300 transition-all  ">view full calendar</p>
                </div>
            </div>
        </div>
     );
}
 
export default Event;
import { Church, LocateIcon, Mail, Phone } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
    return ( 
        <footer className="text-[#b5c7e5] flex flex-col gap-3 items-center justify-center p-3 sm:p-8 md:p-16 bg-[#0f172a] ">
            {/* first */}
            <div className="w-full border-b border-b-[#334155] p-2 flex flex-col md:flex-row gap-6 items-start justify-between ">
                {/* church details */}
                <div className="w-full flex flex-col gap-6">
                    <div className="flex gap-2 items-center justify-start">
                        <Church size={38} color="#fbbf24" />
                        <p className="capitalize text-white text-2xl font-bold">Grace community</p>
                    </div>
                    <p className="">A welcoming church family dedicated to growing in faith, serving our community, and spreading God's love through worship, fellowship, and outreach.</p>
                    <div className="flex flex-col gap-3 items-start justify-center ">
                        <div className="flex gap-2 items-center justify-start ">
                            <LocateIcon />
                            <p className="">123 Faith Street, Graceville, GA 12345</p>
                        </div>
                        <div className="flex gap-2 items-center justify-start ">
                            <Phone fill="red" color="black" />
                            <p className="">(555) 123-PRAY</p>
                        </div>
                        <div className="flex gap-2 items-center justify-start ">
                            <Mail fill="white" color="black" />
                            <p className="">hello@gracecommunity.org</p>
                        </div>
                    </div>
                </div>
                <div className="w-full flex flex-col md:flex-row items-start justify-between ">
                    {/* quick links */}
                    <div className="w-full flex flex-col gap-6 ">
                        <p className="text-lg font-bold capitalize text-[#fbbf24] ">quick links</p>
                        <nav className="flex flex-col gap-3 items-start justify-center " >
                            <Link to={"/#"} className="capitalize" >about us</Link>
                            <Link to={"/#"} className="capitalize" >sermons</Link>
                            <Link to={"/#"} className="capitalize" >events</Link>
                            <Link to={"/#"} className="capitalize" >ministries</Link>
                            <Link to={"/#"} className="capitalize" >contact</Link>
                        </nav>
                    </div>
                    {/* service time */}
                    <div className="w-full flex flex-col gap-6 ">
                        <p className="text-lg font-bold capitalize text-[#fbbf24] ">service time</p>
                        <div className="flex flex-col gap-2 items-start justify-center ">
                            <div className="flex flex-col gap-2 items-start justify-center ">
                                <p className="capitalize font-bold text-white text-md">sunday worship</p>
                                <p className="">10:00 AM - 11:30 AM</p>
                            </div>
                            <div className="flex flex-col gap-2 items-start justify-center ">
                                <p className="capitalize font-bold text-white text-md">Wednesday Bible Study</p>
                                <p className="">6:30 PM - 8:00 PM</p>
                            </div>
                            <div className="flex flex-col gap-2 items-start justify-center ">
                                <p className="capitalize font-bold text-white text-md">Friday Women's Fellowship</p>
                                <p className="">10:00 AM - 12:00 PM</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* second */}
            <div className="pt-3 pb-6 text-sm w-full flex flex-col gap-3 md:flex-row items-center justify-between ">
                <p className="text-center">© {new Date().getFullYear()} Grace Community Church. All rights reserved.</p>
                <p className="italic text-center ">"Let your light shine before others" - Matthew 5:16</p>
            </div>
        </footer>
     );
}
 
export default Footer;
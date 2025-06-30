import {Church} from "lucide-react"
const Hero = () => {
    return ( 
        <div className="w-full h-dvh bg-gradient-to-br from-[#132248] via-[#1e3988] to-[#1e3267] p-3 flex flex-col gap-4 sm:gap-8 items-center justify-center  ">
            <Church size={80} color="#fcd34d" />
            <div className="flex flex-col gap-2 sm:gap-4 text-center ">
                <div className="">
                    <h2 className="text-5xl sm:text-7xl lg:text-7xl text-white font-bold text-center  ">Welcome to</h2>
                    <h2 className="text-5xl sm:text-7xl lg:text-7xl text-[#f9c035] font-bold text-center  ">Grace Community</h2>
                </div>
                {/* verse */}
                <div className="text-[#b5c7e5] ">
                    <p className="text-2xl text-center ">"For where two or three gather in my name, there am I with them."</p>
                    <p className="italic text-md text-center ">- Matthew 18:20</p>
                </div>
            </div>
            {/* verse */}
            <div className="text-[#b5c7e5]">
                <p className="text-lg text-center ">Join our loving community as we grow in faith, serve others, and spread God's love</p>
                <p className="text-lg text-center ">throughout our neighborhood and beyond.</p>
            </div>
            {/* CTA */}
            <div className="w-full flex flex-col sm:flex-row gap-4 items-center justify-center">
                <div className="capitalize w-full sm:w-fit text-lg px-5 py-2 bg-[#f59e0b] text-white text-center font-semibold hover:scale-102 transition-all duration-200 transform cursor-pointer rounded-md  ">join us sunday</div>
                <div className="capitalize w-full sm:w-fit text-lg px-5 py-2 bg-white text-[#f59e0b] text-center font-semibold hover:scale-102 hover:text-black transition-all duration-200 transform cursor-pointer rounded-md  ">learn more</div>
            </div>
        </div>
     );
}
 
export default Hero;
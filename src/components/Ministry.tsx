const Ministry = () => {
    const minister: {name: string,title:string,body: string,image: string}[] = [
        {name: "Pastor Michael Johnson",title: "Lead Pastor",body: "Leading our community with wisdom and compassion for over 15 years.",image: "/lead-pastor.png"},
        {name: "Sarah Williams",title: "Youth Pastor",body: "Passionate about guiding young hearts toward Christ and building strong foundations.",image: "/youth-pastor.png"},
        {name: "David Chen",title: "Music Director",body: "Creating beautiful worship experiences that lift our spirits and glorify God.",image: "/music-director.png"},
    ]
    return ( 
        <div className="w-full py-24 bg-gradient-to-b from-[#f8fafc] to-white flex flex-col gap-10 items-center justify-center">
                <div className="w-full flex flex-col gap-6 items-center justify-center ">
                    <h2 className="capitalize text-center text-4xl sm:text-5xl text-[#1e293b] font-bold ">upcoming events</h2>
                    <p className="text-lg text-center text-[#645569]  ">Join us for worship, fellowship, and community service opportunities</p>
                </div>
                {/* minsters */}
                <div className="w-full grid gap-6 grid-cols-[repeat(auto-fit,minmax(200px,300px))] items-center justify-center  ">
                    {minister?.map((item,index:number)=>(
                        <div className="overflow-hidden  transition-all transform duration-500 group hover:-translate-y-[6px] hover:shadow-2xl rounded-md h-[500px] flex flex-col gap-4 bg-white shadow-lg  "key={index} >
                            <div className="w-full h-[60%] overflow-hidden">
                                <img src={item.image} alt="" className="w-full  h-full group-hover:scale-110 transform transition-all duration-500 object-cover object-top " />
                            </div>
                            <div className="flex flex-col gap-4 items-center justify-center p-2 ">
                                <p className="text-lg text-black text-center font-semibold ">{item.name}</p>
                                <p className="text-[#2563ec] text-center ">{item.title}</p>
                                <p className="text-center text-[#645569] ">{item.body}</p>
                            </div>
                        </div>
                    ))}
                </div>
                {/* mission */}
                <div className=" p-6 w-full sm:w-[500px] xl:w-[850px] h-full sm:h-[300px] rounded-2xl text-white flex flex-col gap-4 items-center justify-center bg-gradient-to-br from-[#255fe4] via-[#6192e7] to-[#204ac0] ">
                    <p className="capitalize text-center text-2xl font-bold ">our mission</p>
                    <p className="text-center">"To know Christ and make Him known through worship, discipleship, fellowship, and service to our community and the world."</p>
                    <div className="text-[#b5c7e5] flex flex-col gap-2 items-center justify-center">
                        <p className="text-center italic text-md p-5 ">"Therefore go and make disciples of all nations, baptizing them in the name of the Father and of the Son and of the Holy Spirit."</p>
                        <p className="italic text-sm text-center ">- Matthew 28:19</p>
                    </div>
                </div>
        </div>
     );
}
 
export default Ministry;
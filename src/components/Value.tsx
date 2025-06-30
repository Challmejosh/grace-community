const Value = () => {
    const value: {title:string,body:string,verse:string}[] = [
        {title: "Faith",body: "Grounded in God's word and guided by His love, we grow in our relationship with Christ.",verse:"Now faith is confidence in what we hope for and assurance about what we do not see. - Hebrews 11:1"},
        {title: "Community",body:"We believe in the power of fellowship and supporting one another through life's journey.",verse:"As iron sharpens iron, so one person sharpens another. - Proverbs 27:17"},
        {title: "Service",body:"Called to serve others with compassion, following Christ's example of love and sacrifice.",verse:"Each of you should use whatever gift you have to serve others. - 1 Peter 4:10"},
    ]
    return ( 
        <div className="bg-gradient-to-b from-[#f9fbfc] to-white w-full h-full py-24 flex flex-col gap-16 items-center justify-center ">
            {/* header */}
            <div className="w-full flex flex-col gap-6 items-center justify-center ">
                <h2 className="capitalize text-center text-[#1e293b] text-4xl sm:text-5xl font-bold ">our core values</h2>
                <p className="text-lg text-center text-[#645569]  ">These foundational principles guide everything we do as a community of believers</p>
            </div>
            {/* value */}
            <div className="w-full grid gap-8 items-center justify-center p-2 sm:grid-cols-[repeat(auto-fit,minmax(300px,350px))] ">
                {value?.map((item,index:number)=>(
                    <div className="bg-white transition-all transform duration-500 group hover:-translate-y-[6px] hover:shadow-2xl p-8 w-full h-[400px] rounded-md shadow-lg flex flex-col gap-4 items-start justify-between "key={index}>
                        <div className="w-full flex flex-col gap-5 items-start justify-center ">
                            <p className="group-hover:scale-105 transform transition-all duration-300 w-[70px] h-[70px] rounded-full bg-gradient-to-r from-[#3478f2] via-[#3175f1] to-[#2e70f0] text-white text-3xl flex items-center justify-center font-bold  ">{item.title[0]}</p>
                            <div className="w-full flex flex-col gap-5 items-start justify-start">
                                <h2 className="text-3xl font-bold ">{item.title}</h2>
                                <p className="w-full line-clamp-3 ">{item.body}</p>
                            </div>
                        </div>
                        <div className="border-l-[4px] p-2 border-l-[#bfdbfe] rounded-tr-[2px] rounded-br-[2px] bg-[#eff6ff] ">
                            <p className="text-[#3fa4f1] italic text-sm ">
                                {item.verse}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
     );
}
 
export default Value;
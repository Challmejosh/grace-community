import { useState } from "react";

const StayConnected = () => {
    const [email,setEmail] = useState<string>("")
    const [name,setName] = useState<string>("")
    const [validate,setValidate] = useState<boolean>(false)
    const onSubmit=(e: React.FormEvent<HTMLFormElement>,email:string)=>{
        e.preventDefault()
        if(!email.trim()){
            setValidate(true)
            return
        }else if (!email.includes("@")){
            setValidate(true)
            return
        }
        setEmail("")
    }
  return (
    <div className="p-3 xl:p-24 flex flex-col gap-8 items-center justify-center bg-gradient-to-tl min-h-dvh h-full py-24 from-[#1e377a] via-[#1e2e53] to-[#1e3572] ">
      {/* header */}
      <div className="w-full flex flex-col gap-6 items-center justify-center ">
        <h2 className="capitalize text-center text-4xl sm:text-5xl text-white font-bold ">
          stay connected
        </h2>
        <p className="text-2xl text-center text-[#b5c7e5]  ">
          Join our weekly newsletter to receive inspiring messages, event
          updates, prayer requests, and ways to get involved in our community
        </p>
      </div>
      {/* form */}
      <div className="w-full lg:w-[900px] bg-gradient-to-br from-[#35456d] via-[#353f50] to-[#354672] border-[1px] border-[#5e6880] p-10 rounded-lg flex flex-col gap-8 md:flex-row items-start justify-between">
        <div className="w-full flex flex-col gap-4 items-start justify-center ">
          <p className="text-2xl font-bold ">Weekly Grace Notes</p>
          <ul className="list-disc marker:text-[#fbbf24] text-white flex flex-col gap-4 ">
            <li>Weekly sermon highlights & reflections</li>
            <li>Upcoming events & volunteer opportunities</li>
            <li>Prayer requests from our community</li>
            <li>Inspirational Bible verses & devotionals</li>
          </ul>
        </div>
        <form onSubmit={(e: React.FormEvent<HTMLFormElement>)=>onSubmit(e,email)} className="w-full flex flex-col gap-4 items-center justify-center" >
            <input title="enter email" type="text" placeholder="Enter your email address" value={email} onChange={(e: React.ChangeEvent<HTMLInputElement>)=>setEmail(e.target.value)} 
            className="rounded-md w-full px-5 py-3 text-white border-white border bg-[#5e677a] placeholder:text-[#b4cded] " />
            {validate && <div className="flex gap-[1px] ">
                {!email.includes("@") && validate && <span className="text-red-600 text-sm ">Must includes "@" </span> }
                {!email.trim() && validate && <span className="text-red-600 text-sm ">Must not be empty </span> }
            </div>}
            <input title="enter name" placeholder="Your first name (optional)" type="text" value={name} onChange={(e: React.ChangeEvent<HTMLInputElement>)=>setName(e.target.value)} 
            className="rounded-md w-full px-5 py-3 text-white border-white border bg-[#5e677a] placeholder:text-[#b4cded] " />
            <button type="submit" className="w-full py-3 cursor-pointer transform transition-all px-5 bg-[#f59e0b] hover:scale-103 hover:bg-[#f59f0bef] flex items-center justify-center text-white rounded-md ">Subscribe to Newsletter</button>
            <p className="text-sm text-[#b4cded] text-center ">We respect your privacy. Unsubscribe at any time.</p>
        </form>
      </div>
      {/* records */}
      <div className="flex flex-col gap-6 md:flex-row items-center justify-between w-full md:px-38 ">
        <Count text="Newsletter Subscribers" count="500+" />
        <Count text="Inspirational Content" count="weekly" />
        <Count text="Prayer Support" count="24/7" />
      </div>
    </div>
  );
};

export default StayConnected;

const Count = ({count,text}:{count:string,text:string})=>{

    return(
        <div className="flex flex-col gap-2 items-center justify-center">
            <p className="text-2xl text-[#fabe24] text-center font-bold capitalize ">{count}</p>
            <p className="text-lg text-[#b4cded] text-center capitalize ">{text}</p>
        </div>
    )
}

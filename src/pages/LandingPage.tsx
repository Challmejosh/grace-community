import { useEffect, useState } from "react";
import Donation, { type Donate } from "../components/Donation";
import Event from "../components/events";
import Hero from "../components/Hero";
import Ministry from "../components/Ministry";
import StayConnected from "../components/StayConnected";
import Value from "../components/Value";
import { donate } from "../components/donateData";

const LandingPage = () => {
  const [pop, setPop] = useState<string>("");
  const [showPay, setShowPay] = useState<Donate | undefined>();
  const handlePop = (text?: string) => {
    if (text) {
      setPop(text);
      const find = donate.find(
        (item) => item.title.toLowerCase() === text.toLowerCase()
      );
      setShowPay(find);
    } else {
      setPop("");
    }
  };
  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
  };
  useEffect(() => {
    if (pop && showPay) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [pop, showPay]);
  return (
    <div className="w-full relative h-full font-sans flex flex-col items-center justify-center ">
 
      <Hero />
      <Value />
      <Event />
      <Ministry />
      <StayConnected />
      <Donation showPay={showPay} pop={pop} handleCopy={handleCopy} handlePop={handlePop} />
    </div>
  );
};

export default LandingPage;

import {Route, Routes} from "react-router-dom"
import LandingPage from "../pages/LandingPage";
import CalendarPage from "../pages/Calendar";
import Footer from "./Footer";
const Routers = () => {
    return ( 
        <>
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/calendar" element={<CalendarPage />} />
            </Routes>
            <Footer />
        </>
     );
}
 
export default Routers;
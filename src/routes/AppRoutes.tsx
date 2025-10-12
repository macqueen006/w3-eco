import {Route, Routes} from "react-router";
import DefaultLayout from "../layouts/DefaultLayout.tsx";
import Home from "../pages/Home.tsx";
import About from "../pages/About.tsx";
import Compliance from "../pages/Compliance.tsx";
import Trading from "../pages/Trading.tsx";
import Contact from "../pages/Contact.tsx";
import Services from "../pages/Services.tsx";

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<DefaultLayout/>}>
                <Route index element={<Home/>}/>
                <Route path="about" element={<About/>}/>
                <Route path="compliance" element={<Compliance/>}/>
                <Route path="trading" element={<Trading/>}/>
                <Route path="contact-us" element={<Contact/>}/>
                <Route path="services" element={<Services/>}/>
            </Route>
        </Routes>
    );
};

export default AppRoutes;
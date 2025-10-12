import Navbar from "./navbar/Navbar.tsx";
import {Outlet} from "react-router";
import Footer from "./Footer.tsx";

function DefaultLayout() {
    return (
        <div className="min-h-screen flex flex-col">
            <Navbar/>
            <main className="flex-1">
                <Outlet/>
            </main>
            <Footer/>
        </div>
    );
}

export default DefaultLayout;
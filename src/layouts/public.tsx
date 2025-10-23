import { Outlet } from "react-router-dom";
import Footer from "src/components/Footer";
import Navbar from "src/components/Navbar";

const PublicLayout = () => {
    return (
        <>
            <Navbar />
            <h1>PublicLayout</h1>
            <div>
                <Outlet />
            </div>
            <Footer />
        </>
    );
};

export default PublicLayout;

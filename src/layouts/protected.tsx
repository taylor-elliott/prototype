import { Outlet } from "react-router-dom";
import Navbar from "src/components/Navbar";

const ProtectedLayout = () => {
    return (
        <>
            <Navbar />
            <div className="">
                <Outlet />
            </div>
        </>
    );
};

export default ProtectedLayout;

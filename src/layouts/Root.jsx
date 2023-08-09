import { Outlet } from "react-router-dom";

const Root = () => {
    return (
        <div className="bg-gray-800 w-full">
            <h3 className="text-center text-3xl text-red-900">Mooving to test forward</h3>
            <Outlet/>
        </div>
    );
};

export default Root;
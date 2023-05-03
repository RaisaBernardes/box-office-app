import { Outlet } from "react-router-dom";
import Navs from "./Navs";
import AppTitle from "./AppTitle";

const MainLayout = () => {
    return(
        <div>
            <AppTitle />
            <Navs />
            <Outlet /> {/*An <Outlet> should be used in parent route elements to render their child route elements*/}
        </div>
    )
}

export default MainLayout;
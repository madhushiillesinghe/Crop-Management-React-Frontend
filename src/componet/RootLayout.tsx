import {Outlet} from "react-router";
import Sidebar from "./SideBar.tsx";

export function RootLayout() {
    return(
        <>
            <Sidebar></Sidebar>
            <Outlet></Outlet>
        </>
    );
}
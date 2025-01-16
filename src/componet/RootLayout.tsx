import {Outlet} from "react-router";
import Sidebar from "./SideBar.tsx";
import TopBar from "./TopBar.tsx";

export function RootLayout() {
    return(
        <>
            <Sidebar></Sidebar>
            <TopBar></TopBar>
            <Outlet></Outlet>
        </>
    );
}
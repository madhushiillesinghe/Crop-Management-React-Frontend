import {Navigation} from "./Navigation";
import {Outlet} from "react-router";

export function RootLayout() {
    return(
        <>
            <Navigation></Navigation>
            <Outlet></Outlet>
        </>
    );
}
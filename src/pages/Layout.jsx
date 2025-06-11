import { Outlet } from "react-router-dom";
import HeaderComponent from "../components/HeaderComponent";

export default function Layout() {
    return (
        <>
        <HeaderComponent />
        <Outlet />
        </>
    )
}
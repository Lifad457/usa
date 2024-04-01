import { Outlet } from "react-router-dom";
import { DescWrapper } from "../styles/desc-layout.css";

export default function DescLayout() {
    return (
        <DescWrapper>
            <Outlet />
        </DescWrapper>
    )
}
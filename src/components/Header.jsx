import { Link } from "react-router-dom";
import { HeaderContainer } from "../styles/header.css";

export default function Header() {
    return (
        <HeaderContainer>
           <Link to='/'><span>Road</span> Trip <span>USA</span></Link>
        </HeaderContainer>
    )
}
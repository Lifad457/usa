import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import { GlobalStyle } from "../styles/global.css";

export default function App() {
  return (
    <>
      <GlobalStyle />
        <Outlet /> 
      <Footer />
    </>
  )
}
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import { GlobalStyle } from "../styles/global.css";
import Header from "../components/Header";

export default function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Outlet /> 
      <Footer />
    </>
  )
}
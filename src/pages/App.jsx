import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import { GlobalStyle } from "../styles/global.css";
import Header from "../components/Header";
import ScrollToTop from "../components/ScrollToTop";

export default function App() {
  return (
    <>
      <GlobalStyle />
      <ScrollToTop />
      <Header />
      <Outlet /> 
      <Footer />
    </>
  )
}
import DescLayout from "../components/DescLayout";
import Footer from "../components/Footer";
import Header from "../components/Header";
import PostCard from "../components/PostCard";
import { AppContainer, CardWrapper } from "../styles/app.css";
import { GlobalStyle } from "../styles/global.css";

export default function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <AppContainer>
        <CardWrapper>
            <PostCard to="/" end />
            <PostCard to="/monument-valley" />
            <PostCard to="/" end />
            <PostCard to="/" end />
        </CardWrapper>
        <DescLayout />
      </AppContainer>
      <Footer />
    </>
  )
}
import Footer from "../components/Footer";
import Header from "../components/Header";
import PostCard from "../components/PostCard";
import { AppContainer } from "../styles/app.css";
import { GlobalStyle } from "../styles/global.css";

export default function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <AppContainer>
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
      </AppContainer>
      <Footer />
    </>
  )
}
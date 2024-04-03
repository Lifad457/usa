import { CardWrapper } from "../styles/post-card.css";
import PostCard from "../components/PostCard";
import Header from "../components/Header";
import { AppContainer } from "../styles/app.css";

export default function Index() {   
    return (
        <>
            <Header />
            <AppContainer>
                <h1>Choisissez une carte postale</h1>
                <CardWrapper>
                    <PostCard to="/monument-valley" />
                    <PostCard to="/monument-valley" />
                    <PostCard to="/monument-valley" />
                    <PostCard to="/monument-valley" />
                    <PostCard to="/monument-valley" />
                    <PostCard to="/monument-valley" />
                    <PostCard to="/monument-valley" />
                    <PostCard to="/monument-valley" />
                    <PostCard to="/monument-valley" />
                </CardWrapper>
            </AppContainer>
        </>
    )
}
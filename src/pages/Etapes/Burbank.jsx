import { MainContainer, TextWrapper } from "../../styles/app.css";
import hero from '../../assets/images/burbank/hero.jpg';
import { EtapesContainer } from "../../styles/etapes.css";

export default function Burbank() {
    return (
        <>
            <MainContainer src={hero}>
                <TextWrapper>
                    <span>21 mai 2022 - 22 mai 2022</span>
                    <hr />
                    <h3>C&apos;est ici que tout commence</h3>
                </TextWrapper>
            </MainContainer>    
            <EtapesContainer>
                <h1>Burbank</h1>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias pariatur consequuntur adipisci repellat quisquam aliquam reiciendis. Debitis quisquam excepturi, maxime voluptate corrupti incidunt et maiores architecto officiis tempora dolor odio. Odio temporibus provident culpa earum ab doloremque doloribus nostrum impedit quia aliquid quae, suscipit, accusantium cum modi et voluptas assumenda.</p>
                <h1>Studios Warner</h1>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias pariatur consequuntur adipisci repellat quisquam aliquam reiciendis. Debitis quisquam excepturi, maxime voluptate corrupti incidunt et maiores architecto officiis tempora dolor odio. Odio temporibus provident culpa earum ab doloremque doloribus nostrum impedit quia aliquid quae, suscipit, accusantium cum modi et voluptas assumenda.</p>
            </EtapesContainer>
        </>
    )
}
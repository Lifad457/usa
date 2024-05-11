import { MainContainer, TextWrapper } from "../../styles/app.css";
import { EtapesContainer } from "../../styles/etapes.css";
import hero from '../../assets/images/monument-valley/hero.jpg';

export default function MonumentValley() {
    return (
        <>
            <MainContainer src={hero}>
                <TextWrapper>
                    <span>vendredi 27 mai 2022</span>
                    <hr />
                    <h3>La vallée des rocs</h3>
                </TextWrapper>
            </MainContainer>    
            <EtapesContainer>
                <h1>Monument Valley</h1>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias pariatur consequuntur adipisci repellat quisquam aliquam reiciendis. Debitis quisquam excepturi, maxime voluptate corrupti incidunt et maiores architecto officiis tempora dolor odio. Odio temporibus provident culpa earum ab doloremque doloribus nostrum impedit quia aliquid quae, suscipit, accusantium cum modi et voluptas assumenda.</p>
            </EtapesContainer>
        </>
    )
}
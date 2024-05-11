import { MainContainer, TextWrapper } from "../../styles/app.css";
import { EtapesContainer } from "../../styles/etapes.css";
import hero from '../../assets/images/san-francisco/hero.jpg';

export default function SanFrancisco() {
    return (
        <>
            <MainContainer src={hero}>
                <TextWrapper>
                    <span>6 juin 2022 - 11 juin 2022</span>
                    <hr />
                    <h3>Berceau de l&apos;innovation et de la diversité</h3>
                </TextWrapper>
            </MainContainer>    
            <EtapesContainer>
                <h1>San Francisco</h1>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias pariatur consequuntur adipisci repellat quisquam aliquam reiciendis. Debitis quisquam excepturi, maxime voluptate corrupti incidunt et maiores architecto officiis tempora dolor odio. Odio temporibus provident culpa earum ab doloremque doloribus nostrum impedit quia aliquid quae, suscipit, accusantium cum modi et voluptas assumenda.</p>
            </EtapesContainer>
        </>
    )
}
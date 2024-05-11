import { MainContainer, TextWrapper } from "../../styles/app.css";
import { EtapesContainer } from "../../styles/etapes.css";
import hero from '../../assets/images/page/hero.jpg';

export default function Page() {
    return (
        <>
            <MainContainer src={hero}>
                <TextWrapper>
                    <span>25 mai 2022 - 26 mai 2022</span>
                    <hr />
                    <h3>Un lieu absolument magique</h3>
                </TextWrapper>
            </MainContainer>    
            <EtapesContainer>
                <h1>Page</h1>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias pariatur consequuntur adipisci repellat quisquam aliquam reiciendis. Debitis quisquam excepturi, maxime voluptate corrupti incidunt et maiores architecto officiis tempora dolor odio. Odio temporibus provident culpa earum ab doloremque doloribus nostrum impedit quia aliquid quae, suscipit, accusantium cum modi et voluptas assumenda.</p>
                <h1>Antelope Canyon</h1>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias pariatur consequuntur adipisci repellat quisquam aliquam reiciendis. Debitis quisquam excepturi, maxime voluptate corrupti incidunt et maiores architecto officiis tempora dolor odio. Odio temporibus provident culpa earum ab doloremque doloribus nostrum impedit quia aliquid quae, suscipit, accusantium cum modi et voluptas assumenda.</p>
                <h1>Horseshoe Bend</h1>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias pariatur consequuntur adipisci repellat quisquam aliquam reiciendis. Debitis quisquam excepturi, maxime voluptate corrupti incidunt et maiores architecto officiis tempora dolor odio. Odio temporibus provident culpa earum ab doloremque doloribus nostrum impedit quia aliquid quae, suscipit, accusantium cum modi et voluptas assumenda.</p>
            </EtapesContainer>
        </>
    )
}
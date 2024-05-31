import { MainContainer, TextWrapper } from "../../styles/app.css";
import { EtapesContainer } from "../../styles/etapes.css";
import hero from '../../assets/images/palm-springs/hero.jpg';
import { PhotosContainer } from "../../styles/album-photos.css";
import { Photo } from "../../styles/photo.css";
import sunset from '../../assets/images/palm-springs/1.jpg';
import oiseau from '../../assets/images/palm-springs/2.jpg';

export default function PalmSprings() {
    return (
        <>
            <MainContainer src={hero}>
                <TextWrapper>
                    <span>23 mai 2022 - 24 mai 2022</span>
                    <hr />
                    <h3>Un oasis dans le désert</h3>
                </TextWrapper>
            </MainContainer>    
            <EtapesContainer>
                <h1>Palm Springs</h1>
                <p>Palm Springs, oasis en plein désert californien, charme par son mélange unique de modernité chic et de paysages désertiques spectaculaires.</p>
                <PhotosContainer className="two-pictures">
                    <Photo src={oiseau} />
                    <Photo src={sunset} />
                </PhotosContainer>
                <h1>Mount San Jacinto</h1>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias pariatur consequuntur adipisci repellat quisquam aliquam reiciendis. Debitis quisquam excepturi, maxime voluptate corrupti incidunt et maiores architecto officiis tempora dolor odio. Odio temporibus provident culpa earum ab doloremque doloribus nostrum impedit quia aliquid quae, suscipit, accusantium cum modi et voluptas assumenda.</p>
                <h1>Joshua Tree</h1>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias pariatur consequuntur adipisci repellat quisquam aliquam reiciendis. Debitis quisquam excepturi, maxime voluptate corrupti incidunt et maiores architecto officiis tempora dolor odio. Odio temporibus provident culpa earum ab doloremque doloribus nostrum impedit quia aliquid quae, suscipit, accusantium cum modi et voluptas assumenda.</p>
                <h1>Direction Williams</h1>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias pariatur consequuntur adipisci repellat quisquam aliquam reiciendis. Debitis quisquam excepturi, maxime voluptate corrupti incidunt et maiores architecto officiis tempora dolor odio. Odio temporibus provident culpa earum ab doloremque doloribus nostrum impedit quia aliquid quae, suscipit, accusantium cum modi et voluptas assumenda.</p>
            </EtapesContainer>
        </>
    )
}
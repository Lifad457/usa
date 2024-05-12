import { MainContainer, TextWrapper } from "../../styles/app.css";
import { EtapesContainer } from "../../styles/etapes.css";
import { PhotosContainer } from "../../styles/album-photos.css";
import { Photo } from "../../styles/photo.css";
import hero from '../../assets/images/burbank/hero.jpg';
import route from '../../assets/images/burbank/1.jpg';
import location from '../../assets/images/burbank/2.jpg';
import entrée from '../../assets/images/burbank/3.jpg';

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
                <h1>Direction Burbank</h1>
                <p>À peine atterit il s&apos;agit de récupérer la voiture de location et se rendre à notre première location à Burbank.</p>
                
                <PhotosContainer>
                    <Photo src={route} alt="Route vers Burbank" />
                    <Photo src={location} alt="Location à Burbank" />
                    <Photo src={entrée} alt="Entrée de la location" />
                </PhotosContainer>

                <h1>Studios Warner</h1>
                <p>Le lendemain nous passons la journée à visiter les studios Warner.</p>
                <PhotosContainer>

                </PhotosContainer>
            </EtapesContainer>
        </>
    )
}
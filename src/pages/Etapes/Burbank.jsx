import { MainContainer, TextWrapper } from "../../styles/app.css";
import { EtapesContainer } from "../../styles/etapes.css";
import { PhotosContainer } from "../../styles/album-photos.css";
import { Photo } from "../../styles/photo.css";
import hero from '../../assets/images/burbank/hero.jpg';
import route from '../../assets/images/burbank/1.jpg';
import location from '../../assets/images/burbank/2.jpg';
import entrée from '../../assets/images/burbank/3.jpg';
import pancartes from '../../assets/images/burbank/4.jpg';
import boite from '../../assets/images/burbank/5.jpg';
import lapin from '../../assets/images/burbank/6.jpg';
import chien from '../../assets/images/burbank/7.jpg';
import ecureuil from '../../assets/images/burbank/8.jpg';
import drapeau from '../../assets/images/burbank/9.jpg'; 
import chateauDeau from '../../assets/images/burbank/10.jpg'; 
import logoWB from '../../assets/images/burbank/11.jpg'; 
import maquette from '../../assets/images/burbank/12.jpg'; 
import chambre from '../../assets/images/burbank/13.jpg'; 
import escalier from '../../assets/images/burbank/14.jpg'; 
import edwige from '../../assets/images/burbank/15.jpg'; 
import cheminee from '../../assets/images/burbank/16.jpg'; 
import mandragore from '../../assets/images/burbank/17.jpg'; 
import atelier from '../../assets/images/burbank/18.jpg'; 
import recette from '../../assets/images/burbank/19.jpg'; 
import voiture from '../../assets/images/burbank/20.jpg'; 
import choixpeau from '../../assets/images/burbank/21.jpg'; 
import coupe from '../../assets/images/burbank/22.jpg'; 
import dobby from '../../assets/images/burbank/23.jpg'; 

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
                <PhotosContainer className="three-pictures">
                    <Photo src={route} alt="Route vers Burbank" />
                    <Photo src={location} alt="Location à Burbank" />
                    <Photo src={entrée} alt="Entrée de la location" className="row-span-2" />
                </PhotosContainer>

                <p>Une petite promenade dans le quartier.</p>
                <PhotosContainer className="six-pictures">
                    <Photo src={pancartes} alt="Deux pancartes engagéesk" />
                    <Photo src={boite} alt="Une boite à livres" className="row-span-2"/>
                    <Photo src={lapin} alt="Un petit lapin" />
                    <Photo src={chien} alt="Décoration chien et niche" />
                    <Photo src={ecureuil} alt="Un petit écureuil" />
                    <Photo src={drapeau} alt="Drapeaux dans une jarinière" className="row-span-2"/>
                </PhotosContainer>

                <h1>Studios Warner</h1>
                <p>Le lendemain nous passons la journée à visiter les studios Warner.</p>
                <PhotosContainer className="three-pictures left">
                    <Photo src={logoWB} alt="Logo Warner Bros" />
                    <Photo src={maquette} alt="Maquette studio" />
                    <Photo src={chateauDeau} alt="Chateau d'eau" className="row-span-2" />
                </PhotosContainer>

                <h2>L&apos;univers Harry Potter</h2>
                <p>La chambre sous l&apos;escalier.</p>
                <PhotosContainer className="two-pictures">
                    <Photo src={chambre} alt="Chambre sous l&apos;escalier" />
                    <Photo src={escalier} alt="Escalier" />
                </PhotosContainer>

                <p>Edwige dans sa cage et la cheminée avec les lettres.</p>
                <PhotosContainer className="two-pictures">
                    <Photo src={edwige} alt="Edwige dans sa cage" />
                    <Photo src={cheminee} alt="Cheminée avec les lettres" />
                </PhotosContainer>

                <p>L&apos;atelier de potions.</p>
                <PhotosContainer className="three-pictures">
                    <Photo src={atelier} alt="Atelier de potions" />
                    <Photo src={recette} alt="Recette" />
                    <Photo src={mandragore} alt="Mandragore" className="row-span-2" />
                </PhotosContainer>

                <p>Bonus.</p>
                <PhotosContainer className="four-pictures">
                    <Photo src={voiture} alt="Ford Anglia d'Arthur Weasley" className="col-span-2" />
                    <Photo src={choixpeau} alt="Choixpeau" />
                    <Photo src={coupe} alt="Coupe de feu" />
                    <Photo src={dobby} alt="Dobby" className="col-span-2" />
                </PhotosContainer>
            </EtapesContainer>
        </>
    )
}
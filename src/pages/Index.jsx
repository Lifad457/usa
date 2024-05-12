import Card from "../components/Card";
import { SectionContainer, CardContainer  } from "../styles/index.css";
import { MainContainer, TextWrapper } from "../styles/app.css";
import hero from '../assets/images/index/hero.jpg';
import burbank from '../assets/images/burbank/hero.jpg';
import palmSprings from '../assets/images/palm-springs/hero.jpg';
import grandCanyon from '../assets/images/grand-canyon/hero.jpg';
import page from '../assets/images/page/hero.jpg';
import monumentValley from '../assets/images/monument-valley/hero.jpg';
import kanab from '../assets/images/kanab/hero.jpg';
import deathValley from '../assets/images/death-valley/hero.jpg';
import sequoiaPark from '../assets/images/sequoia-park/hero.jpg';
import yosemite from '../assets/images/yosemite/hero.jpg';
import sanFrancisco from '../assets/images/san-francisco/hero.jpg';

export default function Index() {   
    return (
        <>
            <MainContainer src={hero}>
                <TextWrapper className="woody">
                    <p>Cette terre est la tienne,</p>
                    <p>Cette terre est la mienne</p>
                    <p>Du Pacifique à l&apos;île de Manhattan</p>
                    <p>Des forêts de séquoias,</p>
                    <p>Aux eaux du Gulf Stream,</p>
                    <p>Cette terre faite pour toi,</p>
                    <p>faite pour moi.</p>
                    <span>Woody Guthrie</span>
                </TextWrapper>
            </MainContainer>
            
            <SectionContainer>
                <h1>Découvrons ensemble notre voyage !</h1>
                <p>Je suis heureux de vous accueillir pour vous faire partager notre fabuleux périple aux USA.</p>
                <p>Ci-dessous les différentes étapes qui ont jallonnées notre parcours.</p>
                <CardContainer>
                    <Card to='burbank' src={burbank} title="Los Angeles" desc="C'est ici que tout commence, le 21 mai 2022 de Paris vers Los Angeles."/>
                    <Card to='/palm-springs' src={palmSprings} title="Palm Springs" desc="Un oasis dans le désert. Vue imprenable depuis Mount San Jacinto et Joshua Tree."/>
                    <Card to='/grand-canyon' src={grandCanyon} title="Le Grand Canyon" desc="Une merveille géologique."/>
                    <Card to='/page' src={page} title="Page" desc="Un lieu absolument magique. Visite de Antelope Canypon et Horseshoe Bend."/>
                    <Card to='/monument-valley' src={monumentValley} title="Monument Valley" desc="La vallée des rocs."/>
                    <Card to='/kanab' src={kanab} title="Kanab" desc="Un paysage unique au monde. Découverte de Bryce Canyon et Zion Park."/>
                    <Card to='/death-valley' src={deathValley} title="Death Valley" desc="Des salines aux dunes de sable et montagnes."/>
                    <Card to='/sequoia-park' src={sequoiaPark} title="Sequoia Park" desc="Une expérience époustouflante."/>
                    <Card to='/yosemite' src={yosemite} title="Yosemite" desc="Un joyau de la nature."/>
                    <Card to='/san-francisco' src={sanFrancisco} title="San Francisco" desc="Berceau de l'innovation et de la diversité."/>
                </CardContainer>
            </SectionContainer>
        </>
    )
}
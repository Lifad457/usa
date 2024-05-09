import Card from "../components/Card";
import monumentValley from "../assets/images/monument-valley.png";
import { MainContainer, TextWrapper, SectionContainer, CardContainer  } from "../styles/index.css";

export default function Index() {   
    return (
        <>
            <MainContainer>
                <TextWrapper>
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
                    <Card to='/' src={monumentValley} title="Le grand départ" desc="C'est ici que tout commence, le 21 mai 2022 de Paris vers Los Angeles."/>
                    <Card to='/' src={monumentValley} title="Le grand départ" desc="C'est partit"/>
                    <Card to='/' src={monumentValley} title="Le grand départ" desc="C'est partit"/>
                    <Card to='/' src={monumentValley} title="Le grand départ" desc="C'est partit"/>
                    <Card to='/' src={monumentValley} title="Le grand départ" desc="C'est partit"/>
                    <Card to='/' src={monumentValley} title="Le grand départ" desc="C'est partit"/>
                    <Card to='/' src={monumentValley} title="Le grand départ" desc="C'est partit"/>
                    <Card to='/' src={monumentValley} title="Le grand départ" desc="C'est partit"/>
                </CardContainer>
            </SectionContainer>
        </>
    )
}
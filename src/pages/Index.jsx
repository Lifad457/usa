import { MainContainer, TextWrapper, SectionContainer, Card, CardContainer  } from "../styles/index.css";

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
                <CardContainer>
                    <Card to='/'>
                        <p>Le Grand Canyon</p>
                    </Card>
                    <Card to='/'>
                        <p>Le Grand Canyon</p>
                    </Card>
                    <Card to='/'>
                        <p>Le Grand Canyon</p>
                    </Card>
                    <Card to='/'>
                        <p>Le Grand Canyon</p>
                    </Card>
                </CardContainer>
            </SectionContainer>
        </>
    )
}
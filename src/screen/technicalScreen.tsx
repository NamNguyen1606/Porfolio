import React from 'react';
import styled from 'styled-components';
import Tittle from '../components/Tittle';

const Container = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    margin: 0px;
    padding: 0px;
    background-color: #222222;
`
const TechnicalContainer = styled.div`
    flex: 1;
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
`;

const FrameworkContainer = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    flex-wrap: wrap;
`

const ProgramLanguageContainer = styled.div`
    display: flex;
`

const TechTittle = styled.p`
    font-size: 27px;
    letter-spacing: 1px;
    color: white;
    font-family: "BeVietnam-regular";
    margin-top: 20px;
    margin-left: 20px;
`

const TechContainer = styled.div`
    min-height: 350px;
    width: 500px;
    margin: 50px;
    background-color: rgba(196,196,196,0.2)
`

const TechListContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    padding: 20px;
`

//TEST
const Box = styled.div`
    height: 75px;
    width: 75px;
    margin: 20px;
    background-color: antiquewhite;
`

const TechnicalScreen = () => {

    return (
        <Container>
            <Tittle tittle="TECHNICAL SKILLS"/>
            <TechnicalContainer>
                <FrameworkContainer>
                    {/* front end */}
                    <TechContainer>
                        <TechTittle>FRONTEND</TechTittle>
                        <TechListContainer>
                            <Box/>
                            <Box/>
                            <Box/>
                            <Box/>
                            <Box/>
                            <Box/>
                            <Box/>
                        </TechListContainer>
                    </TechContainer>
                    {/* back end */}
                    <TechContainer>
                        <TechTittle>BACKEND</TechTittle>
                    </TechContainer>
                    {/* programing language end */}
                    <TechContainer>
                        <TechTittle>PROGRAMING LANGUAGE</TechTittle>
                    </TechContainer>
                    {/* IDE */}
                    <TechContainer>
                        <TechTittle>IDE & TOOLS</TechTittle>
                    </TechContainer>
                </FrameworkContainer>
                <ProgramLanguageContainer></ProgramLanguageContainer>
            </TechnicalContainer>
        </Container>
    )
    
}

export default TechnicalScreen
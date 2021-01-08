import React from 'react';
import styled from 'styled-components';
import CardProject from '../components/CardProject';
import Tittle from '../components/Tittle';

const Container = styled.div`
    height: 100vh;
    width: 100%;
`

const AboutContainer = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    height: 550px;
    width: 100%;
    background-color: #222222;
`

const TechnicalContainer = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    height: 800px;
    width: 100%;
    margin: 0px;
    padding: 0px;
    background-color: #222222;
`

const AboutInfoContainer = styled.div`
    height: 100%;
    width: 100%;
    background-color: red;
`

const Box = styled.div`
    height: 150px;
    width: 150px;
    background-color: antiquewhite;
`

const Con = styled.div`
        height: 100%;
        width: 100%;
`

const TechnicalLogoContainer = styled.div`
    display: grid;
    height: 1076px;
    width: auto;
    grid-template-columns: repeat(auto-fit, minmax(80px, 80px));
    grid-gap: 80px;
    background-color: royalblue;
`

const MiddleScreen = () => {
    return (
        <Container>
            <AboutContainer>
                <Tittle tittle="ABOUT ME"/>
                <AboutInfoContainer></AboutInfoContainer>
            </AboutContainer>
            <TechnicalContainer>
                <Tittle tittle="TECHNICAL SKILLS"/>
                <Con>
                    <TechnicalLogoContainer>
                        <Box/>
                        <Box/>
                        <Box/>
                        <Box/>
                        <Box/>
                        <Box/>
                        <Box/>
                        <Box/>
                        <Box/>
                        <Box/>
                        <Box/>
                        <Box/>
                        <Box/>
                    </TechnicalLogoContainer>
                </Con>
            </TechnicalContainer>
        </Container>
    );
}

export default MiddleScreen
import React from 'react';
import styled from 'styled-components';
import Tittle from '../components/Tittle';
import * as Images from '../utils/image'

const Container = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    margin: 0px;
    padding: 0px;
    background-color: #222222;
    margin-bottom: 15px;
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
    justify-content: flex-start;
    align-items: flex-start;
    width: 100%;
    flex-wrap: wrap;
`

const ProgramLanguageContainer = styled.div`
    display: flex;
`

const TechTittle = styled.p`
    font-size: 22px;
    letter-spacing: 1px;
    color: #F5F5F7;
    font-family: "BeVietnam-extraBold";
    margin-top: 20px;
    margin-left: 30px;
`

const TechContainer = styled.div`
    min-height: 320px;
    width: 500px;
    margin: 40px;    
    background-color: rgba(196,196,196,0.2);
    box-shadow: 0 8px 6px -6px black;
    border-radius: 20px;
`

const TechListContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    padding: 10px;
`

const BoxImage = styled.img`
    height: 75px;
    width: 75px;
    margin: 20px;
    background-color: white;
    object-fit: cover;
    /* filter: grayscale(20%); */
    border-radius: 4px;
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
                            <BoxImage src={Images.ReactNative}/>
                            <BoxImage src={Images.React}/>
                            <BoxImage src={Images.StyledComponents}/>
                            <BoxImage src={Images.ReactQuery}/>
                            <BoxImage src={Images.Recoil}/>
                            <BoxImage src={Images.ReactNavigation}/>
                        </TechListContainer>
                    </TechContainer>
                    {/* back end */}
                    <TechContainer>
                        <TechTittle>BACKEND</TechTittle>
                        <TechListContainer>
                            <BoxImage src={Images.NodeJs}/>
                            <BoxImage src={Images.Express}/>
                            <BoxImage src={Images.SocketIo}/> 
                            <BoxImage src={Images.MongoDb}/>
                            <BoxImage src={Images.Mongoose}/>
                        </TechListContainer>
                    </TechContainer>
                    {/* programing language end */}
                    <TechContainer>
                        <TechTittle>PROGRAMING LANGUAGE</TechTittle>
                        <TechListContainer>
                            <BoxImage src={Images.JavaScript}/>
                            <BoxImage src={Images.TypeScript}/>
                        </TechListContainer>
                    </TechContainer>
                    {/* IDE */}
                    <TechContainer>
                        <TechTittle>IDE & TOOLS</TechTittle>
                        <TechListContainer>
                            <BoxImage src={Images.VSCode}/>
                            <BoxImage src={Images.AndroidStudio}/>
                            <BoxImage src={Images.XCode}/>
                            <BoxImage src={Images.Figma}/>
                        </TechListContainer>
                    </TechContainer>
                </FrameworkContainer>
                <ProgramLanguageContainer></ProgramLanguageContainer>
            </TechnicalContainer>
        </Container>
    )
    
}

export default TechnicalScreen
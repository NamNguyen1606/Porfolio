import React from 'react';
import styled from 'styled-components';
import CardProject from '../components/CardProject';
import Tittle from '../components/Tittle';

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

const ProjectContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: flex-start;
    width: 100%;
`


const ProjectScreen = () => {

    return (
        <Container>
            <Tittle tittle="PROJECT"/>
            <ProjectContainer>
                <CardProject title="Chat Mobile" description="React Native/TypeScript" url="https://i.ytimg.com/vi/9MYunpPLVu0/maxresdefault.jpg"/>
                <CardProject title="Chat Website" description="ReactJs/TypeScript" url="https://i.ytimg.com/vi/9MYunpPLVu0/maxresdefault.jpg"/>
                <CardProject title="Chat Server" description="NodeJs/Express/TypeScript" url="https://i.ytimg.com/vi/9MYunpPLVu0/maxresdefault.jpg"/>
                <CardProject title="Apollo" description="React Native/TypeScript" url="https://i.ytimg.com/vi/9MYunpPLVu0/maxresdefault.jpg"/>
                <CardProject title="Instacop" description="Flutter/Dart/Firebase" url="https://i.ytimg.com/vi/9MYunpPLVu0/maxresdefault.jpg"/>
                <CardProject title="Flash Chat" description="Flutter/Dart/Firebase" url="https://i.ytimg.com/vi/9MYunpPLVu0/maxresdefault.jpg"/>
            </ProjectContainer>
        </Container>
    )
}

export default ProjectScreen
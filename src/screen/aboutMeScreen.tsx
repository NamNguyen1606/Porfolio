import React from 'react';
import styled from 'styled-components';
import Tittle from '../components/Tittle';

const Container = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    height: 550px;
    width: 100%;
    background-color: #222222;
`

const SubContainer = styled.div`
    display: flex;
    justify-content: flex-start;
    height: 100%;
    width: 100%;
    background-color: #222222;
`

const AvatarContainer = styled.div`
    display: flex;
    position: relative;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 400px;
    
`
const AvatarLayout = styled.div`
    position: absolute;
    left: 100px;
    top: 125px;
    z-index: 1;
    height: 300px;
    width: 200px;
    background-color: white;
    opacity: 0.1;

`

const Avatar = styled.img`
    position: absolute;
    left: 90px;
    top: 115px;
    z-index: 2;
    height: 300px;
    width: 200px;
    background-color: whitesmoke;
    transition: all .2s ease-in-out;
    &:hover{
        top: 110px;
        left: 85px;
        transition: all .2s ease-in-out;
    }
    ${AvatarLayout}:hover {
        top: 105px;
        left: 80px;
    }
    
   
`

const InfoContainer = styled.div`
    flex: 1;
    position: relative;
    height: 100%;
    width: 100%;
`

const InfoText = styled.pre`
    position: absolute;
    top: 115px;
    font-size: 25px;
    white-space: inherit;
    width: 80%;
    height: 80%;  
    color: #FAF4E6;
    margin: 0;
    padding: 0;
`

const NameText = styled.span`
    font-size: 25px;
    color: #FF9292;
    white-space: unset;
    margin: 0;
    padding: 0;
`

const LinkContainer = styled.div`
    display: flex;
    margin-top: 50px;
    position: absolute;
    top: 250px;
    left: -50px;
`

const SubNavigateTittle = styled.p`
    font-family: 'BeVietnam-regular';
    font-size: 14px;
    color: #FAF4E6;
    margin-left: 50px;
    cursor: pointer;

    &:hover {
        color: #FF9292;
        border-bottom: 3px solid #FF9292;
        padding-bottom: 5px;
    }
`

const AboutMeScreen = () => {

    return (
        <Container>
            <Tittle tittle="ABOUT ME"/>
            <SubContainer>
                <AvatarContainer>
                        <Avatar src="https://images.unsplash.com/photo-1508186225823-0963cf9ab0de?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=634&q=80"/>
                        <AvatarLayout/>
                </AvatarContainer>
                <InfoContainer>
                    <InfoText>
                        Hello <NameText>I’m John</NameText>, a software engineer in Ho Chi Minh city. I enjoy creating mobile applications, website or anything in between.
                        I enjoy creating mobile applications, website or anything in between.  
                        I enjoy creating mobile  mobile applications applications, website or anything in between.
                    </InfoText>
                </InfoContainer>
            </SubContainer>
        </Container>
    )
}

export default AboutMeScreen
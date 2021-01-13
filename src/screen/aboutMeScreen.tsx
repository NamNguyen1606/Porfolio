import React from 'react';
import styled from 'styled-components';
import Tittle from '../components/Tittle';
import AvatarUser from '../asset/avatar.png';

const Container = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    min-height: 550px;
    width: 100%;
    background-color: #222222;
`

const SubContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;
    height: 100%;
    width: 100%;
    background-color: #222222; 
    @media (max-width: 750px){
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
`

const Avatar = styled.img`
    height: 300px;
    width: 200px;
    background-color: whitesmoke;
    transition: all .2s ease-in-out;
    margin: 0px 40px;
    margin-top: 40px;
    box-shadow: 10px 10px 5px #131313;
    &:hover{
        box-shadow: 15px 15px 5px #131313;
    }
`

const InfoContainer = styled.div`
    width: 80%;
    height: 80%;
    margin: 40px 0px;  
`

const InfoText = styled.pre`
    white-space: inherit;
    height: 80%;  
    color: #FAF4E6;
    margin: 0;
    padding: 0;
    font-size: 25px;
`

const NameText = styled.span`
    font-size: 25px;
    color: #FF9292;
    white-space: unset;
    margin: 0;
    padding: 0;
`

const AboutMeScreen = () => {

    return (
        <Container>
            <Tittle tittle="ABOUT ME"/>
            <SubContainer>
                <Avatar src={AvatarUser}/>
                <InfoContainer>
                    <InfoText>
                        Hello, <NameText>I’m Nam</NameText>, a software engineer in Ho Chi Minh city with 1 year of experience in React Native technologies. Learning new languages and technologies is what I am passionate about.<br/>
                        I enjoy creating mobile applications, website or anything in between. I like helping other and work well with group.
                    </InfoText>
                </InfoContainer>
            </SubContainer>
        </Container>
    )
}

export default AboutMeScreen
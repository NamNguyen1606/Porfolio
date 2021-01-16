import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import Nav from '../../components/Nav';
import BackgroundImage from '../asset/background.jpg';

interface IHomeContainer {
    readonly url: string;
}

const HomeContainer = styled.div<IHomeContainer>`
    display: flex;
    flex-direction:column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100%;
    background-color: #222222;
    background-image: url(${(props) => props.url});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: top center;
`;

const SkillContainer = styled.div`
    display: flex;
    flex-direction:column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100%;
    background-color: #222222;
`;

const Title = styled.h1`
    color: #FFFFFF;
    font-family: 'BeVietnam-regular';
    font-size: 3vw;
`

const TopScreen = () => {
    const [scroll, setScroll] = useState(window.scrollY)

    const handleScroll = () => setScroll(window.scrollY)

    const isShow = () => {
        return scroll < 100 ? true : false 
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
        return  () => {
            // window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    return (
        <>
            <Nav isShow={isShow()}/>
            <HomeContainer url={BackgroundImage}>
                <Title>I'm a React Native Software Engineer</Title>
                <Title>I build things for the mobile</Title>
            </HomeContainer>
        </>
    )
};

export default TopScreen;
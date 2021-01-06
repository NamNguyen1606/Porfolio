import React from 'react';
import styled from 'styled-components';
import Nav from '../components/Nav';

const HomeContainer = styled.div`
    height: calc(100vh - 82px);
    width: 100%;
    background-color: #222222;
`;

const BackgroundContainer = styled.img`
    position: absolute;
    top: 118px;
    right: 150px;
    height: 670px;
    width: 670px;
    background-color: red;
`;

const HomeScreen = () => {

    return (
        <>
            <Nav/>
            <HomeContainer>
                <BackgroundContainer src="https://images.unsplash.com/photo-1583297184120-6e79788816e7?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=634&q=80" alt="Background"/>
            </HomeContainer>
            <HomeContainer/>
            <HomeContainer/>
            <HomeContainer/>
        </>
    )
};

export default HomeScreen;
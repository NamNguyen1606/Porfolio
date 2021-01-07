import React from 'react';
import styled from 'styled-components';
import TopScreen from './topScreen';

const SkillContainer = styled.div`
    display: flex;
    flex-direction:column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100%;
    background-color: #222222;
`;

const MainScreen = () => {

    return (
        <>
            <TopScreen/>
            <SkillContainer></SkillContainer>
        </>
    )
};

export default MainScreen;
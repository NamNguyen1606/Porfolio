import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    width: 100%;
    height: 70px;
    background-color: #3C3B3A;
`

const LogoContainer = styled.div`
    flex: 2;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding-left: 70px;
    background-color: transparent;
    
`;

const SubNavigateContainer = styled.div`
    flex: 8;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    background-color: transparent;
    margin-right: 70px;
`;

const LogoTxt = styled.pre`
    font-family: 'Cinzel';
    font-size: 18px;
    letter-spacing: 3px;
    color: #FAF4E6;
    font-weight: bold;
    padding: 0;
    margin: 0;   
`

const SubNavigateTittle = styled.p`
    font-family: 'BeVietnam-regular';
    font-size: 14px;
    color: #FAF4E6;
    margin-left: 50px;
    cursor: pointer;

    &:hover {
        color: #FF9292;
    }
`

const Nav = () => {

    return(
        <Container>
            <LogoContainer>
                <LogoTxt>{`NAM NGUYEN.`}</LogoTxt>
            </LogoContainer>
            <SubNavigateContainer>
                <SubNavigateTittle>About</SubNavigateTittle>
                <SubNavigateTittle>Work</SubNavigateTittle>
                <SubNavigateTittle>Experience</SubNavigateTittle>
                <SubNavigateTittle>Contact</SubNavigateTittle>
            </SubNavigateContainer>
        </Container>
    )
};
export default Nav;


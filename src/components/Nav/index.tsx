import React from 'react';
import styled, { css, keyframes } from 'styled-components';
import Logo from '../../asset/logo/LOGO.png';

const opacity = keyframes`
    from{
        background-color: transparent;
    }

    to{
        background-color: #3C3B3A;
    }
`
interface IContainer {
    readonly isShow: boolean;
}

const Container = styled.div<IContainer>`
    display: flex;
    position: absolute;
    top: 0;
    width: 100%;
    height: 70px;
    background-color: transparent;
    /* ${
        (props) => {
            if(props.isShow){
                return css`
                    background-color: transparent;
                    position: absolute;
                `
            } else {
                return css`
                    background-color: #3C3B3A;
                    position: -webkit-sticky; Safari
                `
            }

            
        }
    } */
`;

const LogoImage = styled.img`
    height: 20px;
    width: 19px;
    object-fit: contain;
`;


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
    margin-left: 10px;
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

interface IProps {
    isShow: boolean;
}

const Nav: React.FC<IProps> = React.memo((props) => {
    console.log("rendered");
    return(
        <Container isShow={props.isShow}>
            <LogoContainer>
                <LogoImage src={Logo}/>
                <LogoTxt>{`NAM NGUYEN.`}</LogoTxt>
            </LogoContainer>
            <SubNavigateContainer>
                <SubNavigateTittle>GitHub</SubNavigateTittle>
                <SubNavigateTittle>LinkedIn</SubNavigateTittle>
                <SubNavigateTittle>Email</SubNavigateTittle>
            </SubNavigateContainer>
        </Container>
    )
});
export default Nav;


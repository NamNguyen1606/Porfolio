import React from 'react';
import styled, { css, keyframes } from 'styled-components';
import Logo from '../../asset/logo/LOGO.png';
interface IContainer {
    readonly isShow: boolean;
}

const Container = styled.div<IContainer>`
    display: flex;
    position: fixed;
    z-index: 6;
    top: 0;
    width: 100%;
    height: 60px;
    background-color: transparent;
    transition: all .3s ease-in;
    ${
        (props) => {
            if(props.isShow){
                return css`
                    background-color: transparent;
                    position: absolute;
                `
            } else {
                return css`
                    background-color: rgba(60, 59, 58, 0.85);
                    position: -webkit-sticky; Safari,
                `
            }    
        }
    }
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

const SubNavigateTittle = styled.a`
    font-family: 'BeVietnam-regular';
    font-size: 14px;
    color: #FAF4E6;
    margin-left: 50px;
    cursor: pointer;
    text-decoration: none;

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
    return(
        <Container isShow={props.isShow}>
            <LogoContainer>
                <LogoImage src={Logo}/>
                <LogoTxt>{`NAM NGUYEN.`}</LogoTxt>
            </LogoContainer>
            <SubNavigateContainer>
                <SubNavigateTittle href="https://github.com/NamNguyen1606" target="_blank">GitHub</SubNavigateTittle>
                <SubNavigateTittle href="https://www.linkedin.com/in/nam-nguyen-1222561aa/" target="_blank">LinkedIn</SubNavigateTittle>
                <SubNavigateTittle href="mailto:ntpnam98@gmail.com" target="_blank">Email</SubNavigateTittle>
            </SubNavigateContainer>
        </Container>
    )
});
export default Nav;


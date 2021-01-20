import React, {useState} from 'react';
import styled, { css, keyframes } from 'styled-components';
import Logo from '../../asset/logo/LOGO.png';
import './index.css'
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
                    background-color: rgba(60, 59, 58, 1);
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
    @media ${`(max-width: 600px)`}{
        padding-left: 30px;
    }
`;

const SubNavigateContainer = styled.div`
    flex: 8;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    background-color: transparent;
    margin-right: 70px;
    @media ${`(max-width: 600px)`}{
        display: none;
    }
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

    @media ${`(max-width: 600px)`}{
        font-size: 35px;
        margin-bottom: 10px;
    }
`
const MenuIconHolder = styled.div`
    display: none;
    @media ${`(max-width: 600px)`}{
        flex: 8;
        display: flex;
        justify-content: flex-end;
        align-items: center;
        background-color: transparent;
        margin-right: 30px;
    }
`

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`
const fadeOut = keyframes`
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`

const NavContainer = styled.div<IContainer>`
    position: fixed;
    height: calc(100vh - 60px);
    width: 100%;
    background-color: #222222;
    display: ${props => props.isShow ? 'flex' : 'none'};
    flex-direction: column;
    justify-content: flex-start;
    align-items: baseline;
    margin-top: 60px;
    padding-top: 20px;
    animation: 0.3s ${fadeIn} ease-in-out;
    @media ${`(min-width: 600px)`}{
        display: none;
    }
`



interface IProps {
    isShow: boolean;
}

const Nav: React.FC<IProps> = React.memo((props) => {
    const [isShow, setIsShow] = useState(false);

    const handleNav = () => setIsShow(!isShow)

    return(
        <>
        <Container isShow={props.isShow}>
            <LogoContainer>
                <LogoImage src={Logo}/>
                <LogoTxt>{`NAM NGUYEN.`}</LogoTxt>
            </LogoContainer>
            <MenuIconHolder>
                <svg onClick={handleNav} className="icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    { isShow ?
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                        :<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                    }
                </svg>
            </MenuIconHolder>    
            <SubNavigateContainer>
                <SubNavigateTittle href="https://github.com/NamNguyen1606" target="_blank">Github</SubNavigateTittle>
                <SubNavigateTittle href="https://www.linkedin.com/in/nam-nguyen-1222561aa/" target="_blank">LinkedIn</SubNavigateTittle>
                <SubNavigateTittle href="mailto:ntpnam98@gmail.com" target="_blank">Email</SubNavigateTittle>
                <SubNavigateTittle href="https://drive.google.com/file/d/10TNZzNobR5Vl0EQOMMSpL1G7-pwdY3jO/view?usp=sharing" target="_blank">Resume</SubNavigateTittle>
            </SubNavigateContainer>
        <NavContainer isShow={isShow}>
                <SubNavigateTittle href="https://github.com/NamNguyen1606" target="_blank">Github</SubNavigateTittle>
                <SubNavigateTittle href="https://www.linkedin.com/in/nam-nguyen-1222561aa/" target="_blank">LinkedIn</SubNavigateTittle>
                <SubNavigateTittle href="mailto:ntpnam98@gmail.com" target="_blank">Email</SubNavigateTittle>
                <SubNavigateTittle href="https://drive.google.com/file/d/10TNZzNobR5Vl0EQOMMSpL1G7-pwdY3jO/view?usp=sharing" target="_blank">Resume</SubNavigateTittle>
        </NavContainer>
        </Container>
        </>
    )
});
export default Nav;


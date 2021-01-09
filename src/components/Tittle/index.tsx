import React from 'react';
import styled from 'styled-components';

interface IProps {
    tittle: string;
}

const Container = styled.div`
    height: fit-content;
    width: fit-content;
    padding: 0px;
    margin: 0px;
`

const TittleTxt = styled.h1`
    letter-spacing: 2px;
    font-family: "BeVietnam-extraBold";
    font-size: 50px;
    color: #FAF4E6;
    opacity: 0.35;
    writing-mode: vertical-rl;
    text-orientation: mixed;
    transition: all .2s ease-in-out;
    &:hover{
        opacity: 0.9;
        transition: all .2s ease-in-out;
    }
`
const Tittle: React.FC<IProps> = (props) => {
    return (
        <Container>
            <TittleTxt>{props.tittle}</TittleTxt>
         </Container>
    )
}

export default Tittle
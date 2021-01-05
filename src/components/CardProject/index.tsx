import { url } from 'inspector';
import React from 'react';
import styled, {css} from 'styled-components';

interface Props {
    title: string;
    url: string;
}

interface IContainer{
    readonly url: string;
}

const ButtonContainer = styled.div`
    display: flex;
    height: 100%;
    width: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const Container = styled.div<IContainer>`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 350px;
    width: 350px;
    background-color: lightgray;
    background-size: cover, contain;
    background-position: center;
    filter: grayscale(100%);
    background-image: url(${props => props.url});
    &:hover {
        filter: grayscale(10%);
        background-color: lightgray;
        transform: scale(1.01);
        transition: all .2s ease-in-out;
    };
    ${ButtonContainer}:hover {
        background-color: rgba(0,0,0, 0.3);
    }
`;

const TextButton = styled.text`
    font-size: 13px;
    color: white;
    font-weight: bold;
    padding: 5px 20px;
    border: 1px solid white;
    font-family: DidactGothic;
    cursor: pointer;
    &:hover{
        background-color: white;
        color: black;
    }
`;

const Title = styled.text`
    font-size: 28px;
    color: white;
    font-weight: bold;
    padding: 5px;
    font-family: DidactGothic;
`;

const CardProject: React.FC<Props> = (props) => {
    return (
        <Container url={props.url}>
            <ButtonContainer>
                <Title>{props.title}</Title>
                <TextButton>MORE</TextButton>
            </ButtonContainer>
        </Container>
    )
}

export default CardProject;
// "https://i.pinimg.com/originals/87/9f/ba/879fba21d66993bf0efb278e6767b658.jpg"
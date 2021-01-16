import { url } from 'inspector';
import React from 'react';
import styled, {css} from 'styled-components';

interface Props {
    title: string;
    description: string;
    url: string;
    onClick?: () => void;
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
    border-radius: 20px;
`;

const Container = styled.div<IContainer>`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 350px;
    width: 350px;
    margin: 40px;
    background-color: lightgray;
    background-size: cover, contain;
    background-position: center;
    filter: grayscale(60%);
    background-image: url(${props => props.url});
    border-radius: 20px;
    box-shadow: 0 8px 6px -6px black;
    transition: all .2s ease-in-out;
    
    &:hover {
        filter: grayscale(10%);
        background-color: lightgray;
        transform: scale(1.01);
    };
    ${ButtonContainer}:hover {
        background-color: rgba(0,0,0, 0.6);
    }
`;

const TextButton = styled.text`
    font-size: 13px;
    color: white;
    font-weight: bold;
    padding: 5px 20px;
    border: 1px solid white;
    font-family: "DidactGothic";
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
    font-family: "DidactGothic";
`;

const Type = styled.text`
    font-size: 20px;
    color: white;
    font-weight: bold;
    padding: 5px;
    font-family: "DidactGothic";
`;

const CardProject: React.FC<Props> = (props) => {
    return (
        <Container url={props.url} >
            <ButtonContainer>
                <Title>{props.title}</Title>
                <Type>{props.description}</Type>
                <TextButton onClick={props.onClick} >VIEW</TextButton>
            </ButtonContainer>
        </Container>
    )
}

export default CardProject;
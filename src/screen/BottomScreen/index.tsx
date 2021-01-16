import React from 'react';
import styled from 'styled-components';
import './index.css'

const Container = styled.div`
    position: relative;
    width: 100%;
    height: 200px;
    background-color: #3C3B3A;
`
const TopContainer = styled.div`
    width: 100%;
    height: 100px;
    background-color: #222222;
`

const CircleContainer = styled.div`
    position: absolute;
    height: 100px;
    width: 100px;
    border-radius: 50px;
    background-color: #3C3B3A;
    top: 25%;
    left: 50%;
    transition: all .2s ease-in;
`
const IconHolder = styled.div`
    ${CircleContainer}:hover {
        top: -6px;
        background-color: red
    }
`

const BottomScreen = () => {

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth"
          });
    }
    return (
        <Container>
            <TopContainer/>
            <div className="circleContainer" onClick={scrollToTop}>
                    <svg className="arrowIcon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 30 30" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7-7 7 7" />
                    </svg>
            </div>
        </Container>
    )
}

export default BottomScreen
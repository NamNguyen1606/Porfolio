import React, { useState } from 'react';
import styled from 'styled-components';
import CardProject from '../../components/CardProject';
import ProjectModal from '../../components/Modal';
import Tittle from '../../components/Tittle';
import Modal from 'react-modal';

const Container = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    margin: 0px;
    padding: 0px;
    background-color: #222222;
    margin-bottom: 15px;
`

const ProjectContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: flex-start;
    width: 100%;
`

const modalStyles = {
    content : {
        top                   : '50%',
        left                  : '50%',
        right                 : 'auto',
        bottom                : '-30%',
        // marginRight           : '-50%',
        transform             : 'translate(-50%, -50%)',
        background            : "#3C3B3A",
        border: 0,
        
      }
  };

const ProjectScreen = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const toggleModal = () => setIsModalOpen(!isModalOpen);

    return (
        <Container>
             <Modal
                isOpen={isModalOpen}
                style={modalStyles}
                onRequestClose={toggleModal}>   
                <ProjectModal/>
            </Modal>
            <Tittle tittle="PROJECT"/>
            <ProjectContainer>
                <CardProject onClick={toggleModal} title="Chat Mobile" description="React Native/TypeScript" url="https://i.ytimg.com/vi/9MYunpPLVu0/maxresdefault.jpg"/>
                <CardProject onClick={toggleModal} title="Chat Website" description="ReactJs/TypeScript" url="https://i.ytimg.com/vi/9MYunpPLVu0/maxresdefault.jpg"/>
                <CardProject title="Chat Server" description="NodeJs/Express/TypeScript" url="https://i.ytimg.com/vi/9MYunpPLVu0/maxresdefault.jpg"/>
                <CardProject title="Apollo" description="React Native/TypeScript" url="https://i.ytimg.com/vi/9MYunpPLVu0/maxresdefault.jpg"/>
                <CardProject title="Instacop" description="Flutter/Dart/Firebase" url="https://i.ytimg.com/vi/9MYunpPLVu0/maxresdefault.jpg"/>
                <CardProject title="Flash Chat" description="Flutter/Dart/Firebase" url="https://i.ytimg.com/vi/9MYunpPLVu0/maxresdefault.jpg"/>
            </ProjectContainer>
        </Container>
    )
}

export default ProjectScreen
import React, { useState } from 'react';
import styled, {keyframes} from 'styled-components';
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
        transform             : 'translate(-50%, -50%)',
        background            : "#3C3B3A",
        border: 0,
      },
    overlay: {
        background: "#ffffff50"
    }
  };

const ProjectScreen = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [projectId, setProjectId] = useState<number>(0);
    const toggleModal = () => setIsModalOpen(!isModalOpen);

    const handleCardClick = (id: number) => {
        setProjectId(id);
        toggleModal();
    }

    return (
        <Container>
             <Modal
                isOpen={isModalOpen}
                style={modalStyles}
                onRequestClose={toggleModal}>   
                <ProjectModal projectId={projectId}  onClose={toggleModal}/>
            </Modal>
            <Tittle tittle="PROJECT"/>
            <ProjectContainer>
                <CardProject onClick={() => handleCardClick(0)} title="Chat Mobile" description="React Native/TypeScript" url="https://i.ytimg.com/vi/9MYunpPLVu0/maxresdefault.jpg"/>
                <CardProject title="Chat Website" description="ReactJs/TypeScript" url="https://i.ytimg.com/vi/9MYunpPLVu0/maxresdefault.jpg"/>
                <CardProject title="Apollo" description="React Native/TypeScript" url="https://i.ytimg.com/vi/9MYunpPLVu0/maxresdefault.jpg"/>
                <CardProject title="Instacop" description="Flutter/Dart/Firebase" url="https://i.ytimg.com/vi/9MYunpPLVu0/maxresdefault.jpg"/>
                <CardProject title="Flash Chat" description="Flutter/Dart/Firebase" url="https://i.ytimg.com/vi/9MYunpPLVu0/maxresdefault.jpg"/>
            </ProjectContainer>
        </Container>
    )
}

export default ProjectScreen
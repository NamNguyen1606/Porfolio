import React, { useState } from 'react';
import styled, {keyframes} from 'styled-components';
import CardProject from '../../components/CardProject';
import ProjectModal from '../../components/Modal';
import Tittle from '../../components/Tittle';
import Modal from 'react-modal';
import * as ImageData  from '../../utils/image';

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
        background: "#000000B3"
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
                <CardProject onClick={() => handleCardClick(0)} title="Instacop" description="Flutter/Dart/Firebase" url={ImageData.Instacop}/>
                <CardProject onClick={() => handleCardClick(1)} title="Apollo" description="React Native/TypeScript" url={ImageData.Apollo}/>
                <CardProject onClick={() => handleCardClick(2)} title="Chat Website" description="ReactJs/TypeScript" url={ImageData.WebChat}/>
                {/* <CardProject onClick={() => handleCardClick(0)} title="Chat Mobile" description="React Native/TypeScript" url={ImageData.WebChat}/> */}
                <CardProject onClick={() => handleCardClick(3)} title="Flash Chat" description="Flutter/Dart/Firebase" url={ImageData.FlashChat}/>
            </ProjectContainer>
        </Container>
    )
}

export default ProjectScreen
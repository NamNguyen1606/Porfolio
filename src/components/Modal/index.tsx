import React from 'react';
import styled, {keyframes} from 'styled-components';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import './index.css';
import ProjectData from '../../utils/projectInfo';
const DATA = [
    "https://boostlikes-bc85.kxcdn.com/blog/wp-content/uploads/2017/06/Automatically-Message-Facebook-Fans.jpg",
    "https://support.apple.com/library/content/dam/edam/applecare/images/en_US/iOS/ios12-iphone-x-messages-send-photo-from-camera.jpg",
    "https://resources.workable.com/wp-content/uploads/2017/03/Recruiting-via-text-message.png"
]

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`

const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 750px; 
    background-color: #3C3B3A;
    border-radius: 30px;
    padding: 10px 50px;
    flex-wrap: wrap;
    overflow-y: scroll;
    align-items: flex-start;
    animation: .5s ${fadeIn} ease-in;
`

const TittleContainer = styled.div`
    display: flex;
    align-items: baseline;
`

const Tittle = styled.p`
    font-size: 50px;
    color: #FFFCF4;
    font-weight: bold;
    font-family: "BeVietnam-extraBold";
    letter-spacing: 2px;
`

const TextInfo = styled.pre`
    color: #FFFCF4;
    font-size: 20px;
    white-space: inherit;
`

const ProjectContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: flex-start;
    width: 100%;
`

const SliderContainer = styled.div`
    height: 400px;
    width: 700px;
    background-color:  rgba(196,196,196,0.2);
    /* padding: 10px; */
    border-radius: 10px;
    padding: 5px 10px;
    margin: 20px 0px; 
`

const InfoContainer = styled.div`
    width: 700px;
    /* padding: 10px;
    margin: 10px; */
`

const ImageProject = styled.img`
    width: 700px;
    height: 400px;
    object-fit: contain;
`
const IFrameProject = styled.iframe`
    width: 700px;
    height: 400px;
`

const Link = styled.a`
    color: #ff6969;
    font-size: 20px;
    cursor: pointer;
    /* margin-left: 5px; */
    &:hover{
        color: #ff3939;
    }
`

const items = DATA.map((item, index) => <ImageProject key={index} src={item} />)

const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    mobileFirst: true,
  };

interface IProjectModal {
    projectId: number;
    onClose?: () => void;
}

const ProjectModal: React.FC<IProjectModal> = (props) => {

    return (
        <Container>
            <svg onClick={props.onClose} className="svgClose" xmlns="http://www.w3.org/2000/svg" viewBox= "0 0 25 25" stroke="currentColor">
            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd" />
            </svg>
            <TittleContainer>
                <Tittle>{ProjectData[props.projectId].name}</Tittle>
            </TittleContainer>
            <ProjectContainer>
                <SliderContainer>
                    <Slider {...settings}>
                        <IFrameProject src={`https://www.youtube.com/embed/${ProjectData[props.projectId].youTubeVideoId}`} frameBorder={0} allowFullScreen></IFrameProject>
                        {items}
                    </Slider>
                </SliderContainer>
                <InfoContainer>
                    <TextInfo>
                    • Description: {ProjectData[props.projectId].description}
                    </TextInfo>
                    <TextInfo>
                    • Technologies: {ProjectData[props.projectId].technology}
                    </TextInfo>
                    { !ProjectData[props.projectId].isHaveSource || <TextInfo>
                    • Source: <Link href={ProjectData[props.projectId].githubUrl} >Github</Link> - <Link>Demo</Link>
                    </TextInfo>}
                </InfoContainer>
            </ProjectContainer>
        </Container>
    )
}
export default ProjectModal;
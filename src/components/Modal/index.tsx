import React from 'react';
import styled from 'styled-components';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import Slider from 'react-slick';

const DATA = [
    "https://boostlikes-bc85.kxcdn.com/blog/wp-content/uploads/2017/06/Automatically-Message-Facebook-Fans.jpg",
    "https://support.apple.com/library/content/dam/edam/applecare/images/en_US/iOS/ios12-iphone-x-messages-send-photo-from-camera.jpg",
    "https://resources.workable.com/wp-content/uploads/2017/03/Recruiting-via-text-message.png"
]

const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%; 
    background-color: #3C3B3A;
    border-radius: 20px;
    padding: 10px 50px;
    flex-wrap: wrap;
    overflow-y: scroll;
`

const Tittle = styled.p`
    font-size: 50px;
    color: #FFFCF4;
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
    background-image: url(https://cdn.tgdd.vn/GameApp/3/220099/Screentshots/grab-ung-dung-dat-xe-cong-nghe-220099-10-08-2020-0.png);
    padding: 10px;
    margin: 10px 10px;
`

const InfoContainer = styled.div`
    height: 400px;
    width: 500px;
    padding: 10px;
    margin: 10px;
`

const ImageProject = styled.img`
    width: 300px;
    height: 300px;
    object-fit: contain;
`

const items = DATA.map(item => <ImageProject src={item} />)

const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    mobileFirst: true,
  };

const ProjectModal = () => {
    return (
        <Container>
            <Tittle>Instacop</Tittle>
            <ProjectContainer>
                <SliderContainer>
                    {/* <Slider {...settings}>
                        {items}
                    </Slider> */}
                </SliderContainer>
                <InfoContainer>
                    <TextInfo>
                    Here is a simple example of react-modal being used in an app with some custom styles and focusable input elements within the modal content:
                    Here is a simple example of react-modal being used in an app with some custom styles and focusable input elements within the modal content:
                    Here is a simple example of react-modal being used in an app with some custom styles and focusable input elements within the modal content:
                    </TextInfo>
                </InfoContainer>
            </ProjectContainer>
        </Container>
    )
}
export default ProjectModal;
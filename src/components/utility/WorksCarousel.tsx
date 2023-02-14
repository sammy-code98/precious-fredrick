import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Box, Image } from '@chakra-ui/react';

const workImages = [
    { id: 1, src: '' }
]

export default function WorksCarousel() {

    const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 3,
        speed: 2000,
        rows: 2,
        slidesPerRow: 2,
        nextArrow: <></>,
        prevArrow: <></>,
        autoplay: true,
        autoplaySpeed: 2000,
        cssEase: "linear"



    }
    return (
        <Box py='6rem'>
            <Slider {...settings}>
                <ImageCard />

            </Slider>
        </Box>
    )
}



const ImageCard = () => {
    return (
        <Box m='1rem'>
            <Box w='400px' h='320px' bg='secondary' p='2rem' display='flex' justifyContent='center'>
                <Image src='https://bit.ly/dan-abramov' />
            </Box>
        </Box>

    )


}
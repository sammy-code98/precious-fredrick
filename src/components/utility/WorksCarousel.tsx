import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Box, Image } from '@chakra-ui/react';

const firstRowImages = [
    { id: 1, src: '/work1.svg' },
    { id: 2, src: '/work2.svg' },
    { id: 3, src: '/work3.svg' },
    { id: 4, src: '/work4.svg' },
]
const secondRowImages = [
    { id: 5, src: '/work5.svg' },
    { id: 6, src: '/work6.svg' },
    { id: 7, src: '/work7.svg' },
    { id: 8, src: '/work8.svg' },
]

interface ImageCardProp {
    src: string
}
interface SecondImageCardProps {
    src: string
}

export default function WorksCarousel() {

    const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 3,
        speed: 2000,
        nextArrow: <></>,
        prevArrow: <></>,
        autoplay: true,
        autoplaySpeed: 2000,
        cssEase: "linear",
        responsive: [
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
        ]
    }
    const secondSettings = {
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 3,
        speed: 2000,
        rtl: true,
        nextArrow: <></>,
        prevArrow: <></>,
        autoplay: true,
        autoplaySpeed: 2000,
        cssEase: "linear",
        responsive: [
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
        ]
    }
    return (
        <Box py='6rem'>
            <Slider {...settings}>
                {firstRowImages.map((work) => (
                    <ImageCard src={work.src} key={work.id} />
                ))}
            </Slider>

            <Slider {...secondSettings}>
                {secondRowImages.map((work) => (
                    <SecondImageCard src={work.src} key={work.id} />
                ))}
            </Slider>

        </Box>
    )
}


const ImageCard = ({ src }: ImageCardProp) => {
    return (
        <Box m='1rem'>
            <Box
                w={{ base: '100px', md: '400px' }}
                h={{ base: '80px', md: '320px' }}
                bg='secondary'
                p={{ base: '.5rem', md: '2rem' }}
                display='flex' justifyContent='center'>
                <Image src={src} />
            </Box>
        </Box>

    )
}

const SecondImageCard = ({ src }: SecondImageCardProps) => {
    return (
        <Box m='1rem'>
            <Box
                w={{ base: '100px', md: '400px' }}
                h={{ base: '80px', md: '320px' }}
                bg='secondary'
                p={{ base: '.5rem', md: '2rem' }}
                display='flex' justifyContent='center'>
                <Image src={src} />
            </Box>
        </Box>

    )
}
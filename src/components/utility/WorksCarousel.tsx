import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Box } from '@chakra-ui/react';


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
                <div>
                    <h3>1</h3>
                </div>
                <div>
                    <h3>2</h3>
                </div>
                <div>
                    <h3>3</h3>
                </div>
                <div>
                    <h3>4</h3>
                </div>
                <div>
                    <h3>5</h3>
                </div>
                <div>
                    <h3>6</h3>
                </div>
                <div>
                    <h3>7</h3>
                </div>
                <div>
                    <h3>8</h3>
                </div>
                <div>
                    <h3>9</h3>
                </div>
                <div>
                    <h3>10</h3>
                </div>
                <div>
                    <h3>11</h3>
                </div>
                <div>
                    <h3>12</h3>
                </div>
                <div>
                    <h3>13</h3>
                </div>
                <div>
                    <h3>14</h3>
                </div>
                <div>
                    <h3>15</h3>
                </div>
                <div>
                    <h3>16</h3>
                </div>

            </Slider>
        </Box>
    )
}

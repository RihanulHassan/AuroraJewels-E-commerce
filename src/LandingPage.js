import React from 'react';
import Slider from 'react-slick';
import { Box, Typography } from '@mui/material';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const images = [
    '/images/jewel1.jpg',
    '/images/jewel2.jpg',
    '/images/jewel3.jpg'
];

const Slideshow = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        arrows: false // Disable arrows to prevent additional width
    };

    return (
        <Slider {...settings}>
            {images.map((image, index) => (
                <Box key={index} sx={{ position: 'relative', height: '100vh' }}>
                    <img
                        src={image}
                        alt={`Slide ${index}`}
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                    <Box
                        sx={{
                            position: 'absolute',
                            top: '50%',
                            left: '50%',
                            transform: 'translate(-50%, -50%)',
                            color: 'white',
                            textAlign: 'center',
                            bgcolor: 'rgba(0, 0, 0, 0.6)',
                            padding: '20px',
                            borderRadius: '8px'
                        }}
                    >
                        <Typography variant="h2" component="div" sx={{ fontFamily: 'Great Vibes, cursive' }}>
                            Aurora Jewels
                        </Typography>
                        <Typography variant="h6" component="div" sx={{ fontFamily: 'Roboto, sans-serif' }}>
                            Your one-stop shop for exquisite jewelry
                        </Typography>
                    </Box>
                </Box>
            ))}
        </Slider>
    );
};

export default Slideshow;

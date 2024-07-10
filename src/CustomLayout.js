import React from 'react';
import { Box, Typography, Button, Grid } from '@mui/material';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const CustomLayout = () => {
  const items = [
    { id: 1, image: '/images/jewel1.jpg', link: '/page1' },
    { id: 2, image: '/images/jewel2.jpg', link: '/page2' },
    { id: 3, image: '/images/jewel3.jpg', link: '/page3' },
    { id: 4, image: '/images/jewel4.jpg', link: '/page4' },
    { id: 5, image: '/images/jewel5.jpg', link: '/page5' },
    { id: 6, image: '/images/jewel6.jpg', link: '/page6' },
  ];

  const firstTwoImages = [
    { id: 1, image: '/images/jewel1.jpg', link: '/page1' },
    { id: 2, image: '/images/jewel2.jpg', link: '/page2' },
  ];

  const secondTwoImages = [
    { id: 3, image: '/images/jewel3.jpg', link: '/page3' },
    { id: 4, image: '/images/jewel4.jpg', link: '/page4' },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    pauseOnHover: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: 'block', right: '10px' }}
        onClick={onClick}
      />
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: 'block', left: '10px' }}
        onClick={onClick}
      />
    );
  }

  return (
    <div>
      {/* First Slideshow */}
      <Slider {...settings}>
        {firstTwoImages.map((item) => (
          <Box key={item.id}>
            <Link to={item.link}>
              <Box
                sx={{
                  height: '50vh',
                  backgroundImage: `url(${item.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  cursor: 'pointer',
                }}
              />
            </Link>
          </Box>
        ))}
      </Slider>

      {/* Second Slideshow */}
      <Slider {...settings} style={{ marginTop: '20px' }}>
        {secondTwoImages.map((item) => (
          <Box key={item.id}>
            <Link to={item.link}>
              <Box
                sx={{
                  height: '50vh',
                  backgroundImage: `url(${item.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  cursor: 'pointer',
                }}
              />
            </Link>
          </Box>
        ))}
      </Slider>

      <Box sx={{ textAlign: 'center', padding: '40px 20px' }}>
        <Typography variant="h2" sx={{ fontFamily: 'Great Vibes, cursive' }}>
          Welcome to Aurora Jewels
        </Typography>
        <Box sx={{ width: '100px', height: '4px', bgcolor: 'primary.main', margin: '20px auto' }} />
        <Typography variant="h6" sx={{ fontFamily: 'Roboto, sans-serif', marginBottom: '20px' }}>
          Your one-stop shop for exquisite jewelry
        </Typography>
        <Button
          variant="contained"
          color="primary"
          sx={{ margin: '0 10px', '&:hover': { backgroundColor: 'secondary.main' } }}
        >
          Shop Now
        </Button>
        <Button
          variant="outlined"
          color="primary"
          sx={{ margin: '0 10px', '&:hover': { backgroundColor: 'secondary.main', color: 'white' } }}
        >
          Learn More
        </Button>
      </Box>

      {/* New 6 Box Layout */}
      <Grid container spacing={2}>
        {items.map((item) => (
          <Grid item xs={12} sm={6} key={item.id}>
            <Box
              sx={{
                height: '50vh',
                backgroundImage: `url(${item.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                position: 'relative',
                cursor: 'pointer',
              }}
            >
              <Box
                sx={{
                  position: 'absolute',
                  bottom: '10%',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  color: 'white',
                  textAlign: 'center',
                  padding: '10px',
                  borderRadius: '8px'
                }}
              >
                <Button
                  component={Link}
                  to={item.link}
                  variant="contained"
                  color="primary"
                  sx={{ margin: '5px', '&:hover': { backgroundColor: 'secondary.main' } }}
                >
                  Learn More
                </Button>
                <Button
                  variant="outlined"
                  color="primary"
                  sx={{ margin: '5px', '&:hover': { backgroundColor: 'secondary.main', color: 'white' } }}
                >
                  Buy
                </Button>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default CustomLayout;

import React from 'react';
import { Box, Typography, Button, Grid, Card, CardActions, CardContent, CardMedia, IconButton, Container } from '@mui/material';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Favorite, ArrowBack, ArrowForward } from '@mui/icons-material';

const MainLayout = ({ children }) => {
  return (
    <Box sx={{ backgroundColor: '#f5f5f5' }}>
      <Container maxWidth="lg" sx={{ py: 4 }}>
        {children}
      </Container>
    </Box>
  );
};

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
    <MainLayout>
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

      <Box sx={{ textAlign: 'center', padding: '40px 0' }}>
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
                  borderRadius: '8px',
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

      {/* Third Slideshow with Animation */}
      <Slider {...settings} style={{ margin: '20px 0' }} centerMode={true} centerPadding="20%">
        {items.map((item, index) => (
          <Box key={item.id} sx={{ position: 'relative' }}>
            <Link to={item.link}>
              <Box
                sx={{
                  height: '50vh',
                  width: '100%',
                  cursor: 'pointer',
                  transition: 'filter 0.5s ease',
                  filter: index === 2 ? 'none' : 'grayscale(100%)',
                  '&.slick-center': {
                    filter: 'none',
                  },
                }}
              >
                <img
                  src={item.image}
                  alt={`Slide ${item.id}`}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                  }}
                />
                <Box
                  sx={{
                    position: 'absolute',
                    bottom: '30px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    textAlign: 'center',
                    color: 'white',
                    opacity: 0,
                    transition: 'opacity 0.5s ease',
                    '&:hover': {
                      opacity: 1,
                    },
                  }}
                >
                  <Typography variant="h5">
                    Discover Our Latest Collection
                  </Typography>
                  <Button
                    variant="contained"
                    color="primary"
                    sx={{ margin: '10px', '&:hover': { backgroundColor: 'secondary.main' } }}
                  >
                    Shop Now
                  </Button>
                </Box>
              </Box>
            </Link>
          </Box>
        ))}
      </Slider>

      {/* New Arrivals Section */}
      <Box sx={{ padding: '40px 0' }}>
        <Typography variant="h4" sx={{ textAlign: 'center', marginBottom: '20px' }}>
          New Arrivals
        </Typography>
        <Box sx={{ position: 'relative' }}>
          <Slider {...settings} slidesToShow={4} slidesToScroll={1}>
            {[
              { id: 1, image: '/images/product1.jpg', name: 'Diamond Ring', price: '₹49,999' },
              { id: 2, image: '/images/product2.jpg', name: 'Gold Necklace', price: '₹79,999' },
              { id: 3, image: '/images/product3.jpg', name: 'Pearl Earrings', price: '₹29,999' },
              { id: 4, image: '/images/product4.jpg', name: 'Sapphire Bracelet', price: '₹59,999' },
              { id: 5, image: '/images/product5.jpg', name: 'Ruby Pendant', price: '₹39,999' },
              { id: 6, image: '/images/product6.jpg', name: 'Emerald Studs', price: '₹34,999' },
            ].map((product) => (
              <Box key={product.id} sx={{ padding: '10px' }}>
                <Card sx={{ maxWidth: 345, position: 'relative' }}>
                  <CardMedia
                    component="img"
                    height="200"
                    image={product.image}
                    alt={product.name}
                  />
                  <IconButton
                    sx={{
                      position: 'absolute',
                      top: 5,
                      right: 5,
                      color: 'white',
                      backgroundColor: 'rgba(0, 0, 0, 0.5)',
                      '&:hover': { backgroundColor: 'rgba(0, 0, 0, 0.7)' },
                    }}
                  >
                    <Favorite />
                  </IconButton>
                  <CardContent>
                    <Typography gutterBottom variant="h6" component="div">
                      {product.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {product.price}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" variant="contained" fullWidth>
                      Add to Cart
                    </Button>
                  </CardActions>
                </Card>
              </Box>
            ))}
          </Slider>
          <IconButton
            sx={{
              position: 'absolute',
              top: '50%',
              left: -20,
              transform: 'translateY(-50%)',
              backgroundColor: 'primary.main',
              color: 'white',
              '&:hover': { backgroundColor: 'primary.dark' },
            }}
            onClick={() => this.slider.slickPrev()}
          >
            <ArrowBack />
          </IconButton>
          <IconButton
            sx={{
              position: 'absolute',
              top: '50%',
              right: -20,
              transform: 'translateY(-50%)',
              backgroundColor: 'primary.main',
              color: 'white',
              '&:hover': { backgroundColor: 'primary.dark' },
            }}
            onClick={() => this.slider.slickNext()}
          >
            <ArrowForward />
          </IconButton>
        </Box>
      </Box>

      {/* Informational Text Section */}
      <Box sx={{ padding: '20px 0', textAlign: 'center', maxWidth: '800px', margin: 'auto' }}>
        <Typography variant="body2" sx={{ fontFamily: 'Roboto, sans-serif', color: 'grey.700' }}>
          ‡No Cost EMI is available with the purchase of an eligible product made using qualifying cards on 3- or 6-month tenures from most leading banks. Until 6 August 2024, No Cost EMI is available with the purchase of an eligible iPhone made using qualifying cards on 3-, 6-, 9-, 12-, 18- or 24-month tenures from most leading banks. Monthly pricing is rounded to the nearest rupee. Exact pricing will be provided by your bank, subject to your bank's terms and conditions. Minimum order spend applies as per your card-issuing bank threshold. Offer cannot be combined with Apple Store for Education or Corporate Employee Purchase Plan pricing. Card eligibility is subject to terms and conditions between you and your card-issuing bank. Offer may be revised or withdrawn at any time without any prior notice. Terms apply.
        </Typography>
        <Typography variant="body2" sx={{ fontFamily: 'Roboto, sans-serif', color: 'grey.700', marginTop: '10px' }}>
          Representative example:
          <br />
          Based on a 6-month tenure. ₹79900.00 total cost includes 15% p.a. and No Cost EMI savings of ₹3380.00, paid over 6 months as six monthly payments of ₹13317.00.
          <br />
          Based on a 24-month tenure. ₹79900.00 total cost includes 15% p.a. and No Cost EMI savings of ₹11242.00, paid over 24 months as 24 monthly payments of ₹3329.00.
        </Typography>
        <Typography variant="body2" sx={{ fontFamily: 'Roboto, sans-serif', color: 'grey.700', marginTop: '10px' }}>
          *Qualified purchasers can receive promotion savings when they purchase an eligible product with promotion product at a qualifying location. Only one promotion product per eligible product per qualified purchaser. Offer is subject to availability. Subject to terms and conditions herein.
        </Typography>
        <Typography variant="body2" sx={{ fontFamily: 'Roboto, sans-serif', color: 'grey.700', marginTop: '10px' }}>
          1. Apple Intelligence will be available in beta on iPhone 15 Pro, iPhone 15 Pro Max, and iPad and Mac with M1 and later, with Siri and device language set to US English, as part of iOS 18, iPadOS 18, and macOS Sequoia later this year.
          <br />
          Some features, additional languages and platforms will be coming over the course of the next year. A subscription is required for Apple TV+.
        </Typography>
      </Box>
    </MainLayout>
  );
};

export default CustomLayout;
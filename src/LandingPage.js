import React from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const jewelImages = [
    'jewel1.jpg', // Replace with actual image URLs or paths
    'jewel2.jpg',
    'jewel3.jpg'
];

const LandingPage = () => {
    return (
        <Box>
            <Box sx={{ p: 5, textAlign: 'center', bgcolor: 'primary.main', color: 'white' }}>
                <Typography variant="h2">Welcome to AuroraJewels</Typography>
                <Typography variant="h6">Your one-stop shop for exquisite jewelry</Typography>
            </Box>
            <Container sx={{ mt: 5 }}>
                <Grid container spacing={4}>
                    {jewelImages.map((image, index) => (
                        <Grid item xs={12} sm={6} md={4} key={index}>
                            <Box
                                component="img"
                                src={image}
                                alt={`Jewel ${index + 1}`}
                                sx={{ width: '100%', borderRadius: 2 }}
                            />
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
};

export default LandingPage;

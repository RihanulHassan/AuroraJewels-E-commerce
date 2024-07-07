import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const Footer = () => {
    return (
        <Box sx={{ bgcolor: 'text.secondary', p: 3, textAlign: 'center', color: 'white' }}>
            <Typography variant="body2">
                &copy; 2024 AuroraJewels. All rights reserved.
            </Typography>
        </Box>
    );
};

export default Footer;

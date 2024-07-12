import React from 'react';
import { Container, Box } from '@mui/material';

const MainLayout = ({ children }) => {
  return (
    <Box sx={{ backgroundColor: '#f5f5f5' }}>
      <Container maxWidth="lg" sx={{ py: 4 }}>
        {children}
      </Container>
    </Box>
  );
};

export default MainLayout;
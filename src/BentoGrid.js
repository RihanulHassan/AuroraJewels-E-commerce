import React from 'react';
import { Grid, Box, Typography } from '@mui/material';

const items = [
  { id: 1, color: '#FF6F61' },
  { id: 2, color: '#6B5B95' },
  { id: 3, color: '#88B04B' },
  { id: 4, color: '#F7CAC9' },
  { id: 5, color: '#92A8D1' },
  { id: 6, color: '#955251' },
  { id: 7, color: '#B565A7' },
  { id: 8, color: '#009B77' },
];

const BentoGrid = () => {
  return (
    <Grid container spacing={2} style={{ padding: 10 }}>
      {items.map((item, index) => (
        <Grid
          item
          xs={12}
          sm={index % 4 === 0 ? 6 : 3}  // Adjust size to create bento effect
          key={item.id}
        >
          <Box
            sx={{
              backgroundColor: item.color,
              height: index % 4 === 0 ? '200px' : '100px',  // Adjust height to create bento effect
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 2,
              color: 'white',
              fontSize: 20,
              transition: 'transform 0.3s',
              '&:hover': {
                transform: 'scale(1.05)',
              },
            }}
          >
            <Typography variant="h6">
              Item {item.id}
            </Typography>
          </Box>
        </Grid>
      ))}
    </Grid>
  );
};

export default BentoGrid;

import React from 'react';
import { Typography, Box, Container } from '@mui/material';

export default function Portfolio() {
  return (
    <Container
      maxWidth="lg"
      sx={{
        height: '100%',        // fill the grid’s main row
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        py: 4,                  // vertical padding
      }}
    >
      <Box textAlign="center">
        <Typography
          variant="h2"
          gutterBottom
          sx={{ fontWeight: 'bold' }}
        >
          Our Portfolio
        </Typography>
        <Typography
          variant="h5"
          sx={{ maxWidth: 600, mx: 'auto' }}
        >
          A showcase of landmark projects reflecting our commitment to design excellence.
        </Typography>
      </Box>
    </Container>
  );
}

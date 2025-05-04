import React from 'react';
import { Typography, Box, Container } from '@mui/material';

export default function Contact() {
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
          Contact Us
        </Typography>
        <Typography
          variant="h5"
          sx={{ maxWidth: 600, mx: 'auto' }}
        >
          Let's connect and start building your vision today.
        </Typography>
      </Box>
    </Container>
  );
}

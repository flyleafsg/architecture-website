import React from 'react';
import { Typography, Box, Grid, Card } from '@mui/material';

const projects = [
  'Skyline Tower',
  'Green Pavilion',
  'Urban Loft',
  'Coastal Retreat',
  'Mountain Cabin',
  'Eco Campus',
];

export default function Portfolio() {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        background: 'linear-gradient(to bottom, #fffde7, #ffffff)',
      }}
    >
      {/* Main content */}
      <Box sx={{ flex: '1 0 auto', py: 8, px: 2, textAlign: 'center' }}>
        <Typography variant="h3" fontWeight="bold" gutterBottom>
          Our Portfolio
        </Typography>
        <Typography variant="subtitle1" gutterBottom>
          A showcase of landmark projects reflecting our commitment to design excellence.
        </Typography>

        <Grid
          container
          spacing={4}
          justifyContent="center"
          alignItems="center"
          sx={{ mt: 4 }}
        >
          {projects.map((title, index) => (
            <Grid item key={index}>
              <Card
                sx={{
                  width: 220,
                  height: 220,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  textAlign: 'center',
                  boxShadow: 3,
                  transition: 'transform 0.3s',
                  '&:hover': {
                    transform: 'scale(1.05)',
                  },
                }}
              >
                <Box
                  sx={{
                    px: 2,
                    textAlign: 'center',
                  }}
                >
                  <Typography
                    variant="h6"
                    fontWeight="bold"
                    noWrap
                    sx={{ overflow: 'hidden', textOverflow: 'ellipsis' }}
                  >
                    {title}
                  </Typography>
                </Box>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Footer placeholder */}
      <Box sx={{ flexShrink: 0 }}>
        {/* Add <Footer /> here if needed */}
      </Box>
    </Box>
  );
}

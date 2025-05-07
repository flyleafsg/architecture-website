// src/pages/Portfolio.jsx

import React from 'react';
import { Typography, Box, Grid, Card, CardMedia } from '@mui/material';

const projects = [
  { title: 'Skyline Tower', image: 'skyline.jpg' },
  { title: 'Green Pavilion', image: 'green.jpg' },
  { title: 'Urban Loft', image: 'urban.jpg' },
  { title: 'Coastal Retreat', image: 'coastal.jpg' },
  { title: 'Mountain Cabin', image: 'cabin.jpg' },
  { title: 'Eco Campus', image: 'eco.jpg' },
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
          {projects.map((project, index) => (
            <Grid item key={index}>
              <Card
                sx={{
                  width: 220,
                  height: 280,
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'flex-start',
                  boxShadow: 3,
                  transition: 'transform 0.3s',
                  '&:hover': {
                    transform: 'scale(1.05)',
                  },
                }}
              >
                <CardMedia
                  component="img"
                  height="160"
                  image={`/images/portfolio/${project.image}`}
                  loading="lazy"
                  alt={project.title}
                  sx={{
                    objectFit: 'cover',
                    borderBottom: '1px solid #ddd',
                  }}
                />

                <Box
                  sx={{
                    flexGrow: 1,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
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
                    {project.title}
                  </Typography>
                </Box>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>

      <Box sx={{ flexShrink: 0 }}>
        {/* <Footer /> */}
      </Box>
    </Box>
  );
}

// src/pages/About.jsx

import React from 'react';
import { Box, Container, Typography, Grid, Card, CardContent, Avatar, Button } from '@mui/material';
import PublicIcon from '@mui/icons-material/Public';
import NatureIcon from '@mui/icons-material/Nature';
import PaletteIcon from '@mui/icons-material/Palette';
import { Link } from 'react-router-dom';

export default function About() {
  return (
    <Box sx={{ bgcolor: 'white', pt: { xs: 6, md: 10 }, pb: { xs: 8, md: 12 } }}>
      {/* Hero Section */}
      <Container maxWidth="md" sx={{ textAlign: 'center', mb: { xs: 4, md: 8 } }}>
        <Typography variant="h3" component="h1" gutterBottom sx={{ fontWeight: 'bold', letterSpacing: 1 }}>
          About ArchiVision
        </Typography>
        <Typography variant="subtitle1" color="text.secondary">
          Transforming ideas into iconic architectural spaces that inspire and endure.
        </Typography>
      </Container>

      {/* Core Values */}
      <Container maxWidth="lg" sx={{ mb: { xs: 6, md: 10 } }}>
        <Grid container spacing={4}>
          {[
            { icon: <PublicIcon fontSize="large" />, title: 'Global Reach', description: 'Projects spanning continents, adapting to diverse cultures and environments.' },
            { icon: <NatureIcon fontSize="large" />, title: 'Eco-Friendly', description: 'Sustainable practices and materials for a greener future.' },
            { icon: <PaletteIcon fontSize="large" />, title: 'Innovative Design', description: 'Blending creativity and technology to push architectural boundaries.' },
          ].map((item, idx) => (
            <Grid key={idx} item xs={12} md={4}>
              <Card
                elevation={3}
                sx={{ p: 4, textAlign: 'center', height: '100%', transition: 'transform 0.3s', '&:hover': { transform: 'translateY(-8px)' } }}
              >
                <Avatar sx={{ bgcolor: 'primary.main', width: 56, height: 56, mx: 'auto', mb: 2 }}>
                  {item.icon}
                </Avatar>
                <CardContent>
                  <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
                    {item.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {item.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Call to Action */}
      <Container maxWidth="sm" sx={{ textAlign: 'center' }}>
        <Typography variant="h5" gutterBottom sx={{ mb: 3 }}>
          Ready to bring your vision to life?
        </Typography>
        <Button component={Link} to="/contact" variant="contained" size="large" sx={{ px: 4, py: 1.5 }}>
          Contact Us
        </Button>
      </Container>
    </Box>
  );
}

import React from 'react';
import { Box, Container, Typography, Grid, Card, CardContent, Avatar, Button } from '@mui/material';
import PublicIcon from '@mui/icons-material/Public';
import NatureIcon from '@mui/icons-material/Nature';
import PaletteIcon from '@mui/icons-material/Palette';
import { Link } from 'react-router-dom';
import { styled } from '@mui/system';

// Pencil-sketch circles with darker, richer shading
const DecorativeCircle = styled('div')(({ ownerState }) => ({
  position: 'absolute',
  borderRadius: '50%',
  background: 'radial-gradient(circle at center, rgba(0,0,0,0.1) 50%, transparent 100%)',
  opacity: 0.5,
  width: ownerState.size,
  height: ownerState.size,
  top: ownerState.top,
  left: ownerState.left,
  transform: ownerState.rotation,
  boxShadow: [
    `inset -6px -6px 12px rgba(0,0,0,0.3)`,  // stronger inner shadow
    `inset 6px 6px 14px rgba(0,0,0,0.2)`,    // softer inner highlight
    `4px 4px 8px rgba(0,0,0,0.15)`,          // pronounced outer shadow
    `-4px -4px 8px rgba(0,0,0,0.1)`          // subtle counter highlight
  ].join(', '),
  zIndex: 0,
}));

export default function About() {
  return (
    <Box
      sx={{
        position: 'relative',
        background: 'linear-gradient(135deg, #fffff3 0%, #fffde7 60%, #fff9c4 100%)',
        boxShadow: [
          'inset 0 0 120px rgba(0,0,0,0.15)',
          '0 4px 30px rgba(0,0,0,0.1)'
        ].join(', '),
        pt: { xs: 6, md: 10 },
        pb: { xs: 8, md: 12 },
      }}
    >
      {/* Pencil-sketch circles */}
      <DecorativeCircle
        ownerState={{
          size: '220px',
          top: '-40px',
          left: '-40px',
          rotation: 'rotate(-12deg)',
        }}
      />
      <DecorativeCircle
        ownerState={{
          size: '320px',
          top: '65%',
          left: '75%',
          rotation: 'rotate(8deg)',
        }}
      />

      {/* Hero Section */}
      <Container maxWidth="md" sx={{ textAlign: 'center', mb: { xs: 4, md: 8 }, position: 'relative', zIndex: 1 }}>
        <Typography variant="h3" component="h1" gutterBottom sx={{ fontWeight: 'bold', letterSpacing: 1 }}>
          About ArchiVision
        </Typography>
        <Typography variant="subtitle1" color="text.secondary">
          Transforming ideas into iconic architectural spaces that inspire and endure.
        </Typography>
      </Container>

      {/* Core Values */}
      <Container maxWidth="lg" sx={{ mb: { xs: 6, md: 10 }, position: 'relative', zIndex: 1 }}>
        <Grid container spacing={4}>
          {[
            {
              icon: <PublicIcon fontSize="large" />, 
              title: 'Global Reach',
              description: 'Projects spanning continents, adapting to diverse cultures and environments.',
            },
            {
              icon: <NatureIcon fontSize="large" />, 
              title: 'Eco-Friendly',
              description: 'Sustainable practices and materials for a greener future.',
            },
            {
              icon: <PaletteIcon fontSize="large" />, 
              title: 'Innovative Design',
              description: 'Blending creativity and technology to push architectural boundaries.',
            },
          ].map((item, idx) => (
            <Grid key={idx} item xs={12} md={4}>
              <Card elevation={4} sx={{ p: 4, textAlign: 'center', height: '100%', transition: 'transform 0.3s', '&:hover': { transform: 'translateY(-8px)' } }}>
                <Avatar sx={{ bgcolor: 'primary.main', width: 56, height: 56, mx: 'auto', mb: 2 }}>{item.icon}</Avatar>
                <CardContent>
                  <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>{item.title}</Typography>
                  <Typography variant="body2" color="text.secondary">{item.description}</Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Call to Action */}
      <Container maxWidth="sm" sx={{ textAlign: 'center', position: 'relative', zIndex: 1 }}>
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

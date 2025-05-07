// src/pages/About.jsx

import React from 'react';
import {
  CssBaseline,
  Box,
  Typography,
  Container,
  Button,
  Card,
  CardContent
} from '@mui/material';
import { Link } from 'react-router-dom'; // ✅ Enable routing

const cardData = [
  {
    title: 'Our Philosophy',
    description:
      'We believe architecture should harmonize with its environment, enrich communities, and inspire those who experience it.',
  },
  {
    title: 'Our Team',
    description:
      'Led by a diverse team of visionary architects and designers, we collaborate across disciplines to deliver meaningful and timeless spaces.',
  },
  {
    title: 'Our Vision',
    description:
      'We aim to redefine modern architecture by embracing technology, culture, and sustainability to design the future responsibly.',
  },
];

export default function About() {
  return (
    <>
      <CssBaseline />

      <Box
        sx={{
          width: '100%',
          background: 'linear-gradient(to bottom, #fffde7, #ffffff)',
          py: 8,
        }}
      >
        <Container maxWidth="lg">
          <Typography variant="h3" fontWeight="bold" textAlign="center" gutterBottom>
            About ArchiVision
          </Typography>

          <Typography
            variant="subtitle1"
            textAlign="center"
            sx={{ maxWidth: 800, mx: 'auto', mb: 6 }}
          >
            We are a design-driven architecture firm dedicated to transforming visionary concepts
            into spatial experiences that endure. Every structure we create reflects a commitment
            to beauty, sustainability, and functionality.
          </Typography>

          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              flexWrap: 'wrap',
              gap: 4,
              px: 2,
            }}
          >
            {cardData.map((card, index) => (
              <Box
                key={index}
                sx={{
                  width: {
                    xs: '100%',
                    sm: '45%',
                    md: '30%',
                  },
                  minWidth: 280,
                  maxWidth: 360,
                  flexGrow: 1,
                }}
              >
                <Card
                  sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    backgroundColor: '#fdfdfd',
                    border: '1px solid #ddd',
                    boxShadow: 2,
                    transition: 'transform 0.3s',
                    '&:hover': {
                      transform: 'scale(1.04)',
                      boxShadow: 4,
                    },
                  }}
                >
                  <CardContent>
                    <Typography variant="h6" fontWeight="bold" gutterBottom>
                      {card.title}
                    </Typography>
                    <Typography variant="body2">{card.description}</Typography>
                  </CardContent>
                </Card>
              </Box>
            ))}
          </Box>

          {/* ✅ Learn More button links to /contact */}
          <Box textAlign="center" mt={6}>
            <Button
              component={Link}
              to="/contact"
              variant="contained"
              sx={{
                backgroundColor: '#333333',
                color: '#fff',
                fontWeight: 'bold',
                px: 5,
                py: 1.5,
                fontSize: '1.1rem',
                borderRadius: 0,
                '&:hover': {
                  backgroundColor: '#555555',
                },
              }}
            >
              Learn More
            </Button>
          </Box>
        </Container>
      </Box>
    </>
  );
}

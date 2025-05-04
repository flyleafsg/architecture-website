// src/components/Navbar.jsx

import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { Link as RouterLink } from 'react-router-dom';

const navLinks = [
  { title: 'Home', path: '/' },
  { title: 'About', path: '/about' },
  { title: 'Portfolio', path: '/portfolio' },
  { title: 'Contact', path: '/contact' },
];

export default function Navbar() {
  return (
    <AppBar
      position="static"
      elevation={0}
      sx={{
        backgroundColor: 'black',
        color: 'white',
        px: { xs: 2, md: 4 },
      }}
    >
      <Toolbar disableGutters>
        {/* Logo on the left */}
        <Typography
          variant="h6"
          component={RouterLink}
          to="/"
          sx={{
            flexGrow: 1,
            textDecoration: 'none',
            color: 'inherit',
            fontWeight: 'bold',
          }}
        >
          ArchiVision
        </Typography>

        {/* Links container, right-aligned */}
        <Box sx={{ display: 'flex', gap: 3 }}>
          {navLinks.map(({ title, path }) => (
            <Button
              key={title}
              component={RouterLink}
              to={path}
              sx={{
                color: 'inherit',
                textTransform: 'none',
                fontWeight: 500,
                '&:hover': { color: 'secondary.main' },
              }}
            >
              {title}
            </Button>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  );
}

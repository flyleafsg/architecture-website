// src/components/Layout.jsx

import React from 'react';
import { Outlet } from 'react-router-dom';
import { Box } from '@mui/material';
import Navbar from './Navbar';
import Footer from './Footer';

export default function Layout() {
  return (
    <Box
      sx={{
        display: 'grid',
        gridTemplateRows: 'auto 1fr auto', // header / content / footer
        minHeight: '100vh',                // fill entire viewport
      }}
    >
      <Navbar />

      {/* Everything that <Outlet> renders will go into the middle row */}
      <Box component="main" sx={{ overflow: 'auto' }}>
        <Outlet />
      </Box>

      <Footer />
    </Box>
  );
}

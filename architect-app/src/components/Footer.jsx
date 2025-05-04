// src/components/Footer.jsx

import React from 'react';
import { Box, Typography, IconButton } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        bgcolor: 'black',
        color: 'white',
        py: { xs: 2, md: 3 },
        px: 2,
        textAlign: 'center',
      }}
    >
      {/* Copyright */}
      <Typography variant="body2" sx={{ mb: 1 }}>
        © 2025 ArchiVision. All rights reserved.
      </Typography>

      {/* Social media icons only */}
      <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2 }}>
        <IconButton
          component="a"
          href="https://www.facebook.com/ArchiVision"
          target="_blank"
          rel="noopener"
          sx={{ color: 'white' }}
        >
          <FacebookIcon />
        </IconButton>
        <IconButton
          component="a"
          href="https://twitter.com/ArchiVision"
          target="_blank"
          rel="noopener"
          sx={{ color: 'white' }}
        >
          <TwitterIcon />
        </IconButton>
        <IconButton
          component="a"
          href="https://www.instagram.com/ArchiVision"
          target="_blank"
          rel="noopener"
          sx={{ color: 'white' }}
        >
          <InstagramIcon />
        </IconButton>
        <IconButton
          component="a"
          href="https://www.linkedin.com/company/ArchiVision"
          target="_blank"
          rel="noopener"
          sx={{ color: 'white' }}
        >
          <LinkedInIcon />
        </IconButton>
      </Box>
    </Box>
);
}

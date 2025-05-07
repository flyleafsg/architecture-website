// src/pages/Contact.jsx

import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Paper,
  Link as MuiLink,
  TextField,
  Button
} from '@mui/material';
import { styled } from '@mui/material/styles';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';

// Styled card for contact details
const ContactCard = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  textAlign: 'center',
  boxShadow: theme.shadows[4],
  maxWidth: 500,
  margin: '0 auto',
  marginBottom: theme.spacing(6),
  backgroundColor: '#fdfdfd',
  border: '1px solid #ddd',
}));

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert("Thank you! We'll get back to you soon.");
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <Box
      sx={{
        position: 'relative',
        background: 'linear-gradient(135deg, #fffff3 0%, #fffde7 60%, #fff9c4 100%)',
        boxShadow: ['inset 0 0 120px rgba(0,0,0,0.1)', '0 4px 30px rgba(0,0,0,0.05)'].join(', '),
        pt: { xs: 6, md: 10 },
        pb: { xs: 6, md: 10 },
        minHeight: '100vh',
      }}
    >
      <Container maxWidth="sm" sx={{ position: 'relative', zIndex: 1 }}>
        <Typography variant="h2" align="center" gutterBottom sx={{ fontWeight: 'bold', mb: 2 }}>
          Contact Us
        </Typography>
        <Typography variant="body1" align="center" sx={{ mb: 4 }}>
          Let’s connect and start building your vision today.
        </Typography>

        {/* Contact Details Card */}
        <ContactCard>
          <Grid container spacing={3}>
            <Grid item xs={12} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <LocationOnIcon sx={{ mr: 1, color: '#333' }} />
              <Typography>1234 Arch Ave, Suite 100</Typography>
            </Grid>
            <Grid item xs={12} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Typography>Denver, CO 80202</Typography>
            </Grid>
            <Grid item xs={12} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <EmailIcon sx={{ mr: 1, color: '#333' }} />
              <MuiLink href="mailto:contact@archivision.com" underline="hover" color="inherit">
                contact@archivision.com
              </MuiLink>
            </Grid>
            <Grid item xs={12} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <PhoneIcon sx={{ mr: 1, color: '#333' }} />
              <MuiLink href="tel:+15551234567" underline="hover" color="inherit">
                (555) 123-4567
              </MuiLink>
            </Grid>
          </Grid>
        </ContactCard>

        {/* Contact Form */}
        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{
            maxWidth: 500,
            margin: '0 auto',
            display: 'flex',
            flexDirection: 'column',
            gap: 3,
          }}
        >
          <TextField
            label="Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            fullWidth
            variant="outlined"
            sx={{
              backgroundColor: '#fff',
              borderRadius: 1,
              '& .MuiOutlinedInput-root': {
                '& fieldset': { borderColor: '#ccc' },
                '&:hover fieldset': { borderColor: '#999' },
                '&.Mui-focused fieldset': { borderColor: '#333' },
              },
            }}
          />
          <TextField
            label="Email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            required
            fullWidth
            variant="outlined"
            sx={{
              backgroundColor: '#fff',
              borderRadius: 1,
              '& .MuiOutlinedInput-root': {
                '& fieldset': { borderColor: '#ccc' },
                '&:hover fieldset': { borderColor: '#999' },
                '&.Mui-focused fieldset': { borderColor: '#333' },
              },
            }}
          />
          <TextField
            label="Message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            multiline
            rows={4}
            fullWidth
            variant="outlined"
            sx={{
              backgroundColor: '#fff',
              borderRadius: 1,
              '& .MuiOutlinedInput-root': {
                '& fieldset': { borderColor: '#ccc' },
                '&:hover fieldset': { borderColor: '#999' },
                '&.Mui-focused fieldset': { borderColor: '#333' },
              },
            }}
          />
          <Button
            type="submit"
            variant="contained"
            size="large"
            fullWidth
            sx={{
              py: 1.5,
              backgroundColor: '#333',
              color: '#fff',
              fontWeight: 'bold',
              borderRadius: 0,
              '&:hover': {
                backgroundColor: '#555',
              },
            }}
          >
            Submit
          </Button>
        </Box>
      </Container>
    </Box>
  );
}

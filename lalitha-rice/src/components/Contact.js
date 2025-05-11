import React from 'react';
import { Container, Typography, TextField, Button, Box, Grid, Paper } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
  };

  return (
    <Container sx={{ py: 8 }}>
      <Typography variant="h3" gutterBottom textAlign="center">
        Contact Us
      </Typography>
      
      <Grid container spacing={6}>
        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 4 }}>
            <Typography variant="h5" gutterBottom>
              Send us a message
            </Typography>
            <Box component="form" onSubmit={handleSubmit}>
              <TextField
                fullWidth
                label="Name"
                margin="normal"
                required
              />
              <TextField
                fullWidth
                label="Email"
                margin="normal"
                required
                type="email"
              />
              <TextField
                fullWidth
                label="Phone"
                margin="normal"
                required
              />
              <TextField
                fullWidth
                label="Message"
                margin="normal"
                required
                multiline
                rows={4}
              />
              <Button
                type="submit"
                variant="contained"
                color="primary"
                sx={{ mt: 3 }}
              >
                Send Message
              </Button>
            </Box>
          </Paper>
        </Grid>
        
        <Grid item xs={12} md={6}>
          <Box sx={{ mb: 4 }}>
            <Typography variant="h5" gutterBottom>
              Contact Information
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
              <LocationOnIcon sx={{ mr: 2 }} />
              <Typography>
                123 Rice Mill Road, Agricultural District<br />
                Chennai, Tamil Nadu 600001
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
              <PhoneIcon sx={{ mr: 2 }} />
              <Typography>+91 44 2345 6789</Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <EmailIcon sx={{ mr: 2 }} />
              <Typography>contact@lalitharice.com</Typography>
            </Box>
          </Box>
          
          <Box>
            <Typography variant="h5" gutterBottom>
              Business Hours
            </Typography>
            <Typography>
              Monday - Saturday: 9:00 AM - 6:00 PM<br />
              Sunday: Closed
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Contact;

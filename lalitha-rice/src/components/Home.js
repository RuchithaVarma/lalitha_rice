import React from 'react';
import { Container, Typography, Box, Button, Grid, Paper } from '@mui/material';

const Home = () => {
  return (
    <Box>
      <Box
        sx={{
          height: '60vh',
          backgroundImage: 'linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url("/images/rice-field.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          textAlign: 'center'
        }}
      >
        <Container>
          <Typography variant="h2" gutterBottom>
            Welcome to Lalitha Rice
          </Typography>
          <Typography variant="h5" gutterBottom>
            Premium Quality Rice for Your Family
          </Typography>
          <Button variant="contained" color="primary" size="large" sx={{ mt: 3 }}>
            Explore Our Products
          </Button>
        </Container>
      </Box>

      <Container sx={{ py: 8 }}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Paper sx={{ p: 3, textAlign: 'center' }}>
              <Typography variant="h6" gutterBottom>Premium Quality</Typography>
              <Typography>
                Our rice is carefully selected and processed to ensure the highest quality.
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} md={4}>
            <Paper sx={{ p: 3, textAlign: 'center' }}>
              <Typography variant="h6" gutterBottom>Traditional Methods</Typography>
              <Typography>
                We combine traditional farming methods with modern technology.
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} md={4}>
            <Paper sx={{ p: 3, textAlign: 'center' }}>
              <Typography variant="h6" gutterBottom>Wide Variety</Typography>
              <Typography>
                Choose from our wide range of rice varieties to suit your needs.
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Home;

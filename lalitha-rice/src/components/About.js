import React from 'react';
import { Container, Typography, Box, Grid } from '@mui/material';

const About = () => {
  return (
    <Container sx={{ py: 8 }}>
      <Grid container spacing={6}>
        <Grid item xs={12} md={6}>
          <Typography variant="h3" gutterBottom>
            About Lalitha Rice
          </Typography>
          <Typography variant="body1" paragraph>
            Established with a vision to provide the finest quality rice to every household, 
            Lalitha Rice has been a trusted name in the rice industry for generations.
          </Typography>
          <Typography variant="body1" paragraph>
            Our commitment to quality begins right from the selection of seeds and 
            continues through cultivation, harvesting, and processing. We work closely 
            with farmers who follow sustainable farming practices.
          </Typography>
          <Typography variant="body1" paragraph>
            Every grain of rice that bears the Lalitha name goes through rigorous 
            quality checks to ensure that only the best reaches your table.
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box
            component="img"
            src="/images/about-us.jpg"
            alt="Rice Field"
            sx={{
              width: '100%',
              height: '400px',
              objectFit: 'cover',
              borderRadius: 2
            }}
          />
        </Grid>
      </Grid>
    </Container>
  );
};

export default About;

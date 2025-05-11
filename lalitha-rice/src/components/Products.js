import React from 'react';
import { Container, Typography, Grid, Card, CardContent, CardMedia, Box } from '@mui/material';

const products = [
  {
    name: 'Premium Basmati Rice',
    description: 'Long-grain aromatic rice perfect for biryanis and pulao',
    image: '/images/basmati.jpg',
    price: '₹120/kg'
  },
  {
    name: 'Sona Masoori',
    description: 'Medium-grain rice ideal for daily consumption',
    image: '/images/sona-masoori.jpg',
    price: '₹60/kg'
  },
  {
    name: 'Brown Rice',
    description: 'Nutritious whole grain rice for health-conscious consumers',
    image: '/images/brown-rice.jpg',
    price: '₹80/kg'
  },
  {
    name: 'Idly Rice',
    description: 'Perfect for making soft and fluffy idlis',
    image: '/images/idly-rice.jpg',
    price: '₹55/kg'
  }
];

const Products = () => {
  return (
    <Container sx={{ py: 8 }}>
      <Typography variant="h3" gutterBottom textAlign="center">
        Our Products
      </Typography>
      <Grid container spacing={4}>
        {products.map((product, index) => (
          <Grid item key={index} xs={12} sm={6} md={3}>
            <Card sx={{ height: '100%' }}>
              <CardMedia
                component="img"
                height="200"
                image={product.image}
                alt={product.name}
                sx={{ objectFit: 'cover' }}
              />
              <CardContent>
                <Typography gutterBottom variant="h6" component="div">
                  {product.name}
                </Typography>
                <Typography variant="body2" color="text.secondary" gutterBottom>
                  {product.description}
                </Typography>
                <Box sx={{ mt: 2 }}>
                  <Typography variant="h6" color="primary">
                    {product.price}
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Products;

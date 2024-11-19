import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Typography, Card, CardContent, CardMedia, Box, Divider } from '@mui/material';

const ProductDetailPage = () => {
  const { id } = useParams(); // Get product ID from URL
  const [product, setProduct] = useState(null);

  useEffect(() => {
    // Fetch product details based on the ID from URL
    const fetchProductDetails = async () => {
      const response = await fetch(`https://fakestoreapi.com/products/${id}`);
      const data = await response.json();
      setProduct(data);
    };

    fetchProductDetails();
  }, [id]); // Trigger fetch when ID changes

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <Container maxWidth="sm" sx={{ mt: 4 }}>
      <Card sx={{ maxWidth: 400, margin: 'auto', borderRadius: 2, boxShadow: 3 }}>
        <CardMedia
          component="img"
          alt={product.title}
          height="250"
          image={product.image}
          sx={{ objectFit: 'contain', borderRadius: '10px 10px 0 0' }}
        />
        <CardContent>
          <Typography variant="h5" component="div" gutterBottom sx={{ fontWeight: 'bold' }}>
            {product.title}
          </Typography>
          <Typography variant="h6" color="primary" gutterBottom>
            Price: ${product.price.toFixed(2)}
          </Typography>
          <Divider sx={{ mb: 2 }} />
          <Typography variant="body2" color="textSecondary" paragraph>
            <strong>Description:</strong> {product.description}
          </Typography>
        </CardContent>
      </Card>
    </Container>
  );
};

export default ProductDetailPage;

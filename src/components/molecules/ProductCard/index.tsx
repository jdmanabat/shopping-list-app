import * as React from 'react';
import {
  Alert,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Snackbar,
  Typography,
} from '@mui/material';
import { Box } from '@mui/system';

import { useAppDispatch } from '../../../app/hooks';

import { TProduct } from '../../../features/products/productsSlice';
import { addToCart } from '../../../features/cart/cartSlice';

export default function ProductCard(params: TProduct) {
  const { imageSrc, title, description, price } = params;

  const dispatch = useAppDispatch();

  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    dispatch(addToCart({ ...params, quantity: 0 }));
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Card
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        pt: 2,
      }}
    >
      <Box>
        <CardMedia
          component="img"
          height="300"
          image={imageSrc}
          alt={description}
          sx={{
            objectFit: 'contain',
          }}
        />
        <CardContent>
          <Typography gutterBottom variant="h5">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
          <Typography gutterBottom variant="h6">
            ${price}
          </Typography>
        </CardContent>
      </Box>

      <CardActions>
        <Button variant="contained" size="small" onClick={handleClick}>
          Add to cart
        </Button>
      </CardActions>

      <Snackbar open={open} autoHideDuration={1000} onClose={handleClose}>
        <Alert onClose={handleClose} sx={{ width: '100%' }}>
          Added {title} to the cart
        </Alert>
      </Snackbar>
    </Card>
  );
}

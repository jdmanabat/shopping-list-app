import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Container } from '@mui/material';
import Navbar from '../organisms/Navbar';

export default function PageLayout(params: {
  title: string;
  children: React.ReactNode;
}) {
  const { title, children } = params;
  return (
    <>
      <Helmet>
        <title>{title ? `${title} | ` : ''} Shopping list app</title>
      </Helmet>
      <Navbar />
      <Container maxWidth="xl" sx={{ py: 2 }}>
        {children}
      </Container>
    </>
  );
}

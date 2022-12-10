import { Container } from '@mui/material';
import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function PageLayout(params: {
  title: string;
  children: React.ReactNode;
}) {
  const { title, children } = params;
  return (
    <>
      <Helmet>
        <title>{title}</title>
      </Helmet>

      <Container>{children}</Container>
    </>
  );
}

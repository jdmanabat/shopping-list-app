import React from 'react';
import { Typography } from '@mui/material';

import PageLayout from '../../templates/PageLayout';
import Counter from '../../molecules/Counter';

export default function HomePage() {
  return (
    <PageLayout title="Home" test-dataid="home-page">
      <Typography component="h1">Home Page</Typography>
      <Counter />
    </PageLayout>
  );
}

import React from 'react';
import { Typography } from '@mui/material';

import PageLayout from '../../templates/PageLayout';

export default function AboutPage() {
  return (
    <PageLayout title="About" test-dataid="about-page">
      <Typography component="h1">About Page</Typography>
    </PageLayout>
  );
}

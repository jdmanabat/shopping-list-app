import React from 'react';

import PageLayout from '../../templates/PageLayout';
import ProductList from '../../organisms/ProductList';

import { useAppSelector } from '../../../app/hooks';

export default function HomePage() {
  const products = useAppSelector((state) => state.products.items);

  return (
    <PageLayout title="Product List">
      <ProductList products={products} />
    </PageLayout>
  );
}

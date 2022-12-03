import Layout from '@theme/Layout';
import React from 'react';

import Home from '../components/Home';

function HomePage() {
  return (
    <Layout
      title="FlashPixel"
      description="The best image uploading tool"
    >
      <Home />
    </Layout>
  );
}

export default HomePage;

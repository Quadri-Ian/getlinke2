import React from 'react';
import '../app/globals.css'; // Example: Import global styles
import Layout from '../app/layout';
import { AppProps } from 'next/app';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';

library.add(fas, fab);

// ... rest of your _app.js file



function MyApp({ Component, pageProps }) {
  // You can include layout components, providers, or other setup here
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;

import React from 'react';
import { Toaster } from 'react-hot-toast';

import  Layout  from '../pages/components/Layout';
import '../styles/globals.css';
import { StateContext } from '../pages/contex/useContex';

function MyApp({ Component, pageProps }) {
  return (
    
    <StateContext>
    <Layout>
      <Toaster />
      <Component {...pageProps} />
    </Layout>
  </StateContext>
  
  )
}

export default MyApp
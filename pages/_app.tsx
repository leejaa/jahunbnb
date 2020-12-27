import React, { useEffect } from 'react';
import { ApolloProvider } from '@apollo/client';
import { SCREEN_SIZE, useApollo } from '../lib/apolloClient';

export default function App({ Component, pageProps }) {
  const apolloClient = useApollo(pageProps);
  useEffect(() => {
    if (typeof window !== 'undefined') {
      SCREEN_SIZE({ width: window.screen.width, height: window.screen.height });
    }
  }, []);
  return (
    <ApolloProvider client={apolloClient}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}

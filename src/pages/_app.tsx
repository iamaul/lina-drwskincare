import 'focus-visible';

import { ChakraProvider, Flex } from '@chakra-ui/react';

import { AppProps } from 'next/app';
import { DefaultSeo, SocialProfileJsonLd } from 'next-seo';

import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import theme from '@/styles/theme';

import { SEO, SocialsProfileSEO } from '~/next-seo.config';
import siteConfig from '~/site.config';

function MyApp({ Component, pageProps, router }: AppProps) {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <DefaultSeo {...SEO} canonical={siteConfig.url + (router.asPath || '')} />
      <SocialProfileJsonLd {...SocialsProfileSEO} />

      <Flex direction='column' justify='space-between' minH='100vh'>
        <Navbar />
        <Component {...pageProps} />
        <Footer />
      </Flex>
    </ChakraProvider>
  )
}

export default MyApp;
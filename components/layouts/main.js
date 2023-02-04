import Head from 'next/head'
import dynamic from 'next/dynamic'
import NavBar from '../navbar'
import { Box, Container } from '@chakra-ui/react'
import Footer from '../footer'
import VoxelDogLoader from '../voxel-dog-loader'

const LazyVoxelDog = dynamic(() => import('../voxel-dog'), {
  ssr: false,
  loading: () => <VoxelDogLoader />
})

const Main = ({ children, router }) => {
  return (
    <Box as="main" pb={8}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Cris's homepage" />
        <meta name="author" content="Cristian Araoz" />
        <meta name="author" content="portfolio" />
        <link rel="apple-touch-icon" href="/public/apple-touch-icon.png" />
        <link rel="shortcut icon" href="apple-touch-icon.png" type="image/x-icon" />
        <meta name="twitter:title" content="Cris Araoz" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@crisaraoz" />
        <meta name="twitter:creator" content="@crisaraoz" />
        <meta name="twitter:image" content="https://www.craftz.dog/card.png" />
        <meta property="og:site_name" content="Cristian Araoz" />
        <meta name="og:title" content="Cristian Araoz" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://www.craftz.dog/card.png" />
        <title>Cristian Araoz - Homepage</title>
      </Head>

      <NavBar path={router.asPath} />

      <Container maxW="container.md" pt={14}>
        <LazyVoxelDog />

        {children}

        <Footer />
      </Container>
    </Box>
  )
}

export default Main
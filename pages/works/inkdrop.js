import {
    Container,
    Badge,
    Link,
    List,
    ListItem,
    AspectRatio
  } from '@chakra-ui/react'
  import { ExternalLinkIcon } from '@chakra-ui/icons'
  import { Title, WorkImage, Meta } from '../../components/work'
  import P from '../../components/paragraph'
  import Layout from '../../components/layouts/article'
  
  const Work = () => (
    <Layout title="ClonDisney">
      <Container>
        <Title>
          Clon Disney <Badge>2020</Badge>
        </Title>
        <P>
        Challenge done about a Disney+ Clon webapp, Initial page + Login + Home page with catalog of movies and descriptions.
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Website</Meta>
            <Link href="https://crisaraoz.github.io/disney-plus/home">
              Project Link <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Platform</Meta>
            <span>Windows/macOS/Linux/iOS/Android</span>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>NodeJS, React.js, Redux</span>
          </ListItem>
          <ListItem>
            <Meta>Repository in GitHub</Meta>
            <Link href="https://github.com/crisaraoz/disney-plus">
            test <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
        </List>
  
        <WorkImage src="/public/images/works/proy_clonDisney1.jpg" alt="ClonDisney" />
        <WorkImage src="/public/images/works/proy_clonDisney2.jpg" alt="ClonDisney2" />
        <AspectRatio maxW="640px" ratio={1.7} my={4}>
          <iframe
            src="https://www.youtube.com/embed/-qBavwqc_mY"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </AspectRatio>
      </Container>
    </Layout>
  )
  
  export default Work
  export { getServerSideProps } from '../../components/chakra'
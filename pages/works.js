import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

import thumbDisney from '../public/images/works/proy_clonDisney1.jpg'
import thumbEcom from '../public/images/works/proy_ecommerce1.jpg'
import thumbIfts from '../public/images/works/proy_ifts4.jpg'
import thumbPokedex from '../public/images/works/proy_pokedex.jpg'
import thumbFulbito from '../public/images/works/proy_fulbitoSystem.jpg'
import thumbBot from '../public/images/works/proy_botautomatico.jpg'

const Works = () => (
  <Layout title="Works">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Works
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem id="DisneyClone" title="DisneyClone" thumbnail={thumbDisney}>
            A responsive Disney+ Clone
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem
            id="ecommerce"
            title="Ecommerce"
            thumbnail={thumbEcom}
          >
            	It's a ecommerce web app with backend in Sanity. 
          </WorkGridItem>
        </Section>

        <Section delay={0.1}>
          <WorkGridItem
            id="ifts"
            title="IFTS Web"
            thumbnail={thumbIfts}
          >
            Proyect design for my University's web 
          </WorkGridItem>
        </Section>
        <Section delay={0.1}>
          <WorkGridItem id="pokedex" thumbnail={thumbPokedex} title="Pokedex">
          It's using the PokeApi, on the main screen Pokemons are listed also it can be saved! 
          </WorkGridItem>
        </Section>
      </SimpleGrid>

      <Section delay={0.2}>
        <Divider my={6} />

        <Heading as="h3" fontSize={20} mb={4}>
          Collaborations
        </Heading>
      </Section>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section delay={0.3}>
          <WorkGridItem id="fulbito" thumbnail={thumbFulbito} title="Fulbito">
            WebApplication designed and developed by me and some Univerity's colleges.
          </WorkGridItem>
        </Section>
        <Section delay={0.3}>
          <WorkGridItem
            id="discordbot"
            thumbnail={thumbBot}
            title="DiscordBot"
          >
            Discord bot designed for some open servers. 
          </WorkGridItem>
        </Section>
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Works
export { getServerSideProps } from '../components/chakra'
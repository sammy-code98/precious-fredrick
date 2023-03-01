import Head from 'next/head'
import "@fontsource/inter"
import { Box, Text, Heading, HStack } from '@chakra-ui/react'
import { HomeLayout } from '@/layouts'
import { AboutSection, HeroSection, RecentWorkSection } from '@/components/sections'
import { Button } from '@/components/utility'

export default function Home() {
  return (
    <>
      <Head>
        <title>Precious Fredrick</title>
        <meta name="description" content="Hello, I am Fred a professional digital designer. I am interested in collaborating with you on your project." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box bg='primary' >
        <HomeLayout>
          <Box>
            <HeroSection />
            <AboutSection />
            <RecentWorkSection />

            <Box mt='4rem' py='4rem' as='section' id='contactMe'>
              <Text color='royalWhite' fontSize='xl'>CONTACT ME</Text>
              <Box display='flex' flexDirection='column' justifyContent='center' alignItems='center' py='4rem'>
                <Button title='HAVE A PROJECT IN MIND?' />
                <Box mt='2rem'>
                  <Heading fontWeight={700} size='4xl' color='royalWhite'>LET’S WORK</Heading>
                  <Heading fontWeight={700} size='4xl' textAlign='center' mt='1.5rem' color='royalWhite'>TOGETHER</Heading>
                </Box>
              </Box>
              <Box display='flex' justifyContent='center' alignItems='center' gap={{ base: '4', md: '8' }} flexWrap='wrap'>
                <Button title='EMAIL' />
                <Button title='INSTAGRAM' />
                <Button title='TWITTER' />
              </Box>
            </Box>
            <Box display='flex' justifyContent='space-between' alignItems='center' pb='2rem' mt={{ base: '1rem', md: '8rem' }} flexWrap='wrap'>
              <HStack>
                <Text color='royalWhite' textDecoration='underline'>BEHANCE </Text>
                <Text color='royalWhite' textDecoration='underline'>DRIBBLE</Text>
                <Text color='royalWhite' textDecoration='underline'>INSTAGRAM</Text>
                <Text color='royalWhite' textDecoration='underline'>LINKEDIN</Text>
              </HStack>
              <Box>
                <Text color='royalWhite'>04/04</Text>
              </Box>
              <Box>
                <Text color='royalGold'>BACK TO TOP</Text>
              </Box>
            </Box>
          </Box>
        </HomeLayout>
      </Box>
    </>
  )
}

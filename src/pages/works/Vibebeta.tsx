import React from 'react'
import { Box, HStack, Text, Link } from '@chakra-ui/react'
import { HomeLayout } from '@/layouts'
import { WorksCard } from '@/components/utility'
import Image from 'next/image'
import oldVibes from "public/oldVibe.svg"
import newVibes from "public/newVibe.svg"
import vibe from "public/vibe.svg"
import musicEverday from "public/musicEverday.svg"
import mobileMusic from "public/mobileMusic.svg"

export default function Vibebeta() {
    return (
        <Box bg='primary'>
            <HomeLayout>
                <Box mt='4rem' px='2rem'>
                    <Box display='flex' gap={6} color='royalWhite'>
                        <Link href="#">PREVIOUS PROJECT</Link>
                        <Link href="#">NEXT PROJECT</Link>
                    </Box>
                    <Box mt='2rem'>
                        <WorksCard
                            title={'VIBE BETA'}
                            description={'VIBE BETA is a cutting-edge music app that helps up-and-coming talent get discovered.'}
                            role={['UI DESIGN', 'UX DESIGN', 'REDESIGN']}
                            serviceType={['WEB DESIGN ', 'MOBILE DESIGN']} />
                    </Box>
                    <Box>
                        <Box display='flex' py='2rem' flexWrap='wrap'>
                            <Image src={oldVibes} alt={'old vibe image'} loading='lazy' />
                            <Image src={newVibes} alt={'new vibe image'} loading='lazy' />
                        </Box>

                        <Box mt={{ base: '1rem', md: '3rem' }} width={{ base: 'none', md: '500px' }}
                            ml={{ base: '0', md: '56rem' }}
                        >
                            <Text color='royalWhite'>PROJECT BRIEFING</Text>
                            <Text mb='0.5rem' color='royalWhite'>VIBE BETA is a music app designed to provide a platform for young
                                and aspiring musicians to get discovered. As a member of the design team, I was tasked with collaborating with a group of
                                innovative individuals to create a product that met the needs of our target users.</Text>
                            <Text color='royalWhite'>CLIENT: IDEAL SYNTAX </Text>
                            <Text color='royalWhite'>LOCATION: NIGERIA </Text>
                        </Box>
                    </Box>

                    <Box display='flex' py='2rem' flexWrap='wrap' mt='3rem'>
                        <Image src={vibe} alt='vibe' loading='lazy' />
                    </Box>

                    <Box mt={{ base: '1rem', md: '3rem' }} width={{ base: 'none', md: '500px' }} py='2rem'
                    >
                        <Text color='royalGold' fontSize='xl' fontWeight='bold'>GOAL</Text>
                        <Text color='royalWhite'>Vibes Beta aims to increase the visibility of local artists through a
                            user-friendly platform that offers features similar to Spotify.
                            The platform also provides interactive and cost-effective tools for emerging musicians to launch their careers.
                            By providing a platform to showcase their work and connect
                            with a wider audience, Vibes Beta supports and empowers the growth and success of local artists.
                        </Text>
                    </Box>
                    <Box py='2rem'>
                        <Image src={musicEverday} alt='music' loading='lazy' />
                    </Box>
                    <Box mt={{ base: '1rem', md: '2rem' }} width={{ base: 'none', md: '500px' }}
                        ml={{ base: '0', md: '56rem' }} py='2rem'
                    >
                        <Text color='royalGold' fontSize='xl' fontWeight='bold'>MY WORK PROCESS</Text>
                        <Text mb='0.5rem' color='royalWhite'>
                            My design process for Vibe Beta began with a thorough competitive analysis of top competitors in the industry.
                            This research allowed me to identify areas for improvement and ultimately inform my design solution. From there,
                            I proposed a rebranding of the app to enhance the overall user experience and provide the best outcome possible for the users.
                            The rebranding involved changes in visual identity, and the overall layout and navigation of the app.
                            This was the foundation for the new design that was to come, which was a combination of user research, testing, and iteration.
                        </Text>
                    </Box>

                    <Box py='2rem'>
                        <Text color='royalGold' fontSize='2xl' fontWeight='bold'>DESIGN SOLUTIONS</Text>
                        carousle come here

                        <Box mt={{ base: '1rem', md: '2rem' }} width={{ base: 'none', md: '500px' }}>
                            <Text color='royalWhite'>
                                The design solution for Vibe Beta was developed through competitive analysis and user persona research. This research was conducted by talking with artists and analyzing the problems of the biggest competitors in the industry, such as Soundcloud and Spotify.
                            </Text>
                            <Link href="https://excited-candytuft-c30.notion.site/Vibes-Beta-5af7f032a8184046aa11f34973bcd198" >
                                <Text as='span' color='royalGold'>
                                    View competitive analysis on Notion
                                </Text>
                            </Link>
                        </Box>
                    </Box>
                    <Box py='2rem'>
                        <Image src={mobileMusic} alt='mobileMusic' loading='lazy' />
                    </Box>

                    <Box>
                        <Box display='flex' justifyContent='space-between' alignItems='center' pb='2rem'
                            mt={{ base: '1rem', md: '8rem' }} flexWrap='wrap'>
                            <HStack>
                                <Text color='royalWhite' textDecoration='underline'>BEHANCE </Text>
                                <Text color='royalWhite' textDecoration='underline'>DRIBBLE</Text>
                                <Text color='royalWhite' textDecoration='underline'>LINKEDIN</Text>
                            </HStack>
                            <Box display='flex' gap={4} alignItems='center'>
                                <Text color='royalWhite'>PREVIOUS PROJECT </Text>
                                <Text color='royalWhite'>NEXT PROJECT </Text>
                            </Box>
                            <Box>
                                <Text color='royalGold'>BACK TO TOP</Text>
                            </Box>
                        </Box>
                    </Box>

                </Box>
            </HomeLayout>
        </Box>
    )
}

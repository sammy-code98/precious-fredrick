import React from 'react'
import { Box, Text } from '@chakra-ui/react'
import { HomeLayout } from '@/layouts'
import Link from 'next/link'
import { WorksCard } from '@/components/utility'
import Azuza from "public/azuza.svg"
import azuzaGraphics from "public/azuzaGraphics.svg"
import azuzaBg from "public/azuzaBg.svg"
import process1 from "public/process1.svg"
import process2 from "public/process2.svg"

import Image from 'next/image'


export default function AzuzaGaming() {
    return (
        <Box bg='secondaryGrey'>
            <HomeLayout>
                <Box mt='4rem' px='2rem'>
                    <Box display='flex' gap={6} color='black'>
                        <Link href="#">PREVIOUS PROJECT</Link>
                        <Link href="#">NEXT PROJECT</Link>
                    </Box>
                    <Box mt='2rem'>
                        <WorksCard
                            title={'ASUZA GAMING'}
                            description={'Asuza is an Esport Management platform that specializes in fostering the growth of gamers within and outside of Africa.'}
                            role={['UI DESIGN', 'UX DESIGN', 'CONCEPT']}
                            serviceType={['WEB DESIGN ', 'MOBILE DESIGN', 'BRANDING']} />
                    </Box>
                    <Box py='1rem'>
                        <Image src={Azuza} alt='azuza' />
                    </Box>

                    <Box mt={{ base: '1rem', md: '3rem' }} width={{ base: 'none', md: '500px' }}
                        ml={{ base: '0', md: '56rem' }}
                    >
                        <Text color='black'>PROJECT BRIEFING</Text>
                        <Text mb='0.5rem' color='black'>
                            I have been assigned to the ASUZA project and will be working alongside a team of developers, marketers, and designers to create a tournament platform for gamers.
                            My responsibilities will include collaborating with team members to ensure the successful completion of the project.
                        </Text>
                        <Text color='black'>CLIENT: ASUSZA MANAGEMENT</Text>
                        <Text color='black'>LOCATION: NIGERIA</Text>
                    </Box>

                    <Box py='4rem'>
                        <Image src={azuzaGraphics} alt='azuza' />
                    </Box>
                    <Box width={{ base: 'none', md: '500px' }} py='2rem'
                    >
                        <Text color='black' fontSize='xl' fontWeight='bold'>CHALLENGES</Text>
                        <Text color='black'>
                            One of the greatest challenges I faced while working on Asuza was designing a platform
                            that was seamless and intuitive for both gamers and tournament organizers to use.
                            Despite the innovative nature of Asuza, it was important to ensure that the design was both visually appealing and aligned with the brand's core values of community,
                            friendship, and healthy competition.
                        </Text>
                    </Box>
                    <Box py='4rem'>
                        <Image src={azuzaBg} alt='azuza' />
                    </Box>
                    <Box mt='1rem' width={{ base: 'none', md: '500px' }}
                        ml={{ base: '0', md: '56rem' }} py='2rem'
                    >
                        <Text color='black' fontSize='xl' fontWeight='bold'>GOAL</Text>
                        <Text mb='0.5rem' color='black'>
                            As a designer, my primary objectives for the Asuza platform were to create a unique
                            and user-friendly experience for finding tournaments and connecting with favorite gaming communities.
                            My goal was to drive user acquisition and position Asuza as a leader in the African esports management market. Through careful planning and attention to detail,
                            I worked to achieve these objectives and enhance the overall value of the platform for all users
                        </Text>
                    </Box>
                    <Box bgImage="url('public/ring.svg')"
                        bgPosition="center"
                        bgRepeat="no-repeat"
                        py='3rem'
                    >
                        <Box width={{ base: 'none', md: '500px' }} py='2rem'
                        >
                            <Text color='black' fontSize='xl' fontWeight='bold'>MY WORK PROCESS</Text>
                            <Text color='black'>
                                The design process for Asuza began with the creation of a mood board to establish the desired brand identity and user experience. I developed two themes for the site - one with a neon tech aesthetic and the other with an African community focus. After presenting these options to the Asuza team and receiving feedback, we ultimately decided that the neon tech theme best reflected the community we were building.
                                This decision was made through careful consideration and collaboration with the team.
                            </Text>
                        </Box>

                    </Box>
                    <Box py='1rem' mt='2rem' display='flex' alignItems='center' gap={2} flexWrap='wrap'>
                        <Image src={process1} alt='azuza' />
                        <Image src={process2} alt='azuza' />


                    </Box>
                </Box>

            </HomeLayout>

        </Box>
    )
}

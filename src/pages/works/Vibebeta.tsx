import React from 'react'
import { Box, Text } from '@chakra-ui/react'
import { HomeLayout } from '@/layouts'
import Link from 'next/link'
import { WorksCard } from '@/components/utility'
import Image from 'next/image'
import oldVibes from "public/oldVibe.svg"
import newVibes from "public/newVibe.svg"
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
                        <Box display='flex' py='2rem'>
                            <Image src={oldVibes} alt={'old vibe image'} />
                            <Image src={newVibes} alt={'new vibe image'} />
                        </Box>

                        <Box mt={{ base: '1rem', md: '3rem' }} width={{ base: 'none', md: '500px' }}
                            ml='56rem'
                        >
                            <Text color='royalWhite'>PROJECT BRIEFING</Text>
                            <Text mb='0.5rem' color='royalWhite'>VIBE BETA is a music app designed to provide a platform for young
                                and aspiring musicians to get discovered. As a member of the design team, I was tasked with collaborating with a group of
                                innovative individuals to create a product that met the needs of our target users.</Text>
                            <Text color='royalWhite'>CLIENT: IDEAL SYNTAX </Text>
                            <Text color='royalWhite'>LOCATION: NIGERIA </Text>

                        </Box>
                    </Box>


                </Box>
            </HomeLayout>
        </Box>
    )
}

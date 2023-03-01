import { Box, Heading, HStack, Text, Link } from '@chakra-ui/react'
import React from 'react'
import { Button } from '../utility'


export default function HeroSection() {
    return (
        <>
            <Box
                display='grid'
                gridTemplateColumns={{
                    base: "repeat(1,minmax(0,1fr))",
                    md: "repeat(2, minmax(0, 1fr))",
                }}
                justifyItems='center'
                gap={{ base: '2', md: '8' }}
                mt={{ base: '2rem', md: '8rem' }}
            >
                <Box >
                    <Heading color='royalWhite' size='4xl' noOfLines={2} lineHeight='6rem'>
                        Precious Ifeanyi   Fredrick
                    </Heading>
                </Box>
                <Box mt={{ base: '1rem', md: '10rem' }} width={{ base: 'none', md: '500px' }}>
                    <Text color='royalWhite' fontSize='3xl'>
                        Digital Designer currently based in Nigeria
                    </Text>
                    <Text color='royalWhite' mt='.5rem'>
                        Hello, I am Fred a professional digital designer. I am interested in collaborating with you on your project.
                    </Text>
                    <Box mt='2rem' display='flex' justifyContent={{ base: 'center', md: 'start' }}>
                        <Link href='/#aboutme'>
                        <Button title='SCROLL TO DISCOVER' icon='icon' />

                        </Link>
                    </Box>
                </Box>
            </Box>
            <Box display='flex' justifyContent='space-between' alignItems='center' mt={{ base: '1rem', md: '8rem' }} flexWrap='wrap'>
                <HStack>
                    <Text color='royalWhite' textDecoration='underline'>BEHANCE </Text>
                    <Text color='royalWhite' textDecoration='underline'>DRIBBLE</Text>
                    <Text color='royalWhite' textDecoration='underline'>INSTAGRAM</Text>
                    <Text color='royalWhite' textDecoration='underline'>LINKEDIN</Text>

                </HStack>
                <Box>
                    <Text color='royalWhite'>01/07</Text>
                </Box>
                <Box>
                    <Text color='royalWhite'>Ⓒ 2023</Text>
                </Box>

            </Box>
        </>

    )
}

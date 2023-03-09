import { Box, HStack, Text, Link } from '@chakra-ui/react'
import React from 'react'
import Star from "public/star.svg"
import Image from 'next/image'
const aboutCard = [
    {
        title: 'BRANDING',
        description: 'I have extensive experience in digital design and can establish a strong foundation for your brand through typography, color, and photography. This ensures consistent brand perception across all digital touchpoints. Let me help you establish a powerful brand presence with my expertise'
    },
    {
        title: 'WEB/MOBILE DESIGN',
        description: 'I am a digital designer skilled in creating impactful and visually appealing experiences. I design marketing websites, e-commerce sites, and apps that benefit users and set them apart from the competition. Let me help you elevate your brand and increase conversions with my skills'
    },
    {
        title: 'VISUAL DESIGN',
        description: 'As a visual designer specializing in creating cohesive, recognizable brand identities. My designs are accessible, user-friendly, and impactful in today\'s digital world.Let me help you make a lasting impression with my skills.'
    }
]
export default function AboutSection() {
    return (
        <Box mt='6rem' py='4rem' as='section' id='aboutme'>
            <Text color='royalWhite' fontSize='xl'>About</Text>
            <Box mt='2rem'
                display='grid'
                gridTemplateColumns={{
                    base: "repeat(1,minmax(0,1fr))",
                    md: "repeat(2, minmax(0, 1fr))",
                }}
                justifyItems='center'
                gap={{ base: '2', md: '8' }}
            >
                <Box>
                </Box>
                <Box mt={{ base: '0.5rem', md: '2rem' }} pos='relative' >
                    <Box
                        pos='absolute'
                        width='245px'
                        height="245px"
                        borderRadius='50%'
                        background='linear-gradient(91.26deg, rgba(232, 205, 79, 0.6) 28.98%, rgba(255, 255, 255, 0.6) 58.68%)'
                        filter='blur(142.917px)'
                        left={{ base: '5rem', md: '28rem' }}
                        top='-10rem'
                    ></Box>
                    <Box ml={{ base: '0', md: '-8rem' }} display={{ base: 'none', md: 'flex' }}>
                        <Image src={Star} alt='star' loading='lazy' />
                    </Box>
                    <Text color='royalWhite' fontSize='2xl' px={{ base: 'none', md: '2rem' }}>
                        I am excited about the opportunity to use my passion for digital design to contribute to the development and growth of innovative projects. Solving problems through creative and user-centered design is what really gets me energized and enthusiastic.
                    </Text>
                </Box>
            </Box>

            <Box mt='12rem' >
                <Box display='grid'
                    gridTemplateColumns={{
                        base: "repeat(1,minmax(0,1fr))",
                        md: "repeat(3, minmax(0, 1fr))",
                    }}
                    justifyItems='center'
                    gap={8}
                >
                    {aboutCard.map((card) => (
                        <Box key={card.title}>
                            <Text color='royalGold'>{card.title}</Text>
                            <Text color='royalWhite' mt='0.5rem'>
                                {card.description}
                            </Text>
                        </Box>

                    ))}

                </Box>

            </Box>

            <Box display={{ base: 'none', md: 'flex' }}
                justifyContent='space-between' alignItems='center' mt={{ base: '1rem', md: '8rem' }} flexWrap='wrap'>
                <HStack>
                    <Text color='royalWhite' textDecoration='underline'>BEHANCE </Text>
                    <Text color='royalWhite' textDecoration='underline'>DRIBBLE</Text>
                    <Text color='royalWhite' textDecoration='underline'>INSTAGRAM</Text>
                    <Text color='royalWhite' textDecoration='underline'>LINKEDIN</Text>

                </HStack>
                <Box>
                    <Text color='royalWhite'>02/04</Text>
                </Box>
                <Box>
                    <Link href='/#top'>
                    <Text color='royalWhite'>BACK TO TOP</Text>
                    </Link>
                </Box>

            </Box>
        </Box>
    )
}

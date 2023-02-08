import { Box, Text } from '@chakra-ui/react'
import React from 'react'
export default function AboutSection() {
    return (
        <Box mt='6rem' py='4rem'>
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
                    <Box
                        mt='2rem'
                        width='245px'
                        height="245px"
                        borderRadius='50%'
                        background='linear-gradient(91.26deg, rgba(232, 205, 79, 0.6) 28.98%, rgba(255, 255, 255, 0.6) 58.68%)'
                        filter='blur(142.917px)'
                    ></Box>
                </Box>
                <Box mt='2rem'>
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


                >
                    <Box>
                        <Text color='royalGold'>BRANDING</Text>
                        <Text color='royalWhite' mt='0.5rem'>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic eius laudantium fuga neque. Excepturi, quibusdam animi minus, sed esse itaque explicabo illo facilis quis earum molestias accusamus quam, temporibus voluptatum!
                        </Text>
                    </Box>
                </Box>

            </Box>
        </Box>
    )
}

import React from 'react'
import { Box, Text, Spacer, Heading, Divider } from '@chakra-ui/react'
import Button from './Button'


interface ProjectDetailProps {
    title: string,
    description: string,
    role: Array<string>,
    serviceType: Array<string>
}
export default function ProjectDetail({ title, description, role, serviceType }: ProjectDetailProps): JSX.Element {
    return (
        <>
            <Heading size={{ base: 'xl', md: '3xl' }} color='royalWhite'>{title}</Heading>
            <Box py='2rem'
                px={{ base: '0.5rem', md: '2rem' }}
                display='flex' justifyContent='space-between' alignItems='center' flexWrap='wrap'
            >
                <Box display='flex' justifyContent='space-around' gap={{ base: 3, md: 10 }} mt='2rem'>
                    <Box>
                        <Text color='royalGold'>TYPE</Text>
                        {serviceType.map((service) => (
                            <Text color='royalWhite' key={service}>{service}</Text>
                        ))}
                    </Box>
                    <Spacer />
                    <Box w={{ base: 'none', md: '400px' }} >
                        <Text color='royalGold'>DESCRIPTION</Text>
                        <Text color='royalWhite'>{description}</Text>
                    </Box>

                </Box>
                <Box mt={{ base: '2rem', md: 'none' }} >
                    <Text color='royalGold'  >ROLE</Text>
                    <Box mt='1rem'
                        display='grid' gridTemplateColumns='1fr 1fr 1fr'
                        justifyItems='space-around'
                        gap={1}

                    >
                        {role.map((pos) => (
                            <Button
                                title={pos}
                                key={pos} />
                        ))}
                    </Box>
                </Box>
            </Box>
            <Divider mt='2rem' mb='3rem' /></>
    )
}

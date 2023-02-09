import { Box, Text, Spacer, Heading, Divider } from '@chakra-ui/react'
import React from 'react'
import Button from './Button'

interface WorksCardProps {
    title: string,
    description: string,
    role: Array<string>,
    serviceType: Array<string>
}

export default function WorksCard({ title, description, role, serviceType }: WorksCardProps): JSX.Element {
    return (
        <>
            <Heading size='3xl' color='royalWhite'>{title}</Heading>
            <Box py='2rem' display='flex' justifyContent='space-between' alignItems='center' flexWrap='wrap'>
                <Box display='flex' flexWrap='wrap' justifyContent='space-around' gap={10} mt='2rem'>
                    <Box>
                        <Text color='royalWhite'>TYPE</Text>
                        {serviceType.map((service) => (
                            <Text color='royalWhite'>{service}</Text>
                        ))}
                    </Box>
                    <Spacer />
                    <Box w={{ base: 'none', md: '400px' }} >
                        <Text color='royalWhite'>DESCRIPTION</Text>
                        <Text color='royalWhite' >{description}</Text>
                    </Box>

                </Box>
                <Box pr='8rem'>
                    <Text color='royalWhite' >ROLE</Text>
                    <Box mt='1rem' display='flex' justifyContent='center' flexWrap='wrap' alignItems='center' gap={4}>
                        {role.map((pos) => (
                            <Button title={pos} />
                        ))}
                    </Box>
                </Box>
            </Box>
            <Divider mt='2rem' mb='3rem' />

        </>
    )
}

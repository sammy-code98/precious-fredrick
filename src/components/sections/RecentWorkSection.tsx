import { Box, Text, Divider, Heading } from '@chakra-ui/react'
import React from 'react'
import { Button, WorksCard } from '../utility';

const RecentWork = [
    {
        title: 'ASUZA GAMING',
        description: 'Asuza is an Esport Management platform that specializes in fostering the growth of gamers within and outside of Africa.',
        role: ['UI DESIGN', 'UX DESIGN', 'CONCEPT'],
        serviceType: ['CASE STUDY', 'MOBILE DESIGN', 'BRANDING']
    },
    {
        title: 'VIBE BETA',
        description: 'VIBE BETA is a cutting-edge music app that helps up-and-coming talent get discovered.',
        role: ['UI DESIGN', 'UX DESIGN', 'REDESIGN'],
        serviceType: ['WEB DESIGN ', 'MOBILE DESIGN']
    },
    {
        title: 'WHATSAPP STATUS',
        description: 'AN IMPROVEMENT TO THE WHATSAPP STATUS UI AND A BRAND NEW FEATURE ROLE OUT',
        role: ['UI DESIGN', 'UX DESIGN', 'REDESIGN'],
        serviceType: ['CASE STUDY ', 'MOBILE DESIGN']
    },
    {
        title: 'SLEEPY APP',
        description: 'Sleepy is a product designed to improve the quality of life for individuals with sleep difficulties. ',
        role: ['UI DESIGN', 'UX DESIGN'],
        serviceType: ['CASE STUDY', 'MOBILE DESIGN']
    }
]

export default function RecentWorkSection() {
    return (
        <Box mt='4rem' py='4rem'>
            <Text color='royalWhite' fontSize='xl'>RECENT WORKS</Text>
            <Box mt='4rem'>
                <Divider />
                <Box mt='3rem'>
                    {RecentWork.map((work) => (
                        <WorksCard description={work.description} role={work.role} serviceType={work.serviceType} title={work.title} />
                    ))}
                </Box>
            </Box>
            <Box display='flex' justifyContent='center'>
                <Button title='MORE OF MY WORKS' />
            </Box>
        </Box >
    )
}

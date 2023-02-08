import { NavBar } from '@/components/utility'
import { Box } from '@chakra-ui/react'
import React from 'react'

interface HomeProps {
    children: any
}
export default function HomeLayout({ children }: HomeProps): JSX.Element {
    return (
        <>
            <NavBar />
            <Box>

                {children}
            </Box>
        </>

    )
}

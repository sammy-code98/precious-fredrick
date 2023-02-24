import React from 'react'
import { Box } from '@chakra-ui/react'
import { HomeLayout } from '@/layouts'
import Link from 'next/link'
import { WorksCard } from '@/components/utility'
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

                </Box>

            </HomeLayout>

        </Box>
    )
}

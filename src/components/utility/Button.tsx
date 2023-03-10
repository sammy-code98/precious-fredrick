import React from 'react'
import { Box } from '@chakra-ui/react'
import { ReactNode } from 'react';
import { ArrowDownIcon } from '@chakra-ui/icons'
import { useRouter } from 'next/router'


interface BtnProps {
    title: string,
}
export default function Button({ title }: BtnProps): JSX.Element {
    const router = useRouter()
    const href = "/works/AzuzaGaming"
    return (
        <Box as='button'
            border='1px'
            borderRadius='2rem'
            textColor={router.pathname === href ? 'black' : 'royalWhite'}
            borderColor={router.pathname === href ? 'black' : 'royalWhite'}
            py={{ base: '0.3rem', md: '.5rem' }}
            px={{ base: '0.27rem', md: '1rem' }}
        >
            {title}

        </Box>
    )
}

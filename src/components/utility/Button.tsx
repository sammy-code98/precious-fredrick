import React from 'react'
import { Box } from '@chakra-ui/react'
import { ReactNode } from 'react';
import { ArrowDownIcon } from '@chakra-ui/icons'


interface BtnProps {
    title: string,
}
export default function Button({ title }: BtnProps): JSX.Element {
    return (
        <Box as='button'
            border='1px'
            borderRadius='2rem'
            textColor='royalWhite'
            borderColor='royalWhite'
            py={{ base: '0.3rem', md: '.5rem' }}
            px={{ base: '0.27rem', md: '1rem' }}

        >
            {title}

        </Box>
    )
}

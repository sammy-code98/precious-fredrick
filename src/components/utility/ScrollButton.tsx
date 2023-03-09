import { Box } from '@chakra-ui/react'
import React from 'react'
import { ReactNode } from 'react';
import { ArrowDownIcon } from '@chakra-ui/icons'


interface ScrollBtnProps {
    title: string,
    icon: ReactNode
}
export default function ScrollButton({ title, icon }: ScrollBtnProps): JSX.Element {
    return (
        <Box as='button'
            border='1px'
            borderRadius='2rem'
            textColor='royalWhite'
            borderColor='royalWhite'
            py={{ base: '0.5rem', md: '.5rem' }}
            px={{ base: '1rem', md: '1rem' }}

        >
            {title}
            <Box as='span'
                ml='1rem'
            >
                {icon ? <ArrowDownIcon /> : null}
            </Box>
        </Box>)
}

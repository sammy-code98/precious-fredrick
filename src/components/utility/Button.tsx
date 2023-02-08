import React from 'react'
import { Box } from '@chakra-ui/react'
import { ReactNode } from 'react';
import { ArrowDownIcon } from '@chakra-ui/icons'


interface BtnProps {
    title: string,
    icon?: ReactNode
}
export default function Button({ title, icon }: BtnProps): JSX.Element {
    return (
        <Box as='button' border='1px' borderRadius='2rem' textColor='royalWhite' borderColor='royalWhite' py='.5rem' px='2rem'>
            {title}
            <Box as='span' ml='1rem'>
                {icon ? <ArrowDownIcon /> : null}
            </Box>
        </Box>
    )
}

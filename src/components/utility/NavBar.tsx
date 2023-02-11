import { ReactNode } from 'react';
import {
    Box,
    Flex,
    HStack,
    Link,
    IconButton,
    useDisclosure,
    useColorModeValue,
    Stack,
} from '@chakra-ui/react';
import Image from "next/image"
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import Logo from "public/logo.svg"

const Links = ['Work', 'About', 'Contact'];

const NavLink = ({ children }: { children: ReactNode }) => (
    <Link
        px={2}
        py={1}
        rounded={'md'}
        color='royalWhite'
        fontWeight={500}
        // _hover={{
        //     textDecoration: 'none',
        //     bg: useColorModeValue('gray.200', 'gray.700'),
        // }}
        href={'#'}>
        {children}
    </Link>
);

export default function NavBar() {
    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <>
            <Box bg={useColorModeValue('primary', 'primary')} px={{ base: '1rem', md: '4rem' }}>
                <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
                    <IconButton
                        variant='outline'
                        color='royalGold'
                        size={'md'}
                        icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
                        aria-label={'Open Menu'}
                        display={{ md: 'none' }}
                        onClick={isOpen ? onClose : onOpen}
                        _hover={{
                            bg: 'none'
                        }}
                    />
                    <HStack spacing={8} alignItems={'center'}>
                        <Box px={{ base: 'none', md: '2rem' }}>
                            <Image src={Logo} alt='logo' />
                        </Box>

                    </HStack>
                    <Flex alignItems={'center'}>
                        <HStack
                            as={'nav'}
                            spacing={4}
                            display={{ base: 'none', md: 'flex' }}>
                            {Links.map((link) => (
                                <NavLink key={link}>{link}</NavLink>
                            ))}
                        </HStack>
                    </Flex>
                </Flex>

                {isOpen ? (
                    <Box pb={4} display={{ md: 'none' }}>
                        <Stack as={'nav'} spacing={4}>
                            {Links.map((link) => (
                                <NavLink key={link}>{link}</NavLink>
                            ))}
                        </Stack>
                    </Box>
                ) : null}
            </Box>
        </>
    );
}
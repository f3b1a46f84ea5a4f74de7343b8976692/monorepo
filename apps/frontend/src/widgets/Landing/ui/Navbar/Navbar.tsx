import {
    Navbar as Nav,
    NavbarContent,
    NavbarItem,
    Link,
    Button,
} from '@heroui/react';
import { motion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';
import Logo from '@local/assets/icons/LandingLogo.svg';
export const Navbar = () => {
    return (
        <Nav
            position="static"
            maxWidth="2xl"
            className="bg-none bg-inherit py-4 backdrop-blur-none backdrop-brightness-100 backdrop-saturate-100 max-w-screen-2xl "
        >
            <NavbarContent justify="start">
                <NavbarItem className="relative">
                    <motion.div
                        className="absolute"
                        initial={{ top: -100, left: -40 }}
                        animate={{ top: -10, left: -40 }}
                        transition={{ duration: 0.6 }}
                    >
                        <Logo />
                    </motion.div>
                </NavbarItem>
            </NavbarContent>
            <NavbarContent justify="end">
                <NavbarItem className="relative">
                    <motion.div
                        className="absolute"
                        initial={{ top: -100, right: 0 }}
                        animate={{ top: -10 }}
                        transition={{ duration: 0.6 }}
                    >
                        <Button
                            endContent={
                                <motion.div
                                    initial={{ transform: 'rotate(180deg)' }}
                                    animate={{ transform: 'rotate(-45deg)' }}
                                    transition={{ duration: 0.6 }}
                                >
                                    <FaArrowRight />
                                </motion.div>
                            }
                            as={Link}
                            className="bg-white"
                            href="#"
                            variant="flat"
                        >
                            Sign Up
                        </Button>
                    </motion.div>
                </NavbarItem>
            </NavbarContent>
        </Nav>
    );
};

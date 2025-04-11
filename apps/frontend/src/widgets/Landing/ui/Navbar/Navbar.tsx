import {
    Navbar as Nav,
    NavbarContent,
    NavbarItem,
    Link,
    Button,
} from '@heroui/react';
import { motion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';

export const Navbar = () => {
    return (
        <Nav shouldHideOnScroll>
            <NavbarContent justify="end">
                <NavbarItem className="relative">
                    <motion.div
                        className="absolute"
                        initial={{ top: -100, right: 20 }}
                        animate={{ top: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <Button
                            endContent={<FaArrowRight />}
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

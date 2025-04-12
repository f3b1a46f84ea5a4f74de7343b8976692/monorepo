import {
    Navbar as Nav,
    NavbarContent,
    NavbarItem,
    Link,
    Button,
    ButtonGroup,
    Dropdown,
    DropdownItem,
    DropdownMenu,
    DropdownTrigger,
} from '@heroui/react';
import { motion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';
import Logo from '@local/assets/icons/light.svg';
import { useTranslation } from 'react-i18next';

export const Navbar = () => {
    const { i18n, t } = useTranslation();

    const changeLanguage = (lng: 'en' | 'ar') => {
        i18n.changeLanguage(lng);
    };

    const currentLang = i18n.language === 'ar' ? 'Ar' : 'En';

    return (
        <Nav
            position="static"
            maxWidth="2xl"
            className="bg-none bg-inherit py-4 backdrop-blur-none backdrop-brightness-100 backdrop-saturate-100 max-w-screen-2xl "
        >
            <NavbarContent justify="start">
                <NavbarItem className="relative">
                    <motion.div
                        initial={{ y: -100 }}
                        animate={{ y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <Button
                            startContent={<Logo />}
                            variant="light"
                            size="lg"
                            className="rounded-full text-white bg-[#f0f0f033] backdrop-blur-2xl"
                        >
                            {t('navbar.invest')}
                        </Button>
                    </motion.div>
                </NavbarItem>
            </NavbarContent>

            <NavbarContent justify="center">
                <NavbarItem className="relative">
                    <motion.div
                        initial={{ y: -100 }}
                        animate={{ y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <ButtonGroup className="rounded-[100px]">
                            <Button
                                variant="light"
                                size="lg"
                                className="text-white bg-[#f0f0f01a] backdrop-blur-sm"
                            >
                                {t('navbar.menu.home')}
                            </Button>
                            <Button
                                variant="light"
                                size="lg"
                                className="text-white bg-[#f0f0f01a] backdrop-blur-sm"
                            >
                                {t('navbar.menu.about')}
                            </Button>
                            <Button
                                variant="light"
                                size="lg"
                                className="text-white bg-[#f0f0f01a] backdrop-blur-sm"
                            >
                                {t('navbar.menu.recreations')}
                            </Button>
                            <Button
                                variant="light"
                                size="lg"
                                className="text-white bg-[#f0f0f01a] backdrop-blur-sm"
                            >
                                {t('navbar.menu.partners')}
                            </Button>
                        </ButtonGroup>
                    </motion.div>
                </NavbarItem>
            </NavbarContent>

            <NavbarContent justify="end">
                <NavbarItem className="relative">
                    <motion.div
                        initial={{ y: -100 }}
                        animate={{ y: -10 }}
                        transition={{ duration: 0.6 }}
                        className="flex gap-4 items-center"
                    >
                        <Dropdown>
                            <DropdownTrigger>
                                <p
                                    className="bg-[#f0f0f01a] cursor-pointer backdrop-blur-md text-white
                                    rounded-[50%] p-2 px-3"
                                >
                                    {currentLang}
                                </p>
                            </DropdownTrigger>
                            <DropdownMenu
                                aria-label="Language switcher"
                                variant="light"
                            >
                                <DropdownItem
                                    onClick={() => changeLanguage('en')}
                                    key="En"
                                >
                                    En
                                </DropdownItem>
                                <DropdownItem
                                    onClick={() => changeLanguage('ar')}
                                    key="Ar"
                                >
                                    Ar
                                </DropdownItem>
                            </DropdownMenu>
                        </Dropdown>

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
                            {t('navbar.signUp')}
                        </Button>
                    </motion.div>
                </NavbarItem>
            </NavbarContent>
        </Nav>
    );
};

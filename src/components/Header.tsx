import { Flex, Heading, IconButton, Link } from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import React, {  } from "react";
import { ColorModeSwitcher } from "../ColorModeSwitcher";
import { Link as ReachLink } from 'react-router-dom';

type HeaderProps = {
    openDrawer: () => void;
    closeDrawer: () => void
    isDrawerOpen: boolean;
}

export const Header = ({openDrawer, closeDrawer, isDrawerOpen}: HeaderProps) => {
  return (
    <Flex as="nav" alignItems="center" justifyContent="center">
      <IconButton
        size="lg"
        aria-label="menu"
        icon={<HamburgerIcon boxSize={8}/>}
        variant="ghost"
        color="current"
        marginLeft="2"
        position="absolute"
        top="0"
        left="0"
        onClick={isDrawerOpen ? () => closeDrawer() : () => openDrawer()}
      />
      <Heading margin="2"><Link as={ReachLink} to={""}>Advent of code</Link></Heading>
      <ColorModeSwitcher position="absolute" top="0" right="0" />
    </Flex>
  );
};

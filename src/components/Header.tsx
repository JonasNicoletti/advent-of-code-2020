import { Flex, Heading, IconButton, Link } from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import React, {  } from "react";
import { ColorModeSwitcher } from "../ColorModeSwitcher";

type HeaderProps = {
    openDrawer: () => void;
    closeDrawer: () => void
    isDrawerOpen: boolean;
    goHome: () => void
}

export const Header = ({openDrawer, closeDrawer, isDrawerOpen, goHome}: HeaderProps) => {
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
      <Heading margin="2"><Link onClick={() => goHome()}>Advent of code</Link></Heading>
      <ColorModeSwitcher position="absolute" top="0" right="0" />
    </Flex>
  );
};

import {
  DrawerOverlay,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  Accordion,
  Drawer as ChakraDrawer,
} from "@chakra-ui/react";
import React from "react";
import YearItem, { YearItemProps } from "../ui/YearItem";
import { TaskProps } from "./Task";

type DrawerProps = {
  isOpen: boolean;
  onClose: () => void;
  years: YearItemProps[];
  changeTask: React.Dispatch<React.SetStateAction<TaskProps|null>>;
};
const Drawer = ({ isOpen, onClose, years, changeTask }: DrawerProps) => (
  <ChakraDrawer isOpen={isOpen} placement="left" onClose={() => onClose()}>
    <DrawerOverlay>
      <DrawerContent>
        <DrawerHeader>Years</DrawerHeader>
        <DrawerBody>
          <Accordion allowToggle>
            {years.map((year, idx) => (
              <YearItem key={idx} {...year} />
            ))}
          </Accordion>
        </DrawerBody>
      </DrawerContent>
    </DrawerOverlay>
  </ChakraDrawer>
);

export default Drawer;

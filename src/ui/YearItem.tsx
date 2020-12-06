import { AccordionItem, AccordionButton, Box, AccordionIcon, AccordionPanel, List } from "@chakra-ui/react";
import React from "react";
import { TaskProps } from "../components/Task";
import TaskItem from "./TaskItem";

export type YearItemProps = {
    title: string;
    tasks: Array<TaskProps>
}
const YearItem = ({title, tasks}: YearItemProps) => {
  return (
    <AccordionItem>
      <AccordionButton>
        <Box flex="1" textAlign="left">
          {title}
        </Box>
        <AccordionIcon />
      </AccordionButton>
      <AccordionPanel pb={2}>
        <List>
            {
                tasks.map((task, idx) => <TaskItem key={idx} {...task}/>)
            }
        </List>
      </AccordionPanel>
    </AccordionItem>
  );
};

export default YearItem;

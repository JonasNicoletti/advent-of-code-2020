import { AccordionItem, AccordionButton, Box, AccordionIcon, AccordionPanel, List } from "@chakra-ui/react";
import React from "react";
import { TaskProps } from "../components/Task";
import TaskItem from "./TaskItem";

export type YearItemProps = {
    id: string;
    tasks: Array<TaskProps>
}
const YearItem = ({id, tasks}: YearItemProps) => {
  return (
    <AccordionItem>
      <AccordionButton>
        <Box flex="1" textAlign="left">
          {id}
        </Box>
        <AccordionIcon />
      </AccordionButton>
      <AccordionPanel pb={2}>
        <List>
            {
                tasks.map((task, idx) => <TaskItem key={idx} year={id} {...task}/>)
            }
        </List>
      </AccordionPanel>
    </AccordionItem>
  );
};

export default YearItem;

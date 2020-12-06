import { Box, Flex, Link, ListItem } from "@chakra-ui/react";
import React from "react";
import TaskStar from "./TaskStar";

export type TaskItemProps = {
  changeTask: (id: string) => void;
  id: string;
  title: String;
  first?: boolean;
  second?: boolean;
};
const TaskItem = ({ changeTask, id,  title, first, second }: TaskItemProps) => {
  return (
    <ListItem marginBottom={1}>
      <Flex justifyContent="flex-start">
        <Box><Link onClick={() => changeTask(id)}>{title}</Link></Box>
        <Box marginLeft="auto">
          <TaskStar first done={first} />
          <TaskStar done={second} />
        </Box>
      </Flex>
    </ListItem>
  );
};

export default TaskItem;

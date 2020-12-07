import { Box, Flex, Link, ListItem } from "@chakra-ui/react";
import React from "react";
import TaskStar from "./TaskStar";
import { Link as ReachLink } from 'react-router-dom';

export type TaskItemProps = {
  id: string;
  title: String;
  year?: string;
  first?: boolean;
  second?: boolean;
};
const TaskItem = ({ id, title, first, second, year }: TaskItemProps) => {
  return (
    <ListItem marginBottom={1}>
      <Flex justifyContent="flex-start">
        <Box>
          <Link as={ReachLink} to={`/${year}/${id}`}>{title}</Link>
        </Box>
        <Box marginLeft="auto">
          <TaskStar first done={first} />
          <TaskStar done={second} />
        </Box>
      </Flex>
    </ListItem>
  );
};

export default TaskItem;

import { ListIcon } from "@chakra-ui/react";
import React from "react";
import { MdStar } from "react-icons/md";

type TaskStarProps = {
  done?: boolean;
  first?: boolean;
};
const TaskStar = ({ done, first }: TaskStarProps) => (
  <ListIcon
    as={MdStar}
    marginLeft={first ? 1 : 0}
    marginRight={0}
    marginBottom="0.15rem"
    color={done ? "yellow.500" : "inhirit"}
  />
);

export default TaskStar;

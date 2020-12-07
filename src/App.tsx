import * as React from "react";
import {
  ChakraProvider,
  Box,
  Grid,
  useDisclosure,
  extendTheme,
} from "@chakra-ui/react";
import { Header } from "./components/Header";
import Drawer from "./components/Drawer";
import { YearItemProps } from "./ui/YearItem";
import Home from "./components/Home";
import { useState } from "react";
import Task, { TaskProps } from "./components/Task";
import reportRepair from "./solutions/2020/1_report_repair";
import passwordPhilosophy from "./solutions/2020/2_password_philosophy";
import tobogganTrajectory from "./solutions/2020/3_toboggan_trajectory";
import passportProcessing from "./solutions/2020/4_passport_processing";
import binaryBoarding from "./solutions/2020/5_binary_boarding";
import customCustoms from "./solutions/2020/6_custom_customs";
import handyHaversacks from "./solutions/2020/7_handy_haversacks";

export const App = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedTask, setSelectedTask] = useState<TaskProps | null>(null);

  const changeSelectedTask = (id: string): void => {
    for (const year of years) {
      for (const task of year.tasks) {
        if (task.id.startsWith(id)) {
          setSelectedTask(task);
          break;
        }
      }
    }
  };
  const years: YearItemProps[] = [
    {
      title: "2020",
      tasks: [
        {
          id: "2020_1",
          title: "Day 1: Report Repair",
          first: true,
          second: true,
          descriptionUri: "https://adventofcode.com/2020/day/1",
          changeTask: changeSelectedTask,
          solutionUri:
            "https://raw.githubusercontent.com/JonasNicoletti/advent-of-code/main/src/solutions/2020/1_report_repair/index.ts",
          inputUri: "./data/report_repair.txt",
          solutionFn: reportRepair,
        },
        {
          id: "2020_2",
          title: "Day 2: Password Philosophy",
          first: true,
          second: true,
          descriptionUri: "https://adventofcode.com/2020/day/2",
          solutionUri:
            "https://raw.githubusercontent.com/JonasNicoletti/advent-of-code/main/src/solutions/2020/2_password_philosophy/index.ts",
          inputUri: "./data/password_philosophy.txt",
          changeTask: changeSelectedTask,
          solutionFn: passwordPhilosophy,
        },
        {
          id: "2020_3",
          title: "Day 3: Toboggan Trajectory",
          first: true,
          second: true,
          descriptionUri: "https://adventofcode.com/2020/day/3",
          changeTask: changeSelectedTask,
          inputUri: "./data/toboggan_trajectory.txt",
          solutionUri:
            "https://raw.githubusercontent.com/JonasNicoletti/advent-of-code/main/src/solutions/2020/3_toboggan_trajectory/index.ts",
          solutionFn: tobogganTrajectory,
        },
        {
          id: "2020_4",
          title: "Day 4: Passport Processing",
          first: true,
          second: true,
          descriptionUri: "https://adventofcode.com/2020/day/4",
          inputUri: "./data/passport_processing.txt",
          solutionUri:
            "https://raw.githubusercontent.com/JonasNicoletti/advent-of-code/main/src/solutions/2020/4_passport_processing/index.ts",
          solutionFn: passportProcessing,
          changeTask: changeSelectedTask,
        },
        {
          id: "2020_5",
          title: "Day 5: Binary Boarding",
          first: true,
          second: true,
          descriptionUri: "https://adventofcode.com/2020/day/5",
          inputUri: "./data/binary_boarding.txt",
          solutionUri:
            "https://raw.githubusercontent.com/JonasNicoletti/advent-of-code/main/src/solutions/2020/5_binary_boarding/index.ts",
          solutionFn: binaryBoarding,
          changeTask: changeSelectedTask,
        },
        {
          id: "2020_6",
          title: "Day 6: Custom Customs",
          first: true,
          second: true,
          descriptionUri: "https://adventofcode.com/2020/day/6",
          inputUri: "./data/custom_customs.txt",
          solutionUri:
            "https://raw.githubusercontent.com/JonasNicoletti/advent-of-code/main/src/solutions/2020/6_custom_customs/index.ts",
          solutionFn: customCustoms,
          changeTask: changeSelectedTask,
        },
        {
          id: "2020_7",
          title: "Day 7: Handy Haversacks",
          first: true,
          second: true,
          descriptionUri: "https://adventofcode.com/2020/day/7",
          inputUri: "./data/handy_haversacks.txt",
          solutionUri:
            "https://raw.githubusercontent.com/JonasNicoletti/advent-of-code/main/src/solutions/2020/7_handy_haversacks/index.ts",
          solutionFn: handyHaversacks,
          changeTask: changeSelectedTask,
        },
      ],
    },
  ];

  const config = {
    useSystemColorMode: false,
    initialColorMode: "dark",
  }

  const customTheme = extendTheme({ config })
  return (
    <ChakraProvider theme={customTheme}>
      <Box textAlign="center" fontSize="xl">
        <Header
          openDrawer={onOpen}
          closeDrawer={onClose}
          isDrawerOpen={isOpen}
          goHome={() => setSelectedTask(null)}
        />
        <Drawer
          isOpen={isOpen}
          onClose={onClose}
          years={years}
          changeTask={setSelectedTask}
        />
        <Grid minH="100vh" p={3}>
          {selectedTask ? <Task {...selectedTask} /> : <Home />}
        </Grid>
      </Box>
    </ChakraProvider>
  );
};

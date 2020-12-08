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
import Home from "./components/Home";
import Task from "./components/Task";
import SolutionContext from "./solutionContext";
import solutions from "./solutions";
import { Route, HashRouter as Router } from "react-router-dom";

export const App = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const config = {
    useSystemColorMode: false,
    initialColorMode: "dark",
  };

  const customTheme = extendTheme({ config });

  return (
    <ChakraProvider theme={customTheme}>
      <SolutionContext.Provider value={solutions}>
        <Router >
          <Box textAlign="center" fontSize="xl">
            <Header
              openDrawer={onOpen}
              closeDrawer={onClose}
              isDrawerOpen={isOpen}
            />
            <Drawer
              isOpen={isOpen}
              onClose={onClose}
              years={solutions}
            />
            <Grid minH="100vh" p={3}>
              <Route path="/:year/:day" children={<Task />} />
              <Route path="/" exact>
                <Home />
              </Route>
            </Grid>
          </Box>
        </Router>
      </SolutionContext.Provider>
    </ChakraProvider>
  );
};

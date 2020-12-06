import { Container, Link } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
import React from "react";

const Home = () => (
  <Container centerContent padding={20} >
    <Text fontSize="3xl" as="cite">
      <Link color="teal.500" href="https://adventofcode.com/" isExternal>
        Advent of Code&nbsp;
      </Link>
      is an Advent calendar of small programming puzzles for a variety of skill
      sets and skill levels that can be solved in any programming language you
      like.
    </Text>
    <Text marginTop={4} fontSize="3xl">
      This site aims to collect my solutions (when I find them
      😉) for the different exercises.
    </Text>
  </Container>
);
export default Home;

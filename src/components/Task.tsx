import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Button,
  Flex,
  Text,
  Heading,
  Link,
  HStack,
} from "@chakra-ui/react";
import React, { useContext, useEffect, useState } from "react";
import { TaskItemProps } from "../ui/TaskItem";
import { getFileAsText, getTask } from "../utils";
import { Light as SyntaxHighlighter } from "react-syntax-highlighter";
import { darcula } from 'react-syntax-highlighter/dist/esm/styles/hljs'
import js from 'react-syntax-highlighter/dist/esm/languages/hljs/javascript'
import { ArrowForwardIcon, ExternalLinkIcon } from "@chakra-ui/icons";
import { useParams } from "react-router-dom";
import SolutionContext from "../solutionContext";

interface ParamTypes {
  year: string
  day: string
}

export type TaskProps = TaskItemProps & {
  descriptionUri?: string;
  solutionUri: string;
  inputUri: string;
  solutionFn?: Function;
};
const Task = () => {
  const { year, day } = useParams<ParamTypes>();
  const years = useContext(SolutionContext);
  
  const task = getTask(
    year,
    day,
    years
  );
  const [code, setCode] = useState("");
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [solution1, setSolution1] = useState("0");
  const [solution2, setSolution2] = useState("0");
  let solutionUri = "";
  let inputUri = "";

  SyntaxHighlighter.registerLanguage('javascript', js);

  useEffect(() => {
    const loadData = async () => {
      if (solutionUri) {
        const codeAsText = await getFileAsText(solutionUri);
        setCode(codeAsText);
      }
      if (inputUri) {
        const inputAsText = await getFileAsText(inputUri, true);
        setInput(inputAsText);
      }
    };

    setSolution1("0");
    setSolution2("0");
    loadData();
  }, [year, day, inputUri, solutionUri]);


  if (task === undefined) {
    return <div> not found </div>
  }
  const { title, descriptionUri, solutionUri: tempSolutionUri, inputUri: tempInputUri, solutionFn } = task;
  solutionUri = tempSolutionUri;
  inputUri = tempInputUri;

  
  const calculateSolution = async () => {
    if (solutionFn) {
      setIsLoading(true);
      const sol1 = await solutionFn(true, inputUri);
      const sol2 = await solutionFn(false, inputUri);
      setSolution1(sol1);
      setSolution2(sol2);
      setIsLoading(false);
    }
  };
  return (
    <Flex direction="column" padding={5} textAlign="left">
      <Heading as="h5" marginBottom={5}>
        {title}
        <Link href={descriptionUri} isExternal padding={3}>
          <ExternalLinkIcon boxSize={5} marginBottom={5} />
        </Link>{" "}
      </Heading>
      <HStack spacing="24px" padding={5} paddingLeft={0}>
        <Button
          colorScheme="teal"
          variant="outline"
          isLoading={isLoading}
          loadingText="Calculating"
          rightIcon={<ArrowForwardIcon />}
          onClick={() => calculateSolution()}
        >
          try out
        </Button>
        <Text as="samp">Part one: </Text>
        <Text as="code">{solution1}</Text>
        <Text as="samp">Part two: </Text>
        <Text as="code">{solution2}</Text>
      </HStack>
      <Accordion allowToggle>
        <AccordionItem>
          <AccordionButton>
            <Box flex="1" textAlign="left">
              Code
            </Box>
            <AccordionIcon />
          </AccordionButton>
          <AccordionPanel textAlign="left" pb={4}>
            <SyntaxHighlighter
              language="javascript"
              wrapLongLines
              showLineNumbers
              style={darcula}
            >
              {code}
            </SyntaxHighlighter>
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem>
          <AccordionButton>
            <Box flex="1" textAlign="left">
              Input
            </Box>
            <AccordionIcon />
          </AccordionButton>
          <AccordionPanel textAlign="left" pb={4}>
            <SyntaxHighlighter language="text" showLineNumbers style={darcula}>
              {input}
            </SyntaxHighlighter>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </Flex>
  );
};

export default Task;

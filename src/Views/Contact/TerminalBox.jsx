import { Box, Flex, Text, useColorModeValue } from "@chakra-ui/react";
import { ReactTerminal } from "react-terminal";
import "./terminal.css";

const TerminalBox = () => {
  const themeBgColor = useColorModeValue("white", "#1c1b23");
  const themeToolBarColor = useColorModeValue("#1c1b23", "white");
  const welcomeMessage = (
    <>
      <p>Welcome to my website! Get started by typing `help` command below</p>
      <br />
    </>
  );
  const commands = {
    help: (
      <>
        <p>Available commands:</p>
        <p className="text-white">
          <span className="text-bgSecondary">whoami:</span> Tells you who you
          are
        </p>
      </>
    ),
    whoami: "jackharper",
    cd: (directory) => `changed path to ${directory}`,
  };

  return (
    <div className="w-[80%] mx-auto h-[500px]">
      <Flex gap={2} alignItems="center">
        <Box width="80px" height="5px" className="bg-bgPrimary"></Box>
        <Text
          className="text-scroll-reveal"
          fontSize={{ base: "xl", sm: "2xl", lg: "3xl" }}
        >
          How Can I Help You?
        </Text>
      </Flex>
      <span className="scroll-reveal">
        <ReactTerminal
          commands={commands}
          themes={{
            "my-custom-theme": {
              themeBGColor: themeBgColor,
              themeToolbarColor: themeToolBarColor,
              themeColor: "#8fcb9b",
              themePromptColor: themeToolBarColor,
            },
          }}
          theme="my-custom-theme"
          welcomeMessage={welcomeMessage}
          prompt="$ haseebirfan-dev >> "
        />
      </span>
    </div>
  );
};

export default TerminalBox;

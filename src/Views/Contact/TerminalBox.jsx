import { Box, Flex, Text, useColorModeValue } from "@chakra-ui/react";
import { ReactTerminal } from "react-terminal";
import "./terminal.css";
import { useState } from "react";

const TerminalBox = () => {
  const themeBgColor = useColorModeValue("white", "#1c1b23");
  const themeToolBarColor = useColorModeValue("#1c1b23", "white");

  const [location, setLocation] = useState("Allow us to access your location");

  const getLocation = (callback) => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const latitude = position.coords.latitude;
          const longitude = position.coords.longitude;
          console.log(position.coords);
          callback(`Latitude: ${latitude}, Longitude: ${longitude}`);
        },
        (error) => {
          switch (error.code) {
            case error.PERMISSION_DENIED:
              callback("You denied the request for geolocation.");
              break;
            case error.POSITION_UNAVAILABLE:
              callback("Location information is unavailable.");
              break;
            case error.TIMEOUT:
              callback("The request to get user location timed out.");
              break;
            case error.UNKNOWN_ERROR:
              callback("An unknown error occurred.");
              break;
          }
        }
      );
    } else {
      callback("Geolocation is not available in this browser.");
    }
  };

  getLocation((result) => {
    setLocation(result);
  });

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
          <span className="text-bgSecondary font-bold">whoami:</span> Tells you
          your location
        </p>
        <p className="text-white">
          <span className="text-bgSecondary font-bold">gme:</span> Get my email
        </p>
        <p className="text-white">
          <span className="text-bgSecondary font-bold">gmp:</span> Get my
          phonenumber
        </p>
      </>
    ),
    whoami: location,
    gme: "haseeb_irfan1368@hotmail.com",
    gmp: "+92 316 4914011",
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
          welcomeMessage={welcomeMessage}
          themes={{
            "my-custom-theme": {
              themeBGColor: themeBgColor,
              themeToolbarColor: themeToolBarColor,
              themeColor: themeToolBarColor,
              themePromptColor: "#8fcb9b",
            },
          }}
          theme="my-custom-theme"
          prompt="$ haseebirfan-dev >> "
        />
      </span>
    </div>
  );
};

export default TerminalBox;

import {
  Box,
  Flex,
  Grid,
  Img,
  Link,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import toddle from "../../assets/toddle.png";
import netflix from "../../assets/netflix.jpg";
import spotify from "../../assets/spotify.png";
import triorad from "../../assets/triorad.png";

const Projects = () => {
  const cardBgColor = useColorModeValue("white", "#1c1b23");
  const cardTextColor = useColorModeValue("gray.700", "gray.100");

  const projects = [
    {
      title: "Toddles Chat App",
      img: toddle,
      desc: "Real Time Messaging App -  NextJS 14, Tailwind CSS, Typescript, Redis, WebSockets",
    },
    {
      title: "TRIORAD",
      img: triorad,
      desc: "Its a Radius Management Billing System - All CopyRights Reserved By Trionex ®.",
    },
    {
      title: "Netflix Clone",
      img: netflix,
      desc: "Vite React App, Tailwind CSS, Typescript",
    },
    {
      title: "Spotify Clone",
      img: spotify,
      desc: "Vite React App, Tailwind CSS, Typescript",
    },
  ];

  return (
    <div className="w-[80%] mx-auto">
      <Flex gap={2} alignItems="center">
        <Box width="80px" height="5px" className="bg-bgPrimary"></Box>
        <Text
          className="text-scroll-reveal"
          fontSize={{ base: "xl", sm: "2xl", lg: "3xl" }}
        >
          Projects
        </Text>
      </Flex>
      <div className="mt-5">
        <Grid
          gridTemplateColumns={{
            base: "1fr",
            md: "1fr 1fr",
            lg: "repeat(4, 1fr)",
          }}
          gap={5}
          mt={5}
          color={cardTextColor}
        >
          {projects?.map((project, i) => (
            <a
              className="scroll-reveal project-card rounded-lg"
              key={i}
              href="#"
              target="_blank"
            >
              <Flex
                flexDirection="column"
                bg={cardBgColor}
                borderRadius="lg"
                justifyContent="space-between"
                h="full"
              >
                <Box h="250px" borderTopRadius="lg" border="0px">
                  <Img
                    src={project.img}
                    alt={project.title}
                    borderTopRadius="lg"
                    h="full"
                    w="full"
                    border="0px"
                  ></Img>
                </Box>
                <Box borderBottomRadius="lg" className="px-5 py-5 flex-1">
                  <Text fontSize="medium" fontWeight="bold">
                    {project.title}
                  </Text>
                  <Text fontSize="small" opacity={0.8}>
                    {project.desc}
                  </Text>
                </Box>
              </Flex>
            </a>
          ))}
        </Grid>
      </div>
    </div>
  );
};

export default Projects;

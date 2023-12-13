import {
  Badge,
  Flex,
  Grid,
  Img,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";
import netflix from "../../assets/netflix.jpg";

const Projects = () => {
  const cardBgColor = useColorModeValue("gray.700", "white");
  const cardTextColor = useColorModeValue("gray.100", "gray.700");
  return (
    <div className="w-[80%] mx-auto">
      <Flex justifyContent="center">
        <Badge
          variant="outline"
          colorScheme="green"
          textAlign="center"
          fontSize={{ base: "2xl", sm: "3xl", lg: "4xl" }}
        >
          Projects
        </Badge>
      </Flex>
      <div className="mt-10">
        <Grid
          gridTemplateColumns={{
            base: "1fr",
            sm: "1fr 1fr",
            lg: "repeat(4, 1fr)",
          }}
          gap={5}
          mt={5}
          color={cardTextColor}
        >
          <Flex
            flexDirection="column"
            borderRadius="15px"
            bg={cardBgColor}
            boxShadow={"lg"}
          >
            <Img src={netflix} alt="netflix" borderTopRadius="15px"></Img>
            <div className="px-5 py-5">
              <Text fontSize="medium">Netflix Clone</Text>
              <Text fontSize="small">
                Vite React App, Tailwind CSS, Typescript
              </Text>
            </div>
          </Flex>
          <Flex
            flexDirection="column"
            borderRadius="15px"
            bg={cardBgColor}
            boxShadow={"lg"}
          >
            <Img src={netflix} alt="netflix" borderTopRadius="15px"></Img>
            <div className="px-5 py-5">
              <Text fontSize="medium">Netflix Clone</Text>
              <Text fontSize="small">
                Vite React App, Tailwind CSS, Typescript
              </Text>
            </div>
          </Flex>
          <Flex
            flexDirection="column"
            borderRadius="15px"
            bg={cardBgColor}
            boxShadow={"lg"}
          >
            <Img src={netflix} alt="netflix" borderTopRadius="15px"></Img>
            <div className="px-5 py-5">
              <Text fontSize="medium">Netflix Clone</Text>
              <Text fontSize="small">
                Vite React App, Tailwind CSS, Typescript
              </Text>
            </div>
          </Flex>
          <Flex
            flexDirection="column"
            borderRadius="15px"
            bg={cardBgColor}
            boxShadow={"lg"}
          >
            <Img src={netflix} alt="netflix" borderTopRadius="15px"></Img>
            <div className="px-5 py-5">
              <Text fontSize="medium">Netflix Clone</Text>
              <Text fontSize="small">
                Vite React App, Tailwind CSS, Typescript
              </Text>
            </div>
          </Flex>
        </Grid>
      </div>
      <div className="mt-10">
        <Text fontSize={{ base: "lg", sm: "xl", lg: "2xl" }}>Clones</Text>
        <Grid
          gridTemplateColumns={{
            base: "1fr",
            sm: "1fr 1fr",
            lg: "repeat(4, 1fr)",
          }}
          gap={5}
          mt={5}
          color={cardTextColor}
        >
          <Flex
            flexDirection="column"
            borderRadius="15px"
            bg={cardBgColor}
            boxShadow={"lg"}
          >
            <Img src={netflix} alt="netflix" borderTopRadius="15px"></Img>
            <div className="px-5 py-5">
              <Text fontSize="medium">Netflix Clone</Text>
              <Text fontSize="small">
                Vite React App, Tailwind CSS, Typescript
              </Text>
            </div>
          </Flex>
          <Flex
            flexDirection="column"
            borderRadius="15px"
            bg={cardBgColor}
            boxShadow={"lg"}
          >
            <Img src={netflix} alt="netflix" borderTopRadius="15px"></Img>
            <div className="px-5 py-5">
              <Text fontSize="medium">Netflix Clone</Text>
              <Text fontSize="small">
                Vite React App, Tailwind CSS, Typescript
              </Text>
            </div>
          </Flex>
          <Flex
            flexDirection="column"
            borderRadius="15px"
            bg={cardBgColor}
            boxShadow={"lg"}
          >
            <Img src={netflix} alt="netflix" borderTopRadius="15px"></Img>
            <div className="px-5 py-5">
              <Text fontSize="medium">Netflix Clone</Text>
              <Text fontSize="small">
                Vite React App, Tailwind CSS, Typescript
              </Text>
            </div>
          </Flex>
          <Flex
            flexDirection="column"
            borderRadius="15px"
            bg={cardBgColor}
            boxShadow={"lg"}
          >
            <Img src={netflix} alt="netflix" borderTopRadius="15px"></Img>
            <div className="px-5 py-5">
              <Text fontSize="medium">Netflix Clone</Text>
              <Text fontSize="small">
                Vite React App, Tailwind CSS, Typescript
              </Text>
            </div>
          </Flex>
        </Grid>
      </div>
    </div>
  );
};

export default Projects;

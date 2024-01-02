import { Box, Flex, Grid, Text, useColorModeValue } from "@chakra-ui/react";

const Skills = () => {
  const cardBgColor = useColorModeValue("white", "#1c1b23");
  const skillBgColor = useColorModeValue("gray.600", "#14131a");

  const cards = [
    {
      title: "Frontend",
      tags: [
        "HTML",
        "CSS",
        "Tailwind",
        "FramerMotion",
        "Javascript",
        "Typescript",
        "ReactJS",
        "Angular",
        "NextJS 14",
      ],
      tagsColor: [
        "transparent",
        "transparent",
        "blue.600",
        "red.600",
        "yellow.600",
        "transparent",
        "green.600",
        "transparent",
        "purple.600",
      ],
    },
    {
      title: "Backend",
      tags: ["NodeJS", "ExpressJS", "KnexJS", "NextAuth"],
      tagsColor: ["blue.600", "yellow.600", "green.600", "purple.600"],
    },
    {
      title: "Database",
      tags: ["MySQL", "PostgreSQL", "MongoDB", "Vercel", "Redis", "Prisma"],
      tagsColor: [
        "yellow.600",
        "blue.600",
        "transparent",
        "transparent",
        "red.600",
        "purple.600",
      ],
    },
    {
      title: "UI Libraries",
      tags: [
        "Chakra UI",
        "MaterialUI",
        "Ant Design",
        "Core UI",
        "Nebular",
        "React Datatables",
        "ChartJS",
        "Apex Charts",
      ],
      tagsColor: [
        "blue.600",
        "purple.600",
        "transparent",
        "transparent",
        "transparent",
        "green.600",
        "red.600",
        "transparent",
      ],
    },
  ];

  return (
    <div className="w-[80%] mx-auto">
      <div className="mt-5">
        <Flex gap={2} alignItems="center">
          <Box width="80px" height="5px" className="bg-bgPrimary"></Box>
          <Text
            className="text-scroll-reveal"
            fontSize={{ base: "xl", sm: "2xl", lg: "3xl" }}
          >
            What I Know
          </Text>
        </Flex>
        <Grid
          gridTemplateColumns={{
            base: "1fr",
            sm: "1fr 1fr",
            lg: "repeat(4, 1fr)",
          }}
          gap={5}
          mt={5}
        >
          {cards?.map((card, key) => (
            <span key={key} className="scroll-reveal">
              <Box
                bg={cardBgColor}
                px={3}
                pt={2}
                borderRadius="lg"
                boxShadow={"xl"}
                h="full"
              >
                <Text fontSize="xl" opacity="0.8">
                  {card.title}
                </Text>
                <Flex flexWrap="wrap" gap={2} py={4} px={1} color="gray.100">
                  {card?.tags?.map((tag, index) => (
                    <Text
                      key={index}
                      bg={skillBgColor}
                      fontSize="sm"
                      px={3}
                      py="4px"
                      alignSelf="center"
                      borderRadius="md"
                      border="2px"
                      borderColor={card?.tagsColor[index]}
                      opacity={0.8}
                    >
                      {tag}
                    </Text>
                  ))}
                </Flex>
              </Box>
            </span>
          ))}
        </Grid>
      </div>
    </div>
  );
};

export default Skills;

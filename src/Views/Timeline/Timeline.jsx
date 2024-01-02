import { Box, Flex, Grid, Text } from "@chakra-ui/react";
import React from "react";
import TimelineItem from "./TimelineItem";
import "./timeline.css";

const Timeline = () => {
  const education = [
    {
      date: "2021 - Present",
      heading: "Bachelor's in Computer Science - University of Central Punjab",
      desc: "Currently enrolled in 5th semester, learning and exploring new tech stacks everyday. Currect CGPA 3.05.",
    },
    {
      date: "2018 - 2020",
      heading: "Alevels - Lahore Grammer School",
      desc: "Scored 1A, 1B, 1C in Maths, Physics & Computer Science.",
    },
    {
      date: "2015 - 2018",
      heading: "Olevels - American Lycetuff",
      desc: "Scored 6A's, 1B, 1C as Computer Science Major.",
    },
  ];
  const experience = [
    {
      date: "March 2023 - Present",
      heading: "Full Stack Developer - Trionex®",
      desc: "I joind Trionex as a Full Time REMOTE DEVELOPER and working as a Full Stack Developer of ReactJS/NextJS/NodeJS. Mainly worked at Frontend on an InHouse Project of Trionex called TRIORAD so far.",
    },
    {
      date: "2021 - March 2023",
      heading: "Frontend React Developer - Freelance",
      desc: "I dived into Javascript in 2021 and since then I am working as a Frontend Developer. Then I learned Full Stacks with ReactJS and dived into ReactJS even more along with other Frontend Frameworks like Angular & NextJS.",
    },
    {
      date: "2020 - 2021",
      heading: "Wordpress Developer - Freelance",
      desc: "I have been working on Wordpress and designing responsive sites for past 3 years.",
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
          Timeline
        </Text>
      </Flex>
      <Grid templateColumns={{ base: "1fr", md: "1fr 1fr" }} gap={10} mt={10}>
        <TimelineItem title={"Education"} contentItems={education} />
        <TimelineItem title={"Experience"} contentItems={experience} />
      </Grid>
    </div>
  );
};

export default Timeline;

import { Box, Flex, GridItem, Text, useColorModeValue } from "@chakra-ui/react";
import "./timeline.css";

const TimelineItem = ({ title, contentItems }) => {
  const cardBgColor = useColorModeValue("white", "#1c1b23");

  return (
    <GridItem>
      <Box py="3" px="30px">
        <Text
          className="text-bgPrimary"
          fontSize={{ base: "md", sm: "lg", lg: "xl" }}
        >
          {title}
        </Text>
      </Box>
      <Box px="30px" className="border-l-2 border-l-bgPrimary">
        {contentItems?.map((item, i) => (
          <span key={i} className="relative scroll-reveal">
            <Flex
              className="timeline-box"
              bg={cardBgColor}
              p={4}
              mb={5}
              borderRadius="md"
              transition="all 0.5s ease"
              _hover={{
                boxShadow: "0px 3px 12px 0px #8fcb9b",
              }}
              flexDirection="column"
              gap="2"
            >
              <Text fontSize="lg" fontWeight="bold" className="text-bgPrimary">
                {item.date}
              </Text>
              <Text fontSize="lg" fontWeight="bold">
                {item.heading}
              </Text>
              <Text opacity={0.8}>{item.desc}</Text>
            </Flex>
          </span>
        ))}
      </Box>
    </GridItem>
  );
};

export default TimelineItem;

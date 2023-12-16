import { Flex, Text } from "@chakra-ui/react";
import React from "react";

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <Flex justifyContent="center" alignItems="center" py={10}>
      <Text fontSize="xs" opacity={0.7}>
        © Copyright {year} - Developed by Haseeb Irfan. All Rights Reserved
      </Text>
    </Flex>
  );
};

export default Footer;

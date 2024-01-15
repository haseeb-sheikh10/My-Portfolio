import { Flex, Text } from "@chakra-ui/react";

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <Flex justifyContent="center" alignItems="center" py={10} px="10">
      <Text
        className="text-with-gradient"
        fontSize="s"
        opacity={0.7}
        align="center"
      >
        © Copyright {year} - Developed by Haseeb Irfan. All Rights Reserved
      </Text>
    </Flex>
  );
};

export default Footer;

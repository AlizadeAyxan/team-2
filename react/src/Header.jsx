import { Box, Button, Flex, Heading } from "@chakra-ui/react";

function Header({ setActiveCategory }) {
  return (
    <Box textAlign="center" p={5}>
      <Heading mb={5}>Animal page</Heading>
      <Flex justify="center" gap={4} mb={10}>
        <Button colorScheme="blue" onClick={() => setActiveCategory("dog")}>Dogs</Button>
        <Button colorScheme="pink" onClick={() => setActiveCategory("cat")}>Cats</Button>
      </Flex>
    </Box>
  );
}

export default Header;

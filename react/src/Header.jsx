import { Box, Button, Flex, Heading } from "@chakra-ui/react";

function Header({ setActiveCategory }) {
  return (
    
    <Box textAlign={"start"}  mr={5} bgColor={"blue.500"} borderRadius={15} height={70}>
      <Heading  >Animal page</Heading>
      <Flex justifyContent={"right"} mr={5}  gap={4} mt={-4}>
        <Button colorScheme="blue"    onClick={() => setActiveCategory("dog")}>Dogs</Button>
        <Button colorScheme="pink"   onClick={() => setActiveCategory("cat")}>Cats</Button>
      </Flex>
    </Box>
  );
}

export default Header;

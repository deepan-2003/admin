import React from "react";
import { Box, Heading, Text, VStack, Icon, Badge, Link } from "@chakra-ui/react";
import { FaBook, FaExternalLinkAlt } from "react-icons/fa";

const Publications = ({ publications }) => {
  return (
    <Box p={6} bg="white" borderRadius="xl" boxShadow="lg" width="100%" maxW="900px" mx="auto">
      <Heading size="lg" mb={5} textAlign="center">
        <Icon as={FaBook} color="blue.500" mr={2} /> Publications
      </Heading>

      <VStack align="start" spacing={6}>
        {publications.map((pub, index) => (
          <Box key={index} p={4} border="1px solid" borderColor="gray.200" borderRadius="lg" bg="gray.50" w="full">
            <Text fontSize="md" fontWeight="bold">
              {pub.title} <Badge colorScheme="blue">{pub.year}</Badge>
            </Text>
            <Text fontSize="sm" color="gray.600">
              {pub.journal} | <b>Authors:</b> {pub.authors}
            </Text>
            {pub.link && (
              <Link href={pub.link} isExternal color="blue.500" fontSize="sm">
                View Paper <Icon as={FaExternalLinkAlt} ml={1} />
              </Link>
            )}
          </Box>
        ))}
      </VStack>
    </Box>
  );
};

export default Publications;

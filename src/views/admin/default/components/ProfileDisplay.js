import { Box, Text, Image, Flex, Avatar, VStack } from "@chakra-ui/react";
import { motion } from "framer-motion";

// Motion wrapper for animations
const MotionBox = motion(Box);

const ProfileDisplay = ({ name, location, courses, certifications, avatar }) => {
  return (
    <MotionBox
      bg="white"
      p={6}
      borderRadius="2xl"
      boxShadow="lg"
      textAlign="center"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      w="100%"
      maxW="350px"
      mx="auto"
    >
      {/* Profile Background Image */}
      <Image
        src="https://source.unsplash.com/350x150/?technology,abstract"
        alt="Profile Background"
        borderRadius="lg"
        w="100%"
        h="120px"
        objectFit="cover"
      />
      {/* Profile Avatar */}
      <Avatar size="xl" src={avatar} mt={-12} border="4px solid white" />
      <VStack spacing={1} mt={2}>
        <Text fontSize="xl" fontWeight="bold">{name}</Text>
        <Text fontSize="sm" color="gray.500">{location}</Text>
      </VStack>

      <Flex justify="space-around" mt={4}>
        <Box textAlign="center">
          <Text fontWeight="bold" fontSize="lg">{courses}</Text>
          <Text fontSize="sm" color="gray.500">Courses</Text>
        </Box>
        <Box textAlign="center">
          <Text fontWeight="bold" fontSize="lg">{certifications}</Text>
          <Text fontSize="sm" color="gray.500">Certifications</Text>
        </Box>
      </Flex>
    </MotionBox>
  );
};

export default ProfileDisplay;

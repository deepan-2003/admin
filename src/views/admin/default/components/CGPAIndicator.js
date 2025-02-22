import { Box, Text, Button, Flex, CircularProgress, CircularProgressLabel } from "@chakra-ui/react";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

// Motion Wrapper
const MotionBox = motion(Box);

const CGPAIndicator = ({ cgpa }) => {
  const controls = useAnimation();

  useEffect(() => {
    controls.start({
      value: cgpa * 10, // Scaling CGPA to percentage
      transition: { duration: 1.5, ease: "easeInOut" },
    });
  }, [cgpa, controls]);

  return (
    <MotionBox
      bg="white"
      p={6}
      borderRadius="2xl"
      boxShadow="lg"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6 }}
      w="100%"
      maxW="350px"
      mx="auto"
    >
      <Text fontSize="xl" fontWeight="bold" textAlign="center" mb={3}>
        CGPA Score
      </Text>
      <Flex align="center" justify="center">
        <motion.div animate={controls}>
          <CircularProgress size="140px" value={cgpa * 10} color="green.400">
            <CircularProgressLabel fontSize="xl" fontWeight="bold">
              {cgpa.toFixed(2)}
            </CircularProgressLabel>
          </CircularProgress>
        </motion.div>
      </Flex>
      <Flex mt={4} justify="space-around">
        <Button variant="outline" size="sm">
          Redeem
        </Button>
        <Button colorScheme="green" size="sm">
          Improve
        </Button>
      </Flex>
    </MotionBox>
  );
};

export default CGPAIndicator;

import React, { useState } from "react";
import {
  Box,
  Text,
  Input,
  Select,
  VStack,
  Button,
  useColorModeValue,
  Flex,
  Icon,
} from "@chakra-ui/react";
import { MdCancel } from "react-icons/md"; // Use the cancel icon

const DiscontinueRefundForm = ({ bannerColor }) => {
  const textColor = useColorModeValue("gray.800", "white");
  const inputBg = useColorModeValue("gray.100", "gray.700");

  const [registerNumber, setRegisterNumber] = useState("");
  const [tcSubmitted, setTcSubmitted] = useState("");

  // Handle TC submitted dropdown change
  const handleTcSubmittedChange = (event) => {
    setTcSubmitted(event.target.value);
  };

  return (
    <Flex
            minH="100vh"
            align="center"
            justifyContent="center"
            direction="column"
            p={{ base: "20px", md: "40px" }}
            w="100%" // Ensure the parent takes up full width
            flex="1" // Allow the parent to expand
          >
            <Box
              w="100%" // Take up full width of parent
              minW="400px" // Minimum width
              maxW="600px" // Maximum width
              borderRadius="20px"
              p={{ base: "20px", md: "40px" }}
              boxShadow="0px 4px 20px rgba(0, 0, 0, 0.1)"
            >
        <Flex direction="column" align="center" mb="20px">
          <Icon as={MdCancel} boxSize="40px" color={bannerColor} />
          <Text fontSize="2xl" fontWeight="bold" color={bannerColor} mt="10px">
            Discontinue Refund Application
          </Text>
        </Flex>
        <VStack spacing="20px" align="start">
          <Box w="100%">
            <Text mb="8px" color={textColor} textAlign="left">
              Register Number
            </Text>
            <Input
              placeholder="Enter your register number"
              value={registerNumber}
              onChange={(e) => setRegisterNumber(e.target.value)}
              bg={inputBg}
              color={textColor}
              _placeholder={{ color: "gray.500" }}
              borderColor={bannerColor} // Use banner color for border
              _focus={{
                borderColor: bannerColor, // Use banner color on focus
              }}
            />
          </Box>

          <Box w="100%">
            <Text mb="8px" color={textColor} textAlign="left">
              Has Transfer Certificate (TC) been submitted?
            </Text>
            <Select
              placeholder="Select Option"
              value={tcSubmitted}
              onChange={handleTcSubmittedChange}
              bg={inputBg}
              color={textColor}
              borderColor={bannerColor} // Use banner color for border
              _focus={{
                borderColor: bannerColor, // Use banner color on focus
              }}
            >
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </Select>
          </Box>

          <Button bg={bannerColor} color="white" size="lg" w="100%">
            Apply
          </Button>
        </VStack>
      </Box>
    </Flex>
  );
};

export default DiscontinueRefundForm;

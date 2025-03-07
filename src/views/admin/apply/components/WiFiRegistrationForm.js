import React, { useState } from "react";
import {
  Box,
  Text,
  Input,
  VStack,
  Button,
  useColorModeValue,
  Flex,
  Icon,
} from "@chakra-ui/react";
import { MdWifi } from "react-icons/md";

const WiFiRegistrationForm = ({ bannerColor }) => {
  const textColor = useColorModeValue("gray.800", "white");
  const inputBg = useColorModeValue("gray.100", "gray.700");

  const [systemInfo, setSystemInfo] = useState("");
  const [os, setOs] = useState("");
  const [systemModel, setSystemModel] = useState("");
  const [systemSerialNo, setSystemSerialNo] = useState("");
  const [macAddress, setMacAddress] = useState("");

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
          <Icon as={MdWifi} boxSize="40px" color={bannerColor} />
          <Text fontSize="2xl" fontWeight="bold" color={bannerColor} mt="10px">
            WiFi Registration
          </Text>
        </Flex>
        <VStack spacing="20px" align="start">
          <Box w="100%">
            <Text mb="8px" color={textColor} textAlign="left">
              System Information
            </Text>
            <Input
              placeholder="HP/DEL/any other specify"
              value={systemInfo}
              onChange={(e) => setSystemInfo(e.target.value)}
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
              O.S.
            </Text>
            <Input
              placeholder="Windows/Linux"
              value={os}
              onChange={(e) => setOs(e.target.value)}
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
              System Model
            </Text>
            <Input
              placeholder="Enter System Model"
              value={systemModel}
              onChange={(e) => setSystemModel(e.target.value)}
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
              System Serial No
            </Text>
            <Input
              placeholder="Enter System Serial No"
              value={systemSerialNo}
              onChange={(e) => setSystemSerialNo(e.target.value)}
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
              MAC Address
            </Text>
            <Input
              placeholder="EX:D4-AE-52-BB-5A-41"
              value={macAddress}
              onChange={(e) => setMacAddress(e.target.value)}
              bg={inputBg}
              color={textColor}
              _placeholder={{ color: "gray.500" }}
              borderColor={bannerColor} // Use banner color for border
              _focus={{
                borderColor: bannerColor, // Use banner color on focus
              }}
            />
          </Box>

          <Button bg={bannerColor} color="white" size="lg" w="100%">
            Apply
          </Button>
        </VStack>
      </Box>
    </Flex>
  );
};

export default WiFiRegistrationForm;

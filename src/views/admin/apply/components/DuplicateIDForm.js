import React, { useState } from "react";
import {
  Box,
  Text,
  Input,
  Textarea,
  VStack,
  Button,
  useColorModeValue,
  Select,
  Icon,
  Flex,
} from "@chakra-ui/react";
import { FaIdCard } from "react-icons/fa"; // Importing an icon from react-icons

const DuplicateIDForm = ({ bannerColor }) => {
  const textColor = useColorModeValue("gray.800", "white");
  const inputBg = useColorModeValue("gray.100", "gray.700");

  // State for dropdowns and additional fields
  const [reason, setReason] = useState("");
  const [registerNumber, setRegisterNumber] = useState("");
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [breakOfStudyDetails, setBreakOfStudyDetails] = useState("");

  // Handle reason dropdown change
  const handleReasonChange = (event) => {
    setReason(event.target.value);
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
        {/* Icon Section */}
        <Box display="flex" justifyContent="center" mb="20px">
          <Icon as={FaIdCard} boxSize="48px" color={bannerColor} />
        </Box>

        {/* Form Title */}
        <Text fontSize="2xl" fontWeight="bold" mb="20px" color={bannerColor} textAlign="center">
          Duplicate ID Application
        </Text>

        {/* Form Fields */}
        <VStack spacing="20px">
          {/* Register Number Field */}
          <Box w="100%">
            <Text mb="8px" color={textColor}>
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

          {/* Reason Dropdown */}
          <Box w="100%">
            <Text mb="8px" color={textColor}>
              Reason for Duplicate ID
            </Text>
            <Select
              placeholder="Select Reason"
              value={reason}
              onChange={handleReasonChange}
              bg={inputBg}
              color={textColor}
              borderColor={bannerColor} // Use banner color for border
              _focus={{
                borderColor: bannerColor, // Use banner color on focus
              }}
            >
              <option value="id card lost">ID Card Lost</option>
              <option value="id card damaged">ID Card Damaged</option>
              <option value="name change">Name Change</option>
              <option value="address change">Address Change</option>
              <option value="due to break of study">Due to Break of Study</option>
              <option value="name and address change">Name and Address Change</option>
            </Select>
          </Box>

          {/* Additional Fields (Conditional Rendering) */}
          {reason === "name change" && (
            <Box w="100%">
              <Text mb="8px" color={textColor}>
                New Name
              </Text>
              <Input
                placeholder="Enter New Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                bg={inputBg}
                color={textColor}
                _placeholder={{ color: "gray.500" }}
                borderColor={bannerColor} // Use banner color for border
                _focus={{
                  borderColor: bannerColor, // Use banner color on focus
                }}
              />
            </Box>
          )}

          {reason === "address change" && (
            <Box w="100%">
              <Text mb="8px" color={textColor}>
                New Address
              </Text>
              <Input
                placeholder="Enter New Address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                bg={inputBg}
                color={textColor}
                _placeholder={{ color: "gray.500" }}
                borderColor={bannerColor} // Use banner color for border
                _focus={{
                  borderColor: bannerColor, // Use banner color on focus
                }}
              />
            </Box>
          )}

          {reason === "due to break of study" && (
            <Box w="100%">
              <Text mb="8px" color={textColor}>
                Break of Study Details
              </Text>
              <Textarea
                placeholder="Enter Break of Study Details"
                value={breakOfStudyDetails}
                onChange={(e) => setBreakOfStudyDetails(e.target.value)}
                bg={inputBg}
                color={textColor}
                _placeholder={{ color: "gray.500" }}
                borderColor={bannerColor} // Use banner color for border
                _focus={{
                  borderColor: bannerColor, // Use banner color on focus
                }}
              />
            </Box>
          )}

          {reason === "name and address change" && (
            <>
              <Box w="100%">
                <Text mb="8px" color={textColor}>
                  New Name
                </Text>
                <Input
                  placeholder="Enter New Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
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
                <Text mb="8px" color={textColor}>
                  New Address
                </Text>
                <Input
                  placeholder="Enter New Address"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  bg={inputBg}
                  color={textColor}
                  _placeholder={{ color: "gray.500" }}
                  borderColor={bannerColor} // Use banner color for border
                  _focus={{
                    borderColor: bannerColor, // Use banner color on focus
                  }}
                />
              </Box>
            </>
          )}

          {/* Submit Button */}
          <Button bg={bannerColor} color="white" size="lg" w="100%">
            Apply
          </Button>
        </VStack>
      </Box>
    </Flex>
  );
};

export default DuplicateIDForm;

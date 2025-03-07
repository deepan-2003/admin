import React, { useState } from "react";
import {
  Box,
  Text,
  Input,
  Textarea,
  VStack,
  Button,
  useColorModeValue,
  Flex,
  Icon,
  Select,
} from "@chakra-ui/react";
import { GiDiploma } from "react-icons/gi";

const BonafideForm = ({ bannerColor, bannerIcon }) => {
  const textColor = useColorModeValue("gray.800", "white");
  const inputBg = useColorModeValue("gray.100", "gray.700");

  const [purpose, setPurpose] = useState("");
  const [reason, setReason] = useState("");
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");
  const [organisationName, setOrganisationName] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [scholarshipName, setScholarshipName] = useState("");
  const [countryName, setCountryName] = useState("");
  const [visitReason, setVisitReason] = useState("");
  const [othersReason, setOthersReason] = useState("");
  const [bankName, setBankName] = useState("");
  const [branch, setBranch] = useState("");
  const [awardName, setAwardName] = useState("");

  const handlePurposeChange = (event) => {
    setPurpose(event.target.value);
    setReason("");
  };

  const handleReasonChange = (event) => {
    setReason(event.target.value);
  };

  const renderAdditionalFields = () => {
    switch (reason) {
      case "bus pass":
      case "railway pass":
        return (
          <>
            <Box w="100%">
              <Text mb="8px" color={textColor} textAlign="left">
                From Date
              </Text>
              <Input
                type="date"
                placeholder="Select From Date"
                value={fromDate}
                onChange={(e) => setFromDate(e.target.value)}
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
                To Date
              </Text>
              <Input
                type="date"
                placeholder="Select To Date"
                value={toDate}
                onChange={(e) => setToDate(e.target.value)}
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
        );
      case "scholarship":
        return (
          <Box w="100%">
            <Text mb="8px" color={textColor} textAlign="left">
              Scholarship Name
            </Text>
            <Input
              placeholder="Enter Full Scholarship Name"
              value={scholarshipName}
              onChange={(e) => setScholarshipName(e.target.value)}
              bg={inputBg}
              color={textColor}
              _placeholder={{ color: "gray.500" }}
              borderColor={bannerColor} // Use banner color for border
              _focus={{
                borderColor: bannerColor, // Use banner color on focus
              }}
            />
          </Box>
        );
      case "inplant training":
        return (
          <Box w="100%">
            <Text mb="8px" color={textColor} textAlign="left">
              Organisation Name
            </Text>
            <Input
              placeholder="Enter Full Organisation Name"
              value={organisationName}
              onChange={(e) => setOrganisationName(e.target.value)}
              bg={inputBg}
              color={textColor}
              _placeholder={{ color: "gray.500" }}
              borderColor={bannerColor} // Use banner color for border
              _focus={{
                borderColor: bannerColor, // Use banner color on focus
              }}
            />
          </Box>
        );
      case "intern training":
        return (
          <Box w="100%">
            <Text mb="8px" color={textColor} textAlign="left">
              Company Name
            </Text>
            <Input
              placeholder="Enter Full Company Name"
              value={companyName}
              onChange={(e) => setCompanyName(e.target.value)}
              bg={inputBg}
              color={textColor}
              _placeholder={{ color: "gray.500" }}
              borderColor={bannerColor} // Use banner color for border
              _focus={{
                borderColor: bannerColor, // Use banner color on focus
              }}
            />
          </Box>
        );
      case "passport":
        return null; // No additional fields for Passport
      case "visa":
        return (
          <>
            <Box w="100%">
              <Text mb="8px" color={textColor} textAlign="left">
                Country Name
              </Text>
              <Input
                placeholder="Enter Full Country Name"
                value={countryName}
                onChange={(e) => setCountryName(e.target.value)}
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
                Reason for Visit
              </Text>
              <Textarea
                placeholder="Enter Reason for Visit"
                value={visitReason}
                onChange={(e) => setVisitReason(e.target.value)}
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
                From Date
              </Text>
              <Input
                type="date"
                placeholder="Select From Date"
                value={fromDate}
                onChange={(e) => setFromDate(e.target.value)}
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
                To Date
              </Text>
              <Input
                type="date"
                placeholder="Select To Date"
                value={toDate}
                onChange={(e) => setToDate(e.target.value)}
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
        );
      case "others":
        return (
          <Box w="100%">
            <Text mb="8px" color={textColor} textAlign="left">
              Reason for Others
            </Text>
            <Textarea
              placeholder="Enter Reason for Others"
              value={othersReason}
              onChange={(e) => setOthersReason(e.target.value)}
              bg={inputBg}
              color={textColor}
              _placeholder={{ color: "gray.500" }}
              borderColor={bannerColor} // Use banner color for border
              _focus={{
                borderColor: bannerColor, // Use banner color on focus
              }}
            />
          </Box>
        );
      case "bank account":
        return (
          <>
            <Box w="100%">
              <Text mb="8px" color={textColor} textAlign="left">
                Bank Name
              </Text>
              <Input
                placeholder="Enter Full Bank Name"
                value={bankName}
                onChange={(e) => setBankName(e.target.value)}
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
                Branch
              </Text>
              <Input
                placeholder="Enter Branch"
                value={branch}
                onChange={(e) => setBranch(e.target.value)}
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
        );
      case "reward":
        return (
          <Box w="100%">
            <Text mb="8px" color={textColor} textAlign="left">
              Award Name
            </Text>
            <Input
              placeholder="Enter Full Award Name"
              value={awardName}
              onChange={(e) => setAwardName(e.target.value)}
              bg={inputBg}
              color={textColor}
              _placeholder={{ color: "gray.500" }}
              borderColor={bannerColor} // Use banner color for border
              _focus={{
                borderColor: bannerColor, // Use banner color on focus
              }}
            />
          </Box>
        );
      default:
        return null;
    }
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
          <Icon as={GiDiploma} boxSize="40px" color={bannerColor} />
          <Text fontSize="2xl" fontWeight="bold" color={bannerColor} mt="10px">
            Bonafide Certificate Application
          </Text>
        </Flex>
        <VStack spacing="20px" align="start">
          <Box w="100%">
            <Text mb="8px" color={textColor} textAlign="left">
              Purpose
            </Text>
            <Select
              placeholder="Select Purpose"
              value={purpose}
              onChange={handlePurposeChange}
              bg={inputBg}
              color={textColor}
              borderColor={bannerColor} // Use banner color for border
              _focus={{
                borderColor: bannerColor, // Use banner color on focus
              }}
            >
              <option value="apply">Apply</option>
              <option value="renew">Renew</option>
              <option value="open">Open</option>
              <option value="receive">Receive</option>
            </Select>
          </Box>

          {purpose && (
            <Box w="100%">
              <Text mb="8px" color={textColor} textAlign="left">
                Reason for {purpose.charAt(0).toUpperCase() + purpose.slice(1)}
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
                {purpose === "apply" && (
                  <>
                    <option value="bus pass">Bus Pass</option>
                    <option value="railway pass">Railway Pass</option>
                    <option value="scholarship">Scholarship</option>
                    <option value="inplant training">Inplant Training</option>
                    <option value="intern training">Intern Training</option>
                    <option value="passport">Passport</option>
                    <option value="visa">Visa</option>
                    <option value="others">Others</option>
                  </>
                )}
                {purpose === "renew" && (
                  <>
                    <option value="bus pass">Bus Pass</option>
                    <option value="railway pass">Railway Pass</option>
                    <option value="others">Others</option>
                  </>
                )}
                {purpose === "open" && (
                  <>
                    <option value="bank account">Bank Account</option>
                    <option value="others">Others</option>
                  </>
                )}
                {purpose === "receive" && (
                  <>
                    <option value="scholarship">Scholarship</option>
                    <option value="reward">Reward</option>
                    <option value="others">Others</option>
                  </>
                )}
              </Select>
            </Box>
          )}

          {reason && renderAdditionalFields()}

          <Button bg={bannerColor} color="white" size="lg" w="100%">
            Apply
          </Button>
        </VStack>
      </Box>
    </Flex>
  );
};

export default BonafideForm;

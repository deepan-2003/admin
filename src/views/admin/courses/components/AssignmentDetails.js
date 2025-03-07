import React, { useState, useEffect } from "react";
import {
  Box,
  Text,
  Flex,
  VStack,
  Button,
  HStack,
  Input,
  IconButton,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  ModalCloseButton,
  Link,
  CircularProgress,
  CircularProgressLabel,
} from "@chakra-ui/react";
import { FaFileUpload } from "react-icons/fa";
import { CloseIcon } from "@chakra-ui/icons";
import { format, differenceInDays } from "date-fns";

// Import assignments data
import assignmentsData from "../variables/assignments.json";

const AssignmentDetails = ({ assignmentId }) => {
  const assignmentFromData = assignmentsData.assignments.find(
    (a) => a.id === assignmentId
  );

  const [attachedFiles, setAttachedFiles] = useState([]);
  const [isTurnedIn, setIsTurnedIn] = useState(false);
  const [turnedInDate, setTurnedInDate] = useState(null);
  const [marksAssigned, setMarksAssigned] = useState(
    assignmentFromData.marksAssigned
  );

  const { isOpen, onOpen, onClose } = useDisclosure();

  const totalStudents = 50;
  const [submittedStudents, setSubmittedStudents] = useState(0); // Start with 0
  const [submissionPercentage, setSubmissionPercentage] = useState(0);
  const [deadlinePercentage, setDeadlinePercentage] = useState(0);

  useEffect(() => {
    const currentDate = new Date();
    const assignedDate = new Date(assignmentFromData.assignedDate);
    const assignmentDeadline = new Date(assignmentFromData.deadline);

    const totalDuration = assignmentDeadline.getTime() - assignedDate.getTime();
    const timeElapsed = currentDate.getTime() - assignedDate.getTime();

    // Ensure the percentage doesn't exceed 100%
    const progress = Math.min((timeElapsed / totalDuration) * 100, 100);
    setDeadlinePercentage(progress);
  }, [assignmentFromData]);

  if (!assignmentFromData) {
    return <Text>Assignment not found.</Text>;
  }

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    setAttachedFiles((prev) => [...prev, ...files]);
  };

  const removeFile = (index) => {
    setAttachedFiles((prev) => prev.filter((_, i) => i !== index));
  };

  const handleHandIn = () => {
    if (!isTurnedIn) {
      const now = new Date();
      setTurnedInDate(now);
      setIsTurnedIn(true);
      setSubmittedStudents((prev) => prev + 1);
      setSubmissionPercentage(((submittedStudents + 1) / totalStudents) * 100);

      // Update status in assignments.json
      assignmentFromData.status = "Handed in";
    }
  };

  const handleUndoTurnIn = () => {
    onOpen(); // Open confirmation modal
  };

  const confirmUndoTurnIn = () => {
    if (isTurnedIn) {
      setIsTurnedIn(false);
      setTurnedInDate(null);
      setSubmittedStudents((prev) => Math.max(prev - 1, 0));
      setSubmissionPercentage(
        ((submittedStudents - 1) / totalStudents) * 100
      );

      // Update status in assignments.json
      assignmentFromData.status = "Not submitted";
    }
    onClose(); // Close confirmation modal
  };

  // Calculate duration in days
  const durationInDays = differenceInDays(
    new Date(assignmentFromData.deadline),
    new Date(assignmentFromData.assignedDate)
  );

  return (
    <Flex maxW="1200px" mx="auto" mt={8} gap={6}>
      {/* Assignment Card */}
      <Box
        flex="2"
        p={6}
        borderWidth="1px"
        borderRadius="lg"
        boxShadow="md"
        bg="white"
      >
        {/* Title */}
        <Flex justify="space-between" align="center" mb={4}>
          <Text fontSize="2xl" fontWeight="bold" color="black">
            {assignmentFromData.title}
          </Text>
          <Flex align="center">
            {isTurnedIn && turnedInDate && (
              <Text fontSize="sm" color="gray" fontStyle="italic" mr={3}>
                Turned in {format(turnedInDate, "EEE MMMM dd, yyyy 'at' hh:mm a")}
              </Text>
            )}
            {!isTurnedIn ? (
              <Button colorScheme="blue" onClick={handleHandIn}>
                Hand In
              </Button>
            ) : (
              <Button colorScheme="red" onClick={handleUndoTurnIn}>
                Undo Turn In
              </Button>
            )}
          </Flex>
        </Flex>

        {/* Details Section */}
        <Flex
          justify="space-between"
          align="center"
          mb={6}
          borderBottom="1px"
          pb={2}
          borderColor="gray.200"
        >
          <HStack spacing={4}>
            <Text fontSize="md" color="gray">
              <strong>Duration:</strong> {durationInDays} days
            </Text>
            <Text fontSize="md" color="gray">
              <strong>Deadline:</strong>{" "}
              {format(new Date(assignmentFromData.deadline), "MMMM dd, yyyy hh:mm a")}
            </Text>
          </HStack>
          <Text fontSize="md" color="gray">
            <strong>Marks Possible:</strong> {assignmentFromData.marksPossible}
          </Text>
        </Flex>

        {/* Instructions */}
        <Box mb={4}>
          <Text fontSize="lg" fontWeight="bold" mb={2} color="black">
            Instructions
          </Text>
          <Text fontSize="md" color="black" mb={2}>
            {assignmentFromData.instructions}
          </Text>
          {assignmentFromData.document && (
            <Box
              borderWidth="1px"
              borderRadius="md"
              p={2}
              bg="gray.100"
              width="80%"
              display="flex"
              alignItems="center"
            >
              <Link
                href={assignmentFromData.document.url}
                target="_blank"
                color="blue.500"
                fontWeight="bold"
              >
                {assignmentFromData.document.name}
              </Link>
            </Box>
          )}
        </Box>

        {/* My Work */}
        <Box mb={6}>
          <Text fontSize="lg" fontWeight="bold" mb={2} color="black">
            My Work
          </Text>
          {attachedFiles.length > 0 ? (
            <VStack align="start" spacing={3}>
              {attachedFiles.map((file, index) => (
                <Flex
                  key={index}
                  p={2}
                  borderWidth="1px"
                  borderRadius="md"
                  bg="gray.200"
                  w="100%"
                  align="center"
                  justify="space-between"
                >
                  <Text color="black">{file.name}</Text>
                  {!isTurnedIn && (
                    <IconButton
                      size="sm"
                      aria-label="Remove file"
                      icon={<CloseIcon />}
                      onClick={() => removeFile(index)}
                    />
                  )}
                </Flex>
              ))}
            </VStack>
          ) : (
            <Text color="gray.500">No work submitted yet.</Text>
          )}
        </Box>

        {/* Attach File and Marks Assigned */}
        <Flex align="center" justify="space-between" mb={6}>
          <Flex align="center">
            <IconButton
              icon={<FaFileUpload />}
              colorScheme="blue"
              variant="solid"
              aria-label="Attach file"
              mr={2}
              onClick={() => document.getElementById("fileUpload").click()}
            />
            <Text
              fontSize="md"
              color="blue.500"
              cursor="pointer"
              onClick={() => document.getElementById("fileUpload").click()}
            >
              Attach File
            </Text>
            <Input
              id="fileUpload"
              type="file"
              multiple
              accept=".pdf,.doc,.docx,.xls,.xlsx,image/*,video/*,audio/*"
              display="none"
              onChange={handleFileChange}
            />
          </Flex>
          <Text fontSize="md" color="gray">
            <strong>Marks Assigned:</strong>{" "}
            <span style={{ fontStyle: "italic" }}>
              {marksAssigned === null ? "Yet to be evaluated" : marksAssigned}
            </span>
          </Text>
        </Flex>

        {/* Undo Confirmation Modal */}
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Confirm Undo Turn In</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Text>Are you sure you want to undo your submission?</Text>
            </ModalBody>
            <ModalFooter>
              <Button colorScheme="red" onClick={confirmUndoTurnIn} mr={3}>
                Confirm
              </Button>
              <Button onClick={onClose}>Cancel</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </Box>

      {/* Progress Cards */}
      <VStack flex="1" spacing={4}>
        {/* Submission Progress */}
        <Box
          p={4}
          borderWidth="1px"
          borderRadius="lg"
          boxShadow="md"
          bg="white"
          w="100%"
          h="50%"
          textAlign="center"
        >
          <Text fontSize="lg" fontWeight="bold" mb={4} color="black">
            Submission Progress
          </Text>
          <CircularProgress
            value={submissionPercentage}
            size="120px"
            color="green.400"
            thickness="10px"
          >
            <CircularProgressLabel fontSize="xl">
              {Math.round(submissionPercentage)}%
            </CircularProgressLabel>
          </CircularProgress>
          <Text fontSize="sm" color="gray.600" mt={2}>
            {submittedStudents}/{totalStudents} students submitted
          </Text>
        </Box>
        {/* Deadline Tracker */}
        <Box
          p={4}
          borderWidth="1px"
          borderRadius="lg"
          boxShadow="md"
          bg="white"
          w="100%"
          h="50%"
          textAlign="center"
        >
          <Text fontSize="lg" fontWeight="bold" mb={4} color="black">
            Deadline Tracker
          </Text>
          <CircularProgress
            value={deadlinePercentage}
            size="120px"
            thickness="10px"
            color={
              deadlinePercentage >= 98 // If 90% or more time has passed, or the deadline is over, show red
                ? "red.400"
                : deadlinePercentage >= 75 // If 75-89% time passed, show orange
                ? "orange.400"
                : "blue.400" // Default to blue for safe range
            }
          >
            <CircularProgressLabel fontSize="xl">
              {Math.round(deadlinePercentage)}%
            </CircularProgressLabel>
          </CircularProgress>
          <Text fontSize="sm" color="gray.600" mt={2}>
            {Math.round(deadlinePercentage)}% time passed
          </Text>
          {deadlinePercentage >= 100 && (
            <Text fontSize="sm" color="red.500" mt={2}>
              Deadline passed!
            </Text>
          )}
        </Box>
      </VStack>
    </Flex>
  );
};

export default AssignmentDetails;

import { Box, CircularProgress, CircularProgressLabel } from "@chakra-ui/react";

const ProgressCircle = ({ value }) => {
  return (
    <Box display="flex" justifyContent="center" alignItems="center">
      <CircularProgress value={value} size="60px" thickness="8px" color="green.400">
        <CircularProgressLabel fontSize="sm">{value}%</CircularProgressLabel>
      </CircularProgress>
    </Box>
  );
};

export default ProgressCircle;

import React from "react";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";
import { Box, Text } from "@chakra-ui/react";

const CgpaAnalysis = ({ cgpaData }) => {
  // Prepare data for the bar chart
  const data = cgpaData.map((cgpa, index) => ({
    semester: `Semester ${index + 1}`,
    cgpa,
  }));

  return (
    <Box
      p="6"
      borderRadius="2xl"
      bg="linear-gradient(135deg, #0f2027, #203a43, #2c5364)"
      boxShadow="0px 4px 20px rgba(0, 0, 0, 0.3)"
    >
      <Text
        fontSize="xl"
        fontWeight="bold"
        mb="4"
        textAlign="center"
        color="white"
        textTransform="uppercase"
      >
        🚀 CGPA Analysis
      </Text>

      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data} margin={{ top: 20, right: 30, left: 0, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" strokeOpacity={0.2} />
          <XAxis dataKey="semester" stroke="white" tick={{ fontSize: 12, fill: "white" }} />
          <YAxis domain={[6, 10]} stroke="white" tick={{ fontSize: 12, fill: "white" }} />
          <Tooltip
            contentStyle={{
              background: "#2c5364",
              borderRadius: "10px",
              color: "white",
              border: "1px solid #00c6ff",
            }}
          />
          <Bar
            dataKey="cgpa"
            fill="url(#neonGradient)"
            radius={[10, 10, 0, 0]}
            barSize={40}
          />
          <defs>
            <linearGradient id="neonGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#00c6ff" stopOpacity={1} />
              <stop offset="100%" stopColor="#0072ff" stopOpacity={0.8} />
            </linearGradient>
          </defs>
        </BarChart>
      </ResponsiveContainer>
    </Box>
  );
};

export default CgpaAnalysis;

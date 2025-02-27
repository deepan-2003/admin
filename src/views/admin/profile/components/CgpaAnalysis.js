import React from "react";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import { Box, Text } from "@chakra-ui/react";

const CgpaAnalysis = ({ data }) => {
  return (
    <Box
      p="6"
      borderRadius="2xl"
      bg="rgba(255, 255, 255, 0.2)"
      backdropFilter="blur(10px)"
      boxShadow="0px 4px 15px rgba(0, 0, 0, 0.1)"
    >
      <Text
        fontSize="xl"
        fontWeight="bold"
        mb="4"
        textAlign="center"
        color="gray.800"
        textTransform="uppercase"
      >
        📊 CGPA Analysis
      </Text>

      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data} margin={{ top: 20, right: 30, left: 0, bottom: 0 }}>
          <defs>
            <linearGradient id="colorGpa" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#ff7e5f" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#feb47b" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" strokeOpacity={0.2} />

          {/* Customize XAxis Font */}
          <XAxis
            dataKey="semester"
            stroke="gray"
            tick={{
              fontSize: 14, // Adjust font size
              fontWeight: 500, // Adjust font weight
              fill: "gray.800", // Adjust font color
            }}
          />

          {/* Customize YAxis Font */}
          <YAxis
            domain={[6, 10]}
            stroke="gray"
            tick={{
              fontSize: 14, // Adjust font size
              fontWeight: 500, // Adjust font weight
              fill: "gray.800", // Adjust font color
            }}
          />

          {/* Customize Tooltip Font */}
          <Tooltip
            contentStyle={{
              background: "rgba(255, 255, 255, 0.7)",
              borderRadius: "10px",
              boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.1)",
              backdropFilter: "blur(5px)",
              fontSize: 14, // Adjust font size
              fontWeight: 500, // Adjust font weight
              color: "gray.800", // Adjust font color
            }}
          />

          {/* Customize Legend Font */}
          <Legend
            wrapperStyle={{
              paddingTop: "10px",
              fontSize: 14, // Adjust font size
              fontWeight: 500, // Adjust font weight
              color: "gray.800", // Adjust font color
            }}
          />

          {/* Line Chart Data */}
          <Line
            type="monotone"
            dataKey="cgpa"
            stroke="#ff7e5f"
            strokeWidth={3}
            fillOpacity={1}
            fill="url(#colorGpa)"
            dot={{ r: 6, strokeWidth: 3, stroke: "#ff7e5f", fill: "#fff" }}
          />
        </LineChart>
      </ResponsiveContainer>
    </Box>
  );
};

export default CgpaAnalysis;
import React from "react";
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";
import { Box, Text } from "@chakra-ui/react";

// Custom Gradient Area Chart Design
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
        📈 CGPA Analysis (Glass UI)
      </Text>

      <ResponsiveContainer width="100%" height={300}>
        <AreaChart data={data} margin={{ top: 20, right: 30, left: 0, bottom: 0 }}>
          <defs>
            <linearGradient id="colorCgpa" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#6a11cb" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#2575fc" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" strokeOpacity={0.2} />
          <XAxis dataKey="semester" stroke="gray" tick={{ fontSize: 12 }} />
          <YAxis domain={[6, 10]} stroke="gray" />
          <Tooltip
            contentStyle={{
              background: "rgba(255, 255, 255, 0.7)",
              borderRadius: "10px",
              boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.1)",
              backdropFilter: "blur(5px)",
            }}
          />
          <Area
            type="monotone"
            dataKey="cgpa"
            stroke="#6a11cb"
            strokeWidth={3}
            fillOpacity={1}
            fill="url(#colorCgpa)"
            dot={{ r: 6, strokeWidth: 3, stroke: "#6a11cb", fill: "#fff" }}
          />
        </AreaChart>
      </ResponsiveContainer>
    </Box>
  );
};

export default CgpaAnalysis;

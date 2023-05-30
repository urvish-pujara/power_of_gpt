import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const AreaGraph = ({ data }) => {
  return (
    <AreaChart width={600} height={400} data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Area type="monotone" dataKey="food_sales" stackId="1" stroke="#8884d8" fill="#8884d8" />
      <Area type="monotone" dataKey="alcohol_sales" stackId="1" stroke="#82ca9d" fill="#82ca9d" />
    </AreaChart>
  );
};

export default AreaGraph;

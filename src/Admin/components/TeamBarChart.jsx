// TeamBarChart.jsx
import React from 'react';
import {
  BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer,
} from 'recharts';

const data = [
  { name: 'L1', value: 17 },
  { name: 'L2', value: 3 },
  { name: 'L3', value: 12 },
  { name: 'COE', value: 24 },
  { name: 'HOS', value: 4 },
  { name: 'TL', value: 1 },
];

const colors = {
  L1: '#1abc9c',
  L2: '#f39c12',
  L3: '#1abc9c',
  COE: '#9b59b6',
  HOS: '#3498db',
  TL: '#8e44ad',
};

const TeamBarChart = () => {
  return (
    <div className="p-4 max-w-4xl mx-auto">
      <div className="flex justify-between items-center mb-4">
        <h6 className="text-lg  font-500 text-gray-700" style={{ color: '#0B60B0' }}>Team Data</h6>
        <select className="border border-gray-300 rounded px-2 py-1">
          <option>Week</option>
          <option>Month</option>
        </select>
      </div>

      <div className="grid grid-cols-6 gap-4 mb-6">
        {data.map(item => (
          <div key={item.name} className="bg-white rounded shadow p-2 text-center">
            <div className="text-xl font-bold" style={{ color: colors[item.name] }}>{item.name}</div>
            <div className="text-gray-700 font-semibold">{item.value}</div>
          </div>
        ))}
      </div>

      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar
            dataKey="value"
            radius={[4, 4, 0, 0]}
            fill="#8884d8"
          >
            {data.map((entry, index) => (
              <cell key={`cell-${index}`} fill={colors[entry.name]} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default TeamBarChart;

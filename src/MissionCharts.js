import React from 'react';
import { PieChart, Pie, BarChart, Bar, XAxis, YAxis, Tooltip, Legend } from 'recharts';

const MissionCharts = ({ missions }) => {
  // Check if missions is undefined or an empty array
  if (!missions || missions.length === 0) {
    return <div>No data available for charts</div>;
  }

  // Filtering based on the 'successful' field (true/false)
  const successData = missions.filter(mission => mission.successful).length;
  const failureData = missions.filter(mission => !mission.successful).length;

  const priceData = missions.map(mission => ({ name: mission.mission, price: mission.price }));

  return (
    <div>
      <h2>Mission Charts</h2>
      <div>
        <h3>Success Percentage</h3>
        <PieChart width={300} height={300}>
          <Pie dataKey="value" isAnimationActive={false} data={[{ name: 'Success', value: successData }, { name: 'Failure', value: failureData }]} />
          <Tooltip />
        </PieChart>
      </div>
      <div>
        <h3>Price Range</h3>
        <BarChart width={400} height={300} data={priceData}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="price" fill="#8884d8" />
        </BarChart>
      </div>
    </div>
  );
}

export default MissionCharts;

// SpaceVueDashboard.js

import React, { useState, useEffect } from 'react';
import Login from './Login';
import MissionTable from './MissionTable';
import MissionCharts from './MissionCharts';

const SpaceVueDashboard = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [missions, setMissions] = useState([]);

  useEffect(() => {
    // Fetch data from the provided URL
    fetch('https://www.ag-grid.com/example-assets/space-mission-data.json')
      .then(response => response.json())
      .then(data => setMissions(data))
      .catch(error => console.error('Error fetching mission data:', error));
  }, []);

  const handleLogin = () => {
    setLoggedIn(true);
  };

  return (
    <div>
      {!loggedIn ? (
        <Login onLogin={handleLogin} />
      ) : (
        <div>
          <h1>SpaceVue Dashboard</h1>
          <MissionTable missions={missions} />
          <MissionCharts missions={missions} />
        </div>
      )}
    </div>
  );
};

export default SpaceVueDashboard;

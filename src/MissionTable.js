// MissionTable.js

import React, { useState, useEffect } from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';

const MissionTable = () => {
  const [missions, setMissions] = useState([]);

  useEffect(() => {
    // Fetch data from the provided URL
    fetch('https://www.ag-grid.com/example-assets/space-mission-data.json')
      .then(response => response.json())
      .then(data => setMissions(data))
      .catch(error => console.error('Error fetching mission data:', error));
  }, []);

  // AG-Grid column definitions
  const columnDefs = [
    { headerName: 'Mission Name', field: 'mission' },
    { headerName: 'Launch Company', field: 'company' },
    { headerName: 'Location', field: 'location' },
    { headerName: 'Date & Time', field: 'date', sortable: true },
    { headerName: 'Rocket Type', field: 'rocket' },
    { headerName: 'Price', field: 'price', sortable: true },
    { headerName: 'Outcome', field: 'successful'},
  ];

  // AG-Grid default grid options
  const defaultColDef = {
    sortable: true,
    filter: true,
  };

  return (
    <div className="ag-theme-alpine" style={{ height: 400, width: '100%' }}>
      <AgGridReact
        columnDefs={columnDefs}
        rowData={missions}
        defaultColDef={defaultColDef}
      />
    </div>
  );
};

export default MissionTable;

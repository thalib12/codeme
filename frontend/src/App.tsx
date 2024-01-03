import React, { useEffect, useState } from 'react';
import './App.css';
import StudentAttendanceTable from './components/StudentTable';
import { Tabs } from 'antd'
import AddStudent from './components/AddStudent';


function App() {




  return (
    <div className="App">
      <Tabs
        defaultActiveKey="1"
        tabPosition="left"
        items={[
          {
            label: `Add Students`,
            key: "1",
            children: <AddStudent />,
          }, {
            label: `Attendance`,
            key: "2",
            children: <StudentAttendanceTable />,
          },

          {
            label: `Attendance Report`,
            key: "3",
            children: "Attendance Report",
          }]}
      />

    </div>
  );
}

export default App;

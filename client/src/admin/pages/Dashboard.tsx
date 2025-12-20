import React from 'react';

const Dashboard: React.FC = () => {
  return (
    <div>
      <h1>Admin Dashboard</h1>
      <p>Show:</p>
      <ul>
        <li>Total announcements</li>
        <li>Pending forms</li>
        <li>Staff count</li>
      </ul>
      <p>(fetch from backend using admin APIs)</p>
    </div>
  );
};

export default Dashboard;

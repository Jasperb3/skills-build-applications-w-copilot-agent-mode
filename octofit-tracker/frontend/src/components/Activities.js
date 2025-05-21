import React, { useEffect, useState } from 'react';

function Activities() {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    fetch('https://psychic-adventure-6944rv56rp5f9j9-8000.app.github.dev/api/activities/')
      .then(response => response.json())
      .then(data => setActivities(data))
      .catch(error => console.error('Error fetching activities:', error));
  }, []);

  return (
    <div className="container mt-4">
      <div className="card shadow">
        <div className="card-header bg-success text-white">
          <h1 className="h3 mb-0">Activities</h1>
        </div>
        <div className="card-body">
          <table className="table table-striped table-hover">
            <thead className="thead-dark">
              <tr>
                <th>User</th>
                <th>Activity Type</th>
                <th>Duration (minutes)</th>
              </tr>
            </thead>
            <tbody>
              {activities.map(activity => (
                <tr key={activity._id}>
                  <td>{activity.user && activity.user.username ? activity.user.username : activity.user}</td>
                  <td>{activity.activity_type}</td>
                  <td>{activity.duration}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Activities;

import React, { useState, useEffect, Fragment } from 'react';
import { Header, Icon, List, Container } from 'semantic-ui-react';
import axios from 'axios';
import { IActivity } from '../models/activity';
import NavBar from '../../features/NavBar';
import ActivityDashboard from '../../features/activities/dashboard/ActivityDashboard';


const App = () => {
  const [activities, setActivities] = useState<IActivity[]>([]);
  const [selectedActivity, setSelectedActivity] = useState<IActivity | null>(null);

  const handleSelectAcitivity = (id: string) => {
    setSelectedActivity(activities.filter(a => a.id === id)[0])
  }

  useEffect(() => {
    axios.get<IActivity[]>("http://localhost:5000/api/activities")
      .then((response) => {
        setActivities(response.data)
      });
  }, []);

  return (
    <>
      <NavBar />
      <Container style={{ marginTop: '7em' }}>
        <ActivityDashboard 
          activities={activities} 
          selectActivity={handleSelectAcitivity} 
          selectedActivity={selectedActivity!}
        />
      </Container>
    </>
  );
}

export default App;

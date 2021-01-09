import React, {useState, useEffect, Fragment} from 'react';
import axios from 'axios'
import {  Container, List } from 'semantic-ui-react'
import { IActivity } from '../modules/activity';
import NavBar from '../../features/nav/NavBar';
import ActivityDashboard from '../../features/activities/dashboard/ActivityDashboard';


const App = () => {
 const [activities, setActivities] = useState<IActivity[]>([]);

useEffect(() => {
  axios
  .get<IActivity[]>('http://localhost:5000/api/activities')
  .then(response => { 
        setActivities(response.data)
      });
    }, []); 

  return (
    <Fragment>
    <NavBar/>
    <Container>
        <ActivityDashboard activities={activities}></ActivityDashboard>
    </Container>    
   </Fragment>

     );
         };

export default App;

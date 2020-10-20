import React from 'react';
import { Container } from 'semantic-ui-react';
import NavBar from '../../features/NavBar';
import ActivityDashboard from '../../features/activities/dashboard/ActivityDashboard';
import {observer} from 'mobx-react-lite';
import { Route, withRouter, RouteComponentProps, Switch } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import HomePage from '../../features/home/HomePage';
import ActivityForm from '../../features/activities/form/ActivityForm';
import ActivityDetails from '../../features/activities/details/ActivityDetails';
import NotFound from './NotFound';

const App: React.FC<RouteComponentProps> = ({location}) => {

  return (
    <>
      <ToastContainer position='bottom-right'/>
      <Route exact path="/" component={HomePage} />
      <Route path={'/(.+)'} render={() => (
        <>
          <NavBar />
          <Container style={{ marginTop: '7em' }}>
            <Switch>
              <Route exact path="/activities" component={ActivityDashboard} />
              <Route exact path="/activities/:id" component={ActivityDetails} />
              <Route key={location.key} path={['/createActivity', '/manage/:id']} component={ActivityForm} />
              <Route component={NotFound}/>
            </Switch>
          </Container>
        </>
      )}/>
    </>
  );
}

export default withRouter(observer(App));

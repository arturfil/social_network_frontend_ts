import React from 'react';
import { Segment, Button, Header, Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <Segment placeholder>
      <Header icon>
        <Icon name="search" />
        Oops - The page you are trying to reach is not Found.
      </Header>
      <Segment.Inline>
        <Button as={Link} to="/activities" primary>
          Return to Activitie page
        </Button>
      </Segment.Inline>
    </Segment>
  )
}

export default NotFound;
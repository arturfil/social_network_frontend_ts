import React from 'react'
import { Grid, Icon, Segment } from 'semantic-ui-react'
import { format } from 'date-fns'
import { IActivity } from '../../../app/models/activity'

const ActivityDetailedInfo: React.FC<{activity: IActivity}> = ({activity}) => {
  return (
    <div>
      <Segment.Group>
        <Segment attached='top'>
          <Grid>
            <Grid.Column width={1}>
              <Icon size='large' color='teal' name='info'/>
            </Grid.Column>
            <Grid.Column width={15}>
              <p>{activity.description}</p>
            </Grid.Column>
          </Grid>
        </Segment>
        <Segment attached>
          <Grid verticalAlign='middle'>
            <Grid.Column width={1}>
              <Icon name='calendar' size='large' color='teal'/>
            </Grid.Column>
            <Grid.Column width={15}>
              <p>{format(activity.date, 'eeee do MMMM')} at {format(activity.date, 'h:mm a')} </p>
            </Grid.Column>
          </Grid>
        </Segment>
        <Segment attached>
          <Grid verticalAlign='middle'>
            <Grid.Column width={1}>
              <Icon name='marker' size='large' color='teal'/>
            </Grid.Column>
            <Grid.Column width={11}>
              <p>{activity.venue}, {activity.city}</p>
            </Grid.Column>
          </Grid>
        </Segment>
      </Segment.Group>
    </div>
  )
}

export default ActivityDetailedInfo

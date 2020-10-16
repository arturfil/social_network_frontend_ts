import React from 'react'
import { Header, Segment, Comment, Form, Button } from 'semantic-ui-react'

const ActivityDetailedChat = () => {
  return (
    <>
      <Segment textAlign='center'
        attached='top'
        inverted
        color='teal'
        style={{border: 'none'}}
      >
        <Header>Chat about this event</Header>
      </Segment>
      <Segment attached>
        <Comment.Group>

          <Comment>
            <Comment.Avatar src="/assets/user.png"/>
            <Comment.Content>
              <Comment.Author as='a'>Matt</Comment.Author>
              <Comment.Metadata>
                <div>Today at 4:45</div>
              </Comment.Metadata>
              <Comment.Text>How artistic!</Comment.Text>
              <Comment.Actions>
                <Comment.Action>Reply</Comment.Action>
              </Comment.Actions>
            </Comment.Content>
          </Comment>

          <Comment>
            <Comment.Avatar src="/assets/user.png"/>
            <Comment.Content>
              <Comment.Author as='a'>Joe Henderson</Comment.Author>
              <Comment.Metadata>
                <div>Today at 4:45</div>
              </Comment.Metadata>
              <Comment.Text>Faaanks!</Comment.Text>
              <Comment.Actions>
                <Comment.Action>Reply</Comment.Action>
              </Comment.Actions>
            </Comment.Content>
          </Comment>

          <Form reply>
            <Form.TextArea />
            <Button  
              content='Add Reply'
              labelPosition='left'
              icon='edit'
              primary
            />
          </Form>
        </Comment.Group>
      </Segment>
    </>
  )
}

export default ActivityDetailedChat

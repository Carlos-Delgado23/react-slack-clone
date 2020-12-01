import React from 'react'

import MessagesHeader from './MessagesHeader'
import MessageForm from './MessageForm'

import { Segment, Comment } from 'semantic-ui-react'

class Messages extends React.Component {
  render() {
    return (
      <>
        <MessagesHeader />

        <Segment>
          <Comment.Group className="messages">
            {/* Messages */}
          </Comment.Group>
        </Segment>

        <MessageForm />
      </>
    )
  }
}

export default Messages;

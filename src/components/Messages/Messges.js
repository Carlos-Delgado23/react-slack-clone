import React from 'react'
import firebase from '../../firebase'

import MessagesHeader from './MessagesHeader'
import MessageForm from './MessageForm'

import { Segment, Comment } from 'semantic-ui-react'

class Messages extends React.Component {
  state = {
    messagesRef: firebase.database().ref('messages'),
    user: this.props.currentUser,
    channel: this.props.currentChannel
  }


  render() {
    const { messagesRef, channel, user } = this.state

    return (
      <>
        <MessagesHeader />

        <Segment>
          <Comment.Group className="messages">
            {/* Messages */}
          </Comment.Group>
        </Segment>

        <MessageForm
          messagesRef={messagesRef}
          currentUser={user}
          currentChannel={channel}
        />
      </>
    )
  }
}

export default Messages;

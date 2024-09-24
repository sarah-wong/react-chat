import React from 'react'
import Message from './Message'

function ChatDisplay({messages, channel}) {
  return (
    <div className="chatDisplay">
        <em>This is the beginning of  <b>#{channel}</b> ...</em>
        {messages.map((msgData)=><Message {...msgData}/>)}
    </div>
  )
}

export default ChatDisplay
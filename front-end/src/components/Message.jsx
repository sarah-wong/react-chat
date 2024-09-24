import React from 'react'

function Message({username, icon, date, content}) {
  return (
    <div className="message">
        <img className="userIcon" alt="icon" src={icon}></img>
        <div className="msgContent">
            <b>{username}</b>&emsp;
            <span className="sentTime">{date.toString()}</span>
            <p>{content}</p>
        </div>
    </div>
  )
}

export default Message
import { Avatar } from '@mui/material'
import React from 'react'
import "./Message.css"

const Message = () => {
    return (
        <div className="message">
            <Avatar/>
            <div className="message__info">
                <h4>Harsh Varmora<span className="message__timestamp">this is time stamp</span></h4>
                <p>This is a message</p>
            </div>
        </div>
    )
}

export default Message

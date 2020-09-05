import React from 'react'
import UserInfo from './UserInfo'

function Comment(props) {
    return (
        <div className="Comment">
            <UserInfo user={props.author}/>
            <div className="Comment-text">
                <h1>{props.text}</h1>
            </div>
            <div className="Comment-date">
                <h1>{props.author.date}</h1>
            </div>
        </div>
    )
}

export default Comment
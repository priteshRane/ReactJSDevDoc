import React from 'react'

function Mailbox(props) {
    const unreadMessages = props.unreadMessages

    return (
        <div>
            <h1>Hello!</h1>
            {
                unreadMessages.length > 0 &&
                <h1>
                    You have {unreadMessages.length} unread messages.
                </h1>
            }
        </div>
    )
}

export default Mailbox
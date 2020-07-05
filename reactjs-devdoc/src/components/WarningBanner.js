import React from 'react'

function WarningBanner(props) {
    if (!props.warn) {
        return null
    }

    return (
        <div>
            Warning!
        </div>
    )
}

export default WarningBanner
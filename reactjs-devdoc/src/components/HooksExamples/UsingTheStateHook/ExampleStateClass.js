import React from 'react'

class ExampleStateClass extends React.Component {
    constructor(props) {
        super()
        this.state = { count: 0 }
    }

    render() {
        return (
            <div>
                <p>You Clicked {this.state.count} times</p>
                <button onClick={() => this.setState({count: this.state.count + 1})}>
                    Click me
                </button>
            </div>
        )
    }
}

export default ExampleStateClass
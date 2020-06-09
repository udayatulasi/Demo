import React, { Component } from 'react'

 class Userinput extends Component {
    render() {
        return (
            <div>
                <input value={this.props.username} onChange={this.props.Handler} />
            </div>
        )
    }
}

export default Userinput

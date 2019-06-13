import React, { Component } from 'react'

class Credit extends Component {


    render() {
        return (
            <div>
                <h1>Author</h1>
                <h4>{this.props.credit}</h4>
            </div>
        )
    }
}

export default Credit

import React, { Component } from 'react'

export default class Score extends Component {
    render() {
        return (
            <div>
                <h3>Score</h3>
                {this.props.score}

            </div>
        )
    }
}

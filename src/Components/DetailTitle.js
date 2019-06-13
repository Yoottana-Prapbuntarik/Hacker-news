import React, { Component } from 'react'

export default class DetailTitle extends Component {
    render() {
        return (
            <div>
                <p className="diplay-3">
                {this.props.detail}
                </p>
            </div>
        )
    }
}

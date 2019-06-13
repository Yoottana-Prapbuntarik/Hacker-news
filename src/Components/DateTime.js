import React, { Component } from 'react'

class DateTime extends Component {
    render() {
        return (
            <div>
                <h3>DateTime</h3>
                {this.props.date}
            </div>
        )
    }
}
export default DateTime;
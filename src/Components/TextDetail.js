import React, { Component } from 'react'

class TextDetail extends Component {
    render() {
        return (
            <div className="mt-2">
                {this.props.Text}
            </div>
        )
    }
}

export default TextDetail

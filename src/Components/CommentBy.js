import React, { Component } from 'react'
class CommentBy extends Component {
    render() {
        return (
            <div className="my-2">
                <h3>name : {this.props.By}</h3>
            </div>
        )
    }
}

export default CommentBy

import React, { Component } from 'react'

class Score extends Component {
    
    render() {
        return (
            <div>
                <h4 style={{ fontFamily: 'san-serif', color: 'red' }}>Score</h4>
                <p style={{ fontFamily: 'san-serif', color: 'red', marginRight: '18px' }}>{this.props.score}</p>
            </div>
        )
    }
}
export default Score;

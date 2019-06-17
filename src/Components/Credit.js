import React, { Component } from 'react'

class Credit extends Component {

    render() {
        return (
            <div>
                <h1>Author</h1>
                <p className="mt-4">{this.props.credit}</p>
                <div style={{
                    position: 'absolute',
                    content: " ",
                    width: '20%',
                    height: '2px',
                    left: '40%',
                    background: 'rgb(0, 135, 255)',
                }}>
                </div>
            </div >
        )
    }
}
export default Credit;

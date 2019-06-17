import React, { Component } from 'react'
import Header from './Components/Header';
class Error extends Component {
    render() {
        return (
            <div>
                <Header/>
                <div style={{marginTop:'250px'}} className="display-4 text-center">
                    404 NOT FOUND <br />
                    <h5 style={{marginTop:'20px'}}>Unable to connect page</h5>
                </div>
            </div>
        )
    }
}

export default Error;

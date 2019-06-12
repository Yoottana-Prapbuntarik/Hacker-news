import React, { Component } from 'react'

export default class Footer extends Component {
    render() {
        return (
            <div className="container" style={{marginBottom:'10px'}}>
                <div className="row">
                    <div className="col-12">
                    <hr/>
                        © The Hacker News, 2019. All Rights Reserved.
                    </div>
                </div>
            </div>
        )
    }
}

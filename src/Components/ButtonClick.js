import React, { Component } from 'react'
import { Link } from 'react-router-dom';


export default class ButtonClick extends Component {
    render() {
        let { linkName, hrefLink } = this.props;
        return (
            <div>
                <Link className="btn btn-primary my-3 w-100" to={hrefLink}>{linkName}</Link>
            </div>
        )
    }
}

import React, { Component } from 'react'

class DateTime extends Component {
    
    unixTimeStamp(t) {
        let newDate = new Date(t * 1000);
        let day = newDate.getDay();
        let month = newDate.getMonth();
        let year = newDate.getFullYear();
        let hour = newDate.getHours();
        let min = newDate.getMinutes();
        return day + '/' + month + '/' + year + '   ' + hour + ':' + min;
    }
    render() {
        return (
            <div>
                {
                }
                <h5 style={{ fontFamily: 'san-serif', color: 'blue' }}>DateTime</h5>
                <p style={{ fontFamily: 'san-serif', color: 'blue' }}>
                    {this.unixTimeStamp(`${this.props.date}`)}
                </p>
            </div>
        )
    }
}
export default DateTime;
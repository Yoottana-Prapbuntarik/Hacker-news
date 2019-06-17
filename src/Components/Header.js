import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class Header extends Component {
    render() {
        return (
            <div className=" text-white col-12" style={{ background: '#395697'}}>
                <Link style={{textDecoration:'none', color:'#fff'}} to='/'>
                <h4 className="py-4" style={{ marginLeft: '90px' }}>
                    The Hacker news
                </h4>
                </Link>
            </div>
        )
    }
}

export default Header;

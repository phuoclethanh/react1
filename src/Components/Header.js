import React, { Component } from 'react';

class Header extends Component {
    
    render() {
        return (
            <div className="jumbotron text-center">
            <h1 className="display-3">Quản lý thành viên bằng React JS</h1>
            <p className="lead">với dữ liệu json</p>
            <hr className="my-2" />
          </div>  
        );
    }
}

export default Header;
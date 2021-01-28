import React, { Component } from 'react';

class TableDatarow extends Component {
    convertPermission = () => {
        if (parseInt(this.props.quyen) === 1 ) {return "Admin"}
        else if (parseInt(this.props.quyen) === 2) {return "Mod"}
        else {return "User" }
    }

    editUser = () => {
        this.props.editUser();
        this.props.setUsereditstatus()
    }
    
    deleteButtonclick = (idUser) => {
        this.props.deleteButtonclick(idUser)
    }

    render() {
     
        return (
            <tr>
                <td>{this.props.stt+1}</td>
                <td>{this.props.ten}</td>
                <td>{this.props.sdt}</td>
                <td>{this.convertPermission()}</td>
                <td>
                <div className="btn-group">
                    <div onClick={(user)=>this.editUser(user)} className="btn btn-warning">Sua</div>
                    <div onClick={()=>this.deleteButtonclick(this.props.id)} className="btn btn-danger">Xoa</div>
                </div>
                </td>
            </tr>
        );
    }
}

export default TableDatarow;
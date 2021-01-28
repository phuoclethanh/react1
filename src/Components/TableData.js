import React, { Component } from 'react';
import TableDatarow from './TableDatarow';

class TableData extends Component {
    deleteButtonclick = (idUser) => {
                this.props.deleteUser(idUser)
            }
    render() {
        

        return (
            <div className="col">
                <table className="table table-striped table-hover">
                    <thead className="thead-inverse">
                    <tr>
                        <th>STT</th>
                        <th>Tên</th>
                        <th>ĐIện thoại</th>
                        <th>Quyền</th>
                        <th>Thao tác</th>
                    </tr>
                    </thead>
                        <tbody>
                            {
                             this.props.DataUser.map((value,key)=>{
                                 return <TableDatarow deleteButtonclick={(idUser)=>this.deleteButtonclick(idUser)} id={value.id} setUsereditstatus={()=>this.props.setUsereditstatus()} editUser ={(user)=>this.props.editUser(value)} stt = {key} ten={value.name} sdt={value.tel} quyen={value.Permission}/>
                             })
                            }  
                        </tbody>
                </table>
                </div>
        );
    }
}

export default TableData;
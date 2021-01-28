import React, { Component } from 'react';

class EditUser extends Component {
    constructor(props) {
        super(props);
        this.state={
            id:this.props.userEditObject.id, //shift +alt + down
            name:this.props.userEditObject.name,
            Permission:this.props.userEditObject.Permission,
            tel:this.props.userEditObject.tel,
            info:{}
        }
    }

    isChange = (event) => {
        // console.log(event.target.name);
        // console.log(event.target.value);
        const ten = event.target.name;
        const giatri = event.target.value;

        this.setState({
            [ten]:giatri
        });
        
    }

    //get user info
    saveButon = () => {
        var info={}
        info.id=this.state.id;
        info.name=this.state.name;
        info.tel=this.state.tel;
        info.Permission=this.state.Permission;
        this.props.getUserinfo(info)
        this.props.setUsereditstatus()
    }

    render() {
        return (
                <form>
                    <div className="card border-warning mb-3">              
                    <div className="card-header">Edit User</div>
                    <div className="card-body">       
                    <div className="form-group">
                        <input onChange={this.isChange} defaultValue={this.state.name} type="text" name="name" id className="form-control" placeholder="Nhap User name" aria-describedby="helpId" />
                    </div>
                    <div className="form-group">
                        <input onChange={this.isChange} defaultValue={this.state.tel} type="text" name="tel" id className="form-control" placeholder="Nhap So dien thoai" aria-describedby="helpId" />
                    </div>
                    <div className="form-group">
                        <label htmlFor>Chon quyen mac dinh</label>
                        <select onChange={this.isChange} defaultValue={this.state.Permission} className="form-control" name="Permission" id>
                        <option selected>Choose...</option>
                        <option value={1}>Admin</option>
                        <option value={2}>Mod</option>
                        <option value={3}>User</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <div onClick={(info)=>this.saveButon(info)} className="btn btn-block btn-danger">Lưu</div>
                    </div>
                    </div>
                </div>
                </form>
        );
    }
}

export default EditUser;
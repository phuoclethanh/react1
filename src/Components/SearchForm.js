import React, { Component } from 'react';
import EditUser from './EditUser';

class SearchForm extends Component {
    constructor(props) {
        super(props);
        this.state={
            textSearch:'',
            userObj:{}
        }
    }
    
    hienthiNut = () => {
        if(this.props.hienthiNut === true){
            return (
                <button className="btn btn-block btn-secondary" onClick={()=>this.props.ketnoi()}>Them moi</button>
            )
        } else {
            return(
                <button className="btn btn-block btn-secondary" onClick={()=>this.props.ketnoi()}>Dong lai</button>
                )
        }
    }

    getUserinfo = (info) => {
            this.setState({
                userObj:info
            });
            this.props.getUserinfo(info)
        }

    isChange = (event) => {
        // console.log(event.target.value);
        this.setState({
            textSearch:event.target.value
        });
        this.props.ketnoi2(event.target.value);
    }

    isShowEditUser = () => {
        if (this.props.editUserstatus) {
            return <EditUser getUserinfo={(info)=>this.getUserinfo(info)} userEditObject={this.props.userEditObject} setUsereditstatus={()=>this.props.setUsereditstatus()}/>
        }
    }

   

    render() {
    
        return (
            <div className="col-12">
            {
                this.isShowEditUser()
            }
            <div className="col-12">
                
                <div className="btn-group" style={{width: '600px'}}>
                    <input onChange={(event)=>this.isChange(event)} type="text" className="form-control" name id aria-describedby="helpId" placeholder="Nhap tu khoa" />
                    <div className="btn btn-info" onClick = {()=>this.props.ketnoi2(this.state.textSearch)}>Tim</div>
                </div>
                <div className="btn btn-group">
                        {this.hienthiNut()}         
                   
                </div>
            </div>
            </div>

        );
    }
}

export default SearchForm;
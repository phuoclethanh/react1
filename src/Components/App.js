import '../App.css';
import Header from './Header';
import SearchForm from './SearchForm';
import TableData from './TableData';
import Adduser from './Adduser';
import React, { Component } from "react";
import DataUser from './Data.json';

class App extends Component {
    constructor(props) {
        super(props);
        this.state={
            trangthai:false,
            data:[],
            textSearch:'',   
            editUserstatus:false,
            userEditObject:'',
        }
    }

    
    componentWillMount() {
    // kiem tra xem xo localStorage nay chua
      if (localStorage.getItem('userData') === null) {
        localStorage.setItem('userData',JSON.stringify(DataUser));
    
      }
      else {
        var temp = JSON.parse(localStorage.getItem('userData'));
        this.setState({
          data:temp
        });
    }
  }
    
    
    kiemtratrangthai = () => {
        this.setState({
            trangthai: !this.state.trangthai
        });
    }

    checkConnect = (dl) => {
      this.setState({
        textSearch:dl
      });
    }

    getUserdata = (name,tel,Permission) => {
        const { v4: uuidv4 } = require('uuid');      
        var item={};
        item.id=uuidv4();;
        item.name=name;
        item.tel=tel;
        item.Permission=Permission;

        var items = this.state.data;
        items.push(item);
        this.setState({
          data:items
        });
          // day vao du lieu
      localStorage.setItem('userData',JSON.stringify(items));
      } 

      editFuntion = (user) => {
        this.setState({
          userEditObject:user
        });
      }

      setUsereditstatus = () => {
        this.setState({
          editUserstatus: !this.state.editUserstatus

        });

      }

      // get user info from EditUser.js
      getUserinfo = (info) => {
       this.state.data.map( (value,key) => {
         if (value.id === info.id ) {
           value.name = info.name;
           value.Permission = info.Permission;
           value.tel = info.tel;
         }
           return 0
       })
        // day vao du lieu
      localStorage.setItem('userData',JSON.stringify(this.state.data));
      }
      // delete user
      deleteUser = (idUser) => {
        var temData = this.state.data.filter(item => item.id !== idUser);
        this.setState({
          data:temData
        });
      // day vao du lieu
      localStorage.setItem('userData',JSON.stringify(temData));
      }

      
    render() {
        var kq = [];
        this.state.data.forEach((item)=>{
          if (item.name.indexOf(this.state.textSearch) !== -1) {
            kq.push(item)
          }
        })
        
        return (
            <div>
            <Header/>
            <div className="container">
              <div className="row">
                <SearchForm getUserinfo={(info) => this.getUserinfo(info)} userEditObject={this.state.userEditObject} editUserstatus={this.state.editUserstatus} setUsereditstatus={()=>this.setUsereditstatus()} ketnoi = {()=>this.kiemtratrangthai()} hienthiNut={this.state.trangthai} ketnoi2 = {(event)=>this.checkConnect(event)}/>
                <div className="col-12">
                  <hr />
                </div>
                <TableData deleteUser={(idUser)=>this.deleteUser(idUser)} setUsereditstatus={(status)=>this.setUsereditstatus(status)} DataUser = {kq} editUser ={(user)=>this.editFuntion(user)}/>
                <Adduser hienForm={this.state.trangthai} getdata = {(name,tel,Permission)=>this.getUserdata(name,tel,Permission)}/>
              </div>     
            </div>
          </div>
        );
    }
}

export default App;


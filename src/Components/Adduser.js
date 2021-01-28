import React, { Component } from 'react';

class Adduser extends Component {
    constructor(props) {
        super(props);
        this.state={
            trangthai:true,
            id:'',
            name:'',
            tel:'',
            Permission:''
        }
    }

    isChange = (event) => {
        const ten = event.target.name;
        const giatri = event.target.value;

        this.setState({
            [ten]:giatri
        });
    }

    abc = () => {
        this.props.getdata(this.state.name,this.state.tel,this.state.Permission);
        this.setState({
            id:'',
            name:'',
            tel:'',
            Permission:''
        });
    }

    hienthiForm = () => {
        if (this.props.hienForm===false) {
            return (
                <div className="col">    
                <form>
                <div className="card border-primary mb-3" style={{maxWidth: '18rem'}}>              
                <div className="card-header">Them moi User</div>
                <div className="card-body">       
                <div className="form-group">
                    <input onChange ={(event)=>this.isChange(event)} type="text" name="name" id className="form-control" placeholder="Nhap User name" aria-describedby="helpId" />
                </div>
                <div className="form-group">
                    <input onChange ={(event)=>this.isChange(event)} type="text" name="tel" id className="form-control" placeholder="Nhap So dien thoai" aria-describedby="helpId" />
                </div>
                <div className="form-group">
                    <label htmlFor>Chon quyen mac dinh</label>
                    <select onChange ={(event)=>this.isChange(event)} className="form-control" name="Permission" id>
                    <option selected>Choose...</option>
                    <option value={1}>Admin</option>
                    <option value={2}>Mod</option>
                    <option value={3}>User</option>
                    </select>
                </div>
                <div className="form-group">
                    <input type="reset" onClick={()=>this.abc()} className="btn btn-block btn-primary" value = "Them moi"/>
                </div>
                </div>
            </div>
            </form>
            </div>
            )
        }
    }
    // onClick={(name,tel,Permission)=>this.props.getdata(this.state.name,this.state.tel,this.state.Permission)} 
    render() {
        return (
                   <div>   
            {this.hienthiForm()}
            </div> 
           
        );
    }
}

export default Adduser;
import React, { Component } from 'react'
import { connect } from 'react-redux';
class DanhSachCuoc extends Component {

    renderDanhSachCuoc = () => {
        return this.props.danhSachCuoc.map((quanCuoc, index) => {
            return <div className="col-4 text-center mt-5" key={index}>
                <img style={{ width: 250 }} src={quanCuoc.hinhAnh} alt={quanCuoc.hinhAnh} />
                <br />
                <br />
                <span className="p-3 pl-5 pr-5 bg-warning mt-2" style={{ borderRadius: '5%', fontSize: 25 }}>Cược:
                <button onClick={()=>{ 
                    this.props.datCuoc(quanCuoc.ma,true);
                }} className="btn btn-success ml-2 mr-2" style={{fontSize:20}}>+</button>
                    <span className="text-success">{quanCuoc.diemCuoc}</span>
                <button onClick={()=>{
                    this.props.datCuoc(quanCuoc.ma,false);

                }} className="btn btn-success ml-2 mr-2" style={{fontSize:20}}>-</button>
                </span>
            </div>
        })
    }
    render() {
        return (
            <div className="row text-left mt-5">
                {this.renderDanhSachCuoc()}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        danhSachCuoc: state.BaiTapGameBauCuaReducer.danhSachCuoc
    }
}
//Tạo ra props là hàm cho component DanhSachCuoc
const mapDispatchToProps = (dispatch) => {
    return {
        datCuoc : (maQuanCuoc,tangGiam) => {
            console.log('Mã quân cược',maQuanCuoc);
            console.log('tangGiam',tangGiam);
            dispatch({
                type:'DAT_CUOC',
                ma:maQuanCuoc,
                tangGiam
            })
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(DanhSachCuoc)
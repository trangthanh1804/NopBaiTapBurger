import React, { Component } from 'react'
import {connect} from 'react-redux' //Thư viện kết nối react Component và redux store

class GioHangRedux extends Component {

    renderGioHang = () => {
        let { gioHang } = this.props;
        return gioHang.map((sanPhamGH, index) => {
            return <tr key={index}>
                <td>{sanPhamGH.maSP}</td>
                <td>{sanPhamGH.tenSP}</td>
                <td><img width="50" height="50" src={sanPhamGH.hinhAnh} /></td>
                <td>
                    <button className="btn btn-primary" onClick={() => {
                        this.props.tangGiamSoLuong(sanPhamGH.maSP,true)
                    }}>+</button>
                    {sanPhamGH.soLuong}
                    <button onClick={() => {
                        this.props.tangGiamSoLuong(sanPhamGH.maSP,false)

                    }} className="btn btn-primary">-</button>
                </td>
                <td>{sanPhamGH.gia}</td>
                <td>{sanPhamGH.soLuong * sanPhamGH.gia}</td>
                <td><button className="btn btn-danger" onClick={() => {
                    this.props.xoaGioHang(sanPhamGH.maSP)
                }}>Xóa</button></td>
            </tr>
        })
    }
    render() {
        console.log('giohagn',this.props.gioHang)
        return (
            <div>
                <h3>Giỏ hàng</h3>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Mã SP</th>
                            <th>Tên SP</th>
                            <th>Hình ảnh</th>
                            <th>Giá bán</th>
                            <th>Số lượng</th>
                            <th>Thành tiền</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderGioHang()}
                    </tbody>
                    <tfoot>
                        <tr>
                            <td colSpan="5"></td>
                            <td>Tổng tiền</td>
                            <td>{this.props.gioHang.reduce((tongTien,spGH,index)=>{
                                return tongTien += spGH.soLuong * spGH.gia
                            },0).toLocaleString()}</td>
                        </tr>
                    </tfoot>
                </table>
            </div>
        )
    }
}


//Hàm có nhiệm vụ biến đổi state của redux trở thành props của component
const mapStateToProps = (state) => { //state ứng rới rootReducer
    return {
        gioHang: state.GioHangReducer.stateGioHang  
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        xoaGioHang: (maSP) => {
            console.log(maSP);
            let action = {
                type:'XOA_GIO_HANG',
                maSP:maSP
            }
            //Dùng hàm dispatch của redux đưa dữ liệu lên reducer
            dispatch(action);
        },
        tangGiamSoLuong: (maSP,tangGiam) => {
            //xử lý dispatch
            dispatch({
                type:'TANG_GIAM_SO_LUONG',
                maSP,
                tangGiam
            })
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(GioHangRedux)
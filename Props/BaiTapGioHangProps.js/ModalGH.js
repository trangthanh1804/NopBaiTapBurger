import React, { Component } from 'react'

export default class ModalGH extends Component {

    renderGioHang = () => {
        let { gioHang } = this.props;
        return gioHang.map((sanPhamGH, index) => {
            return <tr key={index}>
                <td>{sanPhamGH.maSP}</td>
                <td>{sanPhamGH.tenSP}</td>
                <td><img width="50" height="50" src={sanPhamGH.hinhAnh} /></td>
                <td>
                    <button className="btn btn-primary" onClick={() => {
                        this.props.tangGiamSoLuong(sanPhamGH.maSP, true)
                    }}>+</button>
                    {sanPhamGH.soLuong}
                    <button onClick={() => {
                        this.props.tangGiamSoLuong(sanPhamGH.maSP, true)
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
    tinhTongTien = () => {
        return this.props.gioHang.reduce((tongTien, spGH, index) => {
            return tongTien += spGH.soLuong * spGH.gia;
        }, 0)
    }
    render() {
        return (
            <div className="container">
                <h3>Giỏ hàng</h3>
                <table className="table">
                    <thead>
                        <th>Mã SP</th>
                        <th>Tên SP</th>
                        <th>Hình ảnh</th>
                        <th>Số lượng</th>
                        <th>Đơn giá</th>
                        <th>Thành tiền</th>
                        <th></th>
                    </thead>
                    <tbody>
                        {this.renderGioHang()}
                    </tbody>
                    <tfoot>
                        <tr>
                            <td colSpan="5"></td>
                            <td>Tổng tiền</td>
                            <td>{this.tinhTongTien().toLocaleString()}</td>
                        </tr>
                    </tfoot>
                </table>
            </div>
        )
    }
}

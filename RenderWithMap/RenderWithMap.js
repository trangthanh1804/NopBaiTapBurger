import React, { Component } from 'react'

export default class RenderWithMap extends Component {

    danhSachSanPham = [
        { maSP: 1, tenSP: 'IPhone X', gia: 1000, hinhAnh: "https://picsum.photos/200/200" },
        { maSP: 2, tenSP: 'IPhone XS', gia: 1000, hinhAnh: "https://picsum.photos/200/200" },
        { maSP: 3, tenSP: 'IPhone XS MAX', gia: 1000, hinhAnh: "https://picsum.photos/200/200" },
    ]

    renderTable = () => {
        //render mangObject => jsx (mảng các thẻ tr ) => [<tr>...</tr>,<tr>...</tr>,<tr>...</tr>]
        return this.danhSachSanPham.map((sanPham, index) => {
            return <tr key={index}>
                <td>{sanPham.maSP}</td>
                <td>{sanPham.tenSP}</td>
                <td>{sanPham.gia}</td>
                <td><img src={sanPham.hinhAnh} alt={sanPham.hinhAnh} width={100} height={100} /></td>
                <td><button className="btn btn-danger">Xóa</button></td>
            </tr>
        });;
    }
    render() {
        return (
            <div className="container">
                <h3 className="text-primary">Danh mục sản phẩm</h3>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Mã SP</th>
                            <th>Tên SP</th>
                            <th>Giá</th>
                            <th>Hình Ảnh</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderTable()}
                    </tbody>
                </table>
            </div>
        )
    }
}

import React, { Component } from 'react'

export default class SanPhamProps extends Component {
    render() {
        let {sanPham,xemCT} = this.props;
        return (
            <div className="card text-left">
            <img height="300" className="card-img-top" src={sanPham.hinhAnh} alt />
            <div className="card-body">
                <h4 className="card-title">{sanPham.tenSP}</h4>
                <p className="card-text">{sanPham.giaBan}</p>
                <button onClick={()=>{
                    xemCT(sanPham)
                }} className="btn btn-success">Xem chi tiết</button>
            </div>
        </div>
        )
    }
}

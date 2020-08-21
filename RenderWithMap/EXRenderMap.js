import React, { Component } from 'react'

export default class EXRenderMap extends Component {

    arrProduct = [
        { "maSP": 1, "tenSP": "VinSmart Live", "manHinh": "AMOLED, 6.2, Full HD+", "heDieuHanh": "Android 9.0 (Pie)", "cameraTruoc": "20 MP", "cameraSau": "Chính 48 MP & Phụ 8 MP, 5 MP", "ram": "4 GB", "rom": "64 GB", "giaBan": 5700000, "hinhAnh": "./img/vsphone.jpg" },
        { "maSP": 2, "tenSP": "Meizu 16Xs", "manHinh": "AMOLED, FHD+ 2232 x 1080 pixels", "heDieuHanh": "Android 9.0 (Pie); Flyme", "cameraTruoc": "20 MP", "cameraSau": "Chính 48 MP & Phụ 8 MP, 5 MP", "ram": "4 GB", "rom": "64 GB", "giaBan": 7600000, "hinhAnh": "./img/meizuphone.jpg" },
        { "maSP": 3, "tenSP": "Iphone XS Max", "manHinh": "OLED, 6.5, 1242 x 2688 Pixels", "heDieuHanh": "iOS 12", "cameraSau": "Chính 12 MP & Phụ 12 MP", "cameraTruoc": "7 MP", "ram": "4 GB", "rom": "64 GB", "giaBan": 27000000, "hinhAnh": "./img/applephone.jpg" }
    ]

    renderProductList = () => {
        return this.arrProduct.map((product,index)=>{
            return <div classname="col-4" key={index}>
            <div className="card mr-5" style={{width:300}}>
                <img className="card-img-top" src={product.hinhAnh} alt="123" />
                <div className="card-body">
                    <h4 className="card-title">{product.tenSP}</h4>
                    <p className="card-text">{product.giaBan}</p>
                    <button className="btn btn-success">Xem chi tiết</button>
                </div>
            </div>
        </div>
        })
    }

    render() {
        return (
            <div className="container">
                <h3 className="text-success">Danh sách sản phẩm</h3>
                <div className="row">
                        {this.renderProductList()}
                </div>
            </div>
        )
    }
}

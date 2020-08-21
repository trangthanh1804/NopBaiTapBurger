import React, { Component } from 'react'
import SanPhamProps from './SanPhamProps'

export default class DemoPropsFunction extends Component {
    arrProduct = [
        { "maSP": 1, "tenSP": "VinSmart Live", "manHinh": "AMOLED, 6.2, Full HD+", "heDieuHanh": "Android 9.0 (Pie)", "cameraTruoc": "20 MP", "cameraSau": "Chính 48 MP & Phụ 8 MP, 5 MP", "ram": "4 GB", "rom": "64 GB", "giaBan": 5700000, "hinhAnh": "./img/vsphone.jpg" },
        { "maSP": 2, "tenSP": "Meizu 16Xs", "manHinh": "AMOLED, FHD+ 2232 x 1080 pixels", "heDieuHanh": "Android 9.0 (Pie); Flyme", "cameraTruoc": "20 MP", "cameraSau": "Chính 48 MP & Phụ 8 MP, 5 MP", "ram": "4 GB", "rom": "64 GB", "giaBan": 7600000, "hinhAnh": "./img/meizuphone.jpg" },
        { "maSP": 3, "tenSP": "Iphone XS Max", "manHinh": "OLED, 6.5, 1242 x 2688 Pixels", "heDieuHanh": "iOS 12", "cameraSau": "Chính 12 MP & Phụ 12 MP", "cameraTruoc": "7 MP", "ram": "4 GB", "rom": "64 GB", "giaBan": 27000000, "hinhAnh": "./img/applephone.jpg" }
    ]

    state = {
        sanPhamChiTiet :  { "maSP": 2, "tenSP": "Meizu 16Xs", "manHinh": "AMOLED, FHD+ 2232 x 1080 pixels", "heDieuHanh": "Android 9.0 (Pie); Flyme", "cameraTruoc": "20 MP", "cameraSau": "Chính 48 MP & Phụ 8 MP, 5 MP", "ram": "4 GB", "rom": "64 GB", "giaBan": 7600000, "hinhAnh": "./img/meizuphone.jpg" }

    }

    renderSanPham = () => {
        //render nội dung các sản phẩm 
        return this.arrProduct.map((sanPham, index) => {
            return <div className="col-4" key={index}>
                <SanPhamProps xemCT={this.xemChiTiet} sanPham={sanPham}/>             
            </div>
        })
    }

    xemChiTiet = (spClick) => {
        //setState của sản phẩm chi tiết => render lại giao diện
        this.setState({
            sanPhamChiTiet:spClick
        })
    }


    render() {
        return (
            <div className="container">
                <h3>Danh sách sản phẩm</h3>
                <div className="row">
                    {this.renderSanPham()}
                </div>

                <div className="row mt-5">
                    <div className="col-4">
                        <h3 className="text-center">
                            {this.state.sanPhamChiTiet.tenSP}
                        </h3>
                        <img src={this.state.sanPhamChiTiet.hinhAnh} 
                             style={{width:'100%'}} 
                        />
                    </div>
                    <div className="col-8">
                        <h3>Thông số kỹ thuật</h3>
                        <table class="table">
                            <tbody>
                                <tr>
                                    <td>Màn hình</td>
                                    <td>{this.state.sanPhamChiTiet.manHinh}</td>
                                </tr>
                                <tr>
                                    <td>Hệ điều hành</td>
                                    <td>{this.state.sanPhamChiTiet.heDieuHanh}</td>
                                </tr>
                                <tr>
                                    <td>Camera trước</td>
                                    <td>{this.state.sanPhamChiTiet.cameraTruoc}</td>
                                </tr>
                                <tr>
                                    <td>Camera sau</td>
                                    <td>{this.state.sanPhamChiTiet.cameraSau}</td>
                                </tr>
                                <tr>
                                    <td>RAM</td>
                                    <td>{this.state.sanPhamChiTiet.ram}</td>
                                </tr>
                                <tr>
                                    <td>ROM</td>
                                    <td>{this.state.sanPhamChiTiet.rom}</td>
                                </tr>
                            </tbody>
                           
                        </table>

                    </div>
                </div>


            </div>
        )
    }
}
{/* <div className="card text-left">
                    <img height="300" className="card-img-top" src={sanPham.hinhAnh} alt />
                    <div className="card-body">
                        <h4 className="card-title">{sanPham.tenSP}</h4>
                        <p className="card-text">{sanPham.giaBan}</p>
                        <button onClick={()=>{
                            this.xemChiTiet(sanPham)
                        }} className="btn btn-success">Xem chi tiết</button>
                    </div>
                </div> */}
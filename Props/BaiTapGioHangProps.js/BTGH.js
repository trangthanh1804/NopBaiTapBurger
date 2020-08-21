import React, { Component } from 'react'
import DSSP from './DSSP'
import ModalGH from './ModalGH'

export default class BTGH extends Component {

    arrProduct = [
        { "maSP": 1, "tenSP": "VinSmart Live", "manHinh": "AMOLED, 6.2, Full HD+", "heDieuHanh": "Android 9.0 (Pie)", "cameraTruoc": "20 MP", "cameraSau": "Chính 48 MP & Phụ 8 MP, 5 MP", "ram": "4 GB", "rom": "64 GB", "giaBan": 5700000, "hinhAnh": "./img/vsphone.jpg" },
        { "maSP": 2, "tenSP": "Meizu 16Xs", "manHinh": "AMOLED, FHD+ 2232 x 1080 pixels", "heDieuHanh": "Android 9.0 (Pie); Flyme", "cameraTruoc": "20 MP", "cameraSau": "Chính 48 MP & Phụ 8 MP, 5 MP", "ram": "4 GB", "rom": "64 GB", "giaBan": 7600000, "hinhAnh": "./img/meizuphone.jpg" },
        { "maSP": 3, "tenSP": "Iphone XS Max", "manHinh": "OLED, 6.5, 1242 x 2688 Pixels", "heDieuHanh": "iOS 12", "cameraSau": "Chính 12 MP & Phụ 12 MP", "cameraTruoc": "7 MP", "ram": "4 GB", "rom": "64 GB", "giaBan": 27000000, "hinhAnh": "./img/applephone.jpg" }
    ]

    //Xác định state gioHang tại component BTGH vì có chứa nút xử lý thêm giỏ hàng và giao diện giỏ hàng

    state = {
        gioHang: [
            // { maSP: 1, tenSP: 'VinSmart Live', hinhAnh: './img/vsphone.jpg', gia: 1000, soLuong: 1 }
        ]
    }


    themGioHang = (sanPhamClick) => {
        console.log(sanPhamClick);

        //Từ sản phẩm được click tạo ra sản phẩm giỏ hàng
        let spGioHang = {
            maSP: sanPhamClick.maSP,
            tenSP:sanPhamClick.tenSP,
            hinhAnh:sanPhamClick.hinhAnh,
            gia:sanPhamClick.giaBan,
            soLuong:1
        }
        //Định nghĩa hàm thay đổi state tại nơi chứa state
        //Tạo giỏ hàng mới
        let gioHangCapNhat = [...this.state.gioHang];

        //Kiểm sản phẩm đã có trong giỏ hàng hay chưa
        let index = gioHangCapNhat.findIndex(spGH => spGH.maSP === spGioHang.maSP);
        if(index !== -1){
            gioHangCapNhat[index].soLuong += 1;
        }else {
            gioHangCapNhat.push(spGioHang);
        }


        //Cập nhật giỏ hàng cũ bằng phương thức setState
        this.setState({
            gioHang:gioHangCapNhat
        });
        
    }

    xoaGioHang = (maSP) => {
        let gioHangCapNhat = [...this.state.gioHang]
        let index = gioHangCapNhat.findIndex(spGioHang => spGioHang.maSP === maSP);
        if(index !== -1){
            gioHangCapNhat.splice(index,1);
        }
        //setState giỏ hàng
        this.setState({
            gioHang:gioHangCapNhat
        }) 
    }

    tangGiamSoLuong = (maSP,tangGiam) => { //tangGiam = true là tăng, tangGiam = false giảm
        //Tìm ra sanPham trong giỏ hàng => tăng giảm soLuong
        let gioHangCapNhat = [...this.state.gioHang];

        let index = gioHangCapNhat.findIndex(spGH => spGH.maSP === maSP);

        if(index !== -1){
            if(tangGiam){
                gioHangCapNhat[index].soLuong += 1;
            }else {
                if(gioHangCapNhat[index].soLuong >1) {
                    gioHangCapNhat[index].soLuong -= 1;
                }
                else {
                    alert('Số lượng tối thiểu là 1!')
                }
            }
        }
        //setState gán state giỏ hàng = giỏ hàng vừa xử lý tăng
        this.setState({
            gioHang:gioHangCapNhat
        })

    }



    render() {
        return (
            <div className="container">
                <DSSP themGioHang={this.themGioHang} mangSanPham={this.arrProduct} />
                <ModalGH tangGiamSoLuong={this.tangGiamSoLuong} xoaGioHang={this.xoaGioHang} gioHang={this.state.gioHang} />
            </div>
        )
    }
}

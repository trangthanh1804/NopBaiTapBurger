import React, { Component } from 'react'
import style from './BaiTapGameBauCua.module.css'
import DanhSachCuoc from './DanhSachCuoc'
import XucXac from './XucXac'
import DiemThuong from './DiemThuong'
export default class BaiTapGameBauCua extends Component {
    render() {
        return (
            <div className={`container-fluid ${style.gameBauCua}`}>
                <div className="display-4 text-center text-danger">BÀI TẬP BẦU CUA CYBERSOFT</div>
                <div className="row">
                    <div className="col-12 text-center">
                        <DiemThuong />
                    </div>
                </div>
                <div className="row">
                    <div className="col-8">
                        <DanhSachCuoc />
                    </div>
                    <div className="col-4">
                        <XucXac />
                    </div>
                </div>
            </div>
        )
    }
}

import React, { Component } from 'react'
import SP from './SP';

export default class DSSP extends Component {

    renderSanPham = () => {


        let { mangSanPham } = this.props;
        return mangSanPham.map((sanPham, index) => {
            return <div className="col-4" key={index}>
                <SP themGioHang={this.props.themGioHang} sanPham={sanPham} />
            </div>
        })
    }


    render() {
        return (
            <div>
                <div className="text-center">Danh sách sản phẩm</div>
                <div className="row">
                    {this.renderSanPham()}
                </div>
            </div>
        )
    }
}

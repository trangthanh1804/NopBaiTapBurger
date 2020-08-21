import React, { Component } from 'react'

export default class BaiTapChonXe extends Component {

    state = {
        srcImg: './img/red-car.jpg'
    }


    changeColor = (newImgSrc) => {
        this.setState({
            srcImg: newImgSrc
        })
    }


    render() {
        return (
            <div className="container-fluid">
                <h3 className="text-center">BÀI TẬP CHỌN XE</h3>
                <div className="row">
                    <div className="col-6">
                        <img className="w-100" src={this.state.srcImg} alt='red_car.jpg' />
                    </div>
                    <div className="col-6">
                        <div className="row">
                            <div className="col-3">
                                <button className="btn btn-outline-danger"
                                    onClick={() => {
                                        this.changeColor('./img/red-car.jpg')
                                    }}
                                >Red car</button>
                            </div>
                            <div className="col-3">
                                <button style={{ border: '1px solid #888' }}
                                    className="btn"
                                    onClick={() => {
                                        this.changeColor('./img/silver-car.jpg')
                                    }}>Silver car</button>
                            </div>
                            <div className="col-3">
                                <button style={{ border: '1px solid gray' }} className="btn btn-outline"
                                    onClick={() => {
                                        this.changeColor('./img/steel-car.jpg')
                                    }}
                                >Steel car</button>
                            </div>
                            <div className="col-3">
                                <button className="btn btn-outline-dark"
                                    onClick={() => {
                                        this.changeColor('./img/black-car.jpg')
                                    }}
                                >Black car</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

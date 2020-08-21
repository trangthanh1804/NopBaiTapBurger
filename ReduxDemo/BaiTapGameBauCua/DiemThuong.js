import React, { Component } from 'react'
import {connect} from 'react-redux'


 class DiemThuong extends Component {
    render() {
        return (
            <div className="text-center mt-5">
                <span style={{fontSize:25,borderRadius:'10px',border:'5px solid #000'}} 
                        className="p-3 bg-warning" >Tiền thưởng: 
                <span className="text-success">{this.props.diemThuong} điểm</span></span>
            </div>
        )
    }
}

const mapStateToProps = (state) => { //state là rootReducer
    return {
        diemThuong: state.BaiTapGameBauCuaReducer.diemThuong, //
    }
}

export default connect(mapStateToProps)(DiemThuong)
import React, { Component } from "react";
import { connect } from "react-redux";
class BanCuoc extends Component {
  render() {
    return (
      <div className="container">
        <h3 className="display-4 text-center">BÀI TẬP GAME XÚC XẮC</h3>
        <div className="row text-center">
          <div className="col-4">
            <button
              onClick={() => {
                this.props.dispatch({
                  type: "DAT_CUOC_XUC_XAC",
                  banChon: "TÀI",
                });
              }}
              className="bg-danger display-4 p-5 text-light"
            >
              TÀI
            </button>
          </div>
          <div className="col-4">
            <div className="d-flex justify-content-center">
              {this.props.mangXucXac.map((xucXac, index) => (
                <img key={index} src={xucXac.hinhAnh} width={50} height={50} />
              ))}
            </div>
          </div>
          <div className="col-4">
            <button
              onClick={() => {
                this.props.dispatch({
                  type: "DAT_CUOC_XUC_XAC",
                  banChon: "XỈU",
                });
              }}
              className="bg-dark display-4 p-5 text-light"
            >
              XỈU
            </button>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    mangXucXac: state.BaiTapGameXucXacReducer.mangXucXac,
  };
};
export default connect(mapStateToProps)(BanCuoc);
//state=>{return{key:value}}~ state=>({key:value})

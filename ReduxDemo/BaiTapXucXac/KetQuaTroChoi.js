import React, { Component } from "react";
import { connect } from "react-redux";
class KetQuaTroChoi extends Component {
  render() {
    return (
      <div className="container text-center display-4">
        <div>
          bạn chọn : <span className="text-danger">{this.props.banChon}</span>
        </div>
        <div>
          số bàn thắng :{" "}
          <span className="text-success">{this.props.soBanThang}</span>
        </div>
        <div>
          tổng số bàn chơi :{" "}
          <span className="text-warning">{this.props.soBanChoi}</span>
        </div>
        <button
          onClick={() => {
            var number = 0;
            let randomXiNgau = setInterval(() => {
              number += 1;
              this.props.dispatch({
                type: "RANDOM_XI_NGAU",
              });
              if (number > 10) {
                //dừng hàm random
                clearInterval(randomXiNgau);
                //random 10 lần gọi hàm tính điểm
                this.props.dispatch({
                  type: "TINH_DIEM",
                });
              }
            }, 100);
          }}
          className="btn btn-success"
          style={{ fontSize: 30 }}
        >
          PLAY GAME
        </button>
      </div>
    );
  }
}
const mapSateToProps = (state) => {
  return {
    banChon: state.BaiTapGameXucXacReducer.banChon,
    soBanThang: state.BaiTapGameXucXacReducer.soBanThang,
    soBanChoi: state.BaiTapGameXucXacReducer.soBanChoi,
  };
};
export default connect(mapSateToProps)(KetQuaTroChoi);

import React, { Component } from "react";
import axios from "axios";
import { method, result } from "lodash";
import { connect } from "react-redux";
import { layDanhSachPhimAction } from "../redux/actions/QuanLyPhimAction";
class DanhSachPhim extends Component {
  //   state = {
  //     danhSachPhim: [],
  //   };
  renderDanhSachPhim = () => {
    console.log("danhSachPhim", this.props.danhSachPhim);
    return this.props.danhSachPhim.map(
      ({ maPhim, hinhAnh, tenPhim, ...restProps }, index) => {
        return (
          <div className="col-3">
            <div class="card text-left">
              <img
                class="card-img-top"
                src={hinhAnh}
                style={{ width: "100%" }}
                alt={hinhAnh}
              />
              <div class="card-body">
                <h4 class="card-title">{tenPhim}</h4>
                <p class="card-text">Body</p>
              </div>
            </div>
          </div>
        );
      }
    );
    return "";
  };
  //Đây là lifecycle dùng để gọi ajax api
  componentDidMount() {
    // axios({
    //   url:
    //     "http://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01",
    //   method: "GET",
    // })
    //   .then((result) => {
    //     console.log("dataPhim", result.data);
    //     //Sau khi gọi api lấy được data ta gán vào state
    //     this.setState({
    //       danhSachPhim: result.data,
    //     });
    //   })
    //   .catch((error) => {
    //     console.log(error.response.data);
    //   });
    //Gọi dispatch lên reducer để biết lấy tin từ api về gán cho state reducer(QLPhim)
    this.props.dispatch(layDanhSachPhimAction());
  }
  render() {
    return (
      <div className="container">
        <h3 className="text-center display-4">Danh sách phim</h3>
        <div className="row">{this.renderDanhSachPhim()}</div>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  danhSachPhim: state.QuanLyPhimReducer.danhSachPhim,
});
export default connect(mapStateToProps)(DanhSachPhim);

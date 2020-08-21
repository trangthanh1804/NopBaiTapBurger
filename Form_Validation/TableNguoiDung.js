import React, { Component } from "react";
import { connect } from "react-redux";

class TableNguoiDung extends Component {
  render() {
    return (
      <div className="container">
        <div className="card text-white bg-white">
          <div className="card-header text-center bg-dark font-weight-bold ">
            Danh Sách Người Dùng
          </div>
          <div className="card-body">
            <table className="table">
              <thead>
                <tr>
                  <th>Tài Khoản</th>
                  <th>Họ Tên</th>
                  <th>Mật Khẩu</th>
                  <th>Email</th>
                  <th>Số Điện Thoại</th>
                  <th>Mã Loại Người Dùng</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {this.props.mangNguoiDung.map((nguoiDung, index) => {
                  return (
                    <tr key={index}>
                      <td>{nguoiDung.taiKhoan}</td>
                      <td>{nguoiDung.hoTen}</td>
                      <td>{nguoiDung.matKhau}</td>
                      <td>{nguoiDung.email}</td>
                      <td>{nguoiDung.soDt}</td>
                      <td>{nguoiDung.maLoaiNguoiDung}</td>
                      <td>
                        <button
                          onClick={() => {
                            this.props.dispatch({
                              type: "chinh_sua",
                              nguoiDungChinhSua: nguoiDung,
                            });
                          }}
                          className="btn btn-success"
                        >
                          Chỉnh Sửa
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    mangNguoiDung: state.BaiTapQuanLyNguoiDungReducer.mangNguoiDung,
  };
};
export default connect(mapStateToProps)(TableNguoiDung);

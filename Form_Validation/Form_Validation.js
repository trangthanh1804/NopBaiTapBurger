import React, { Component, Fragment } from "react";
import TableNguoiDung from "./TableNguoiDung";
import { connect } from "react-redux";
import { themNguoiDungAction } from "../redux/actions/QuanLyNguoiDungActions";
import _ from "lodash";
class Form_Validation extends Component {
  state = {
    values: {
      taiKhoan: "",
      matKhau: "",
      hoTen: "",
      soDt: "",
      email: "",
      maLoaiNguoiDung: "",
    },
    errors: {
      taiKhoan: "",
      matKhau: "",
      hoTen: "",
      soDt: "",
      email: "",
      maLoaiNguoiDung: "",
    },
  };
  handleChange = (event) => {
    let { name, value, type } = event.target;
    var newValues = {
      ...this.state.values,
      [name]: value,
    };
    var newErrors = {
      ...this.state.errors,
      [name]: value.trim() === "" ? `${name} không được bỏ trống` : "",
    };
    if (type === "email") {
      let regexEmail = /^[a-z][a-z0-9_\.]{5,32}@[a-z0-9]{2,}(\.[a-z0-9]{2,4}){1,2}$/;
      if (!regexEmail.test(value)) {
        newErrors[name] = name + "không hợp lệ!";
      }
    }
    var newState = {
      values: newValues,
      errors: newErrors,
    };
    //set state sau khi xử lí lỗi
    this.setState(newState, () => {
      console.log(this.state);
    });
  };
  handleSubmit = (event) => {
    //ngăn sự kiện submit lại trang
    event.preventDefault();
    //kiểm tra ngăn submit khi còn lỗi
    let valid = true;
    for (let key in this.state.value) {
      if (this.state.values[key] === "") {
        valid = false;
        break;
      }
    }
    for (let key in this.state.errors) {
      if (this.state.errors[key] !== "") {
        valid = false;
      }
    }
    if (!valid) {
      alert("Dữ liệu không hợp lệ");
      return;
    }
    // alert("Submit thành công");
    //Đưa dữ liệu lên reducer
    // let action = {
    //   type: "Them_nguoi_dung",
    //   nguoiDung: this.state.values,
    // };
    this.props.dispatch(themNguoiDungAction(this.state.values));
  };
  // //hàm này được chạy khi props hoặc state thay đổi và chạy trước khi render
  // componentWillReceiveProps(newProps, state) {
  //   //this.props có thuộc tính gì thì newProps có thuộc tính đó
  //   let { nguoiDungEdit } = newProps;
  //   //trước khi render => gắn state.values=nguoiDungEdit
  //   this.setState({
  //     values: nguoiDungEdit,
  //   });
  // }
  static getDerivedStateFromProps(newProps, currentState) {
    let { nguoiDungEdit } = newProps;
    if (!_.isEqual(nguoiDungEdit, currentState.values)) {
      let newState = { ...currentState, values: nguoiDungEdit };
      console.log("getDerivedStateFromProps");
      return newState; //trả về state mới
    }
    return null;
  }
  render() {
    let {
      taiKhoan,
      matKhau,
      email,
      soDt,
      hoTen,
      maLoaiNguoiDung,
    } = this.state.values;

    return (
      <Fragment>
        <form className="container " onSubmit={this.handleSubmit}>
          <div className="card text-left">
            <div className="card-header bg-dark text-light ">
              <h3 className="text-center"> FROM ĐĂNG KÍ </h3>
            </div>
            <div className="card-body">
              <div className="row">
                <div className="col-6">
                  <div className="form-group">
                    <p>Tài Khoản:</p>
                    <input
                      value={taiKhoan}
                      className="form-control mb-3 "
                      name="taiKhoan"
                      onChange={this.handleChange}
                    />
                    <p className="text-danger">{this.state.errors.taiKhoan}</p>
                  </div>
                  <div className="form-group">
                    <p>Mật Khẩu:</p>
                    <input
                      value={matKhau}
                      className="form-control mb-3 "
                      name="matKhau"
                      onChange={this.handleChange}
                    />
                    <p className="text-danger">{this.state.errors.matKhau}</p>
                  </div>
                  <div className="form-group">
                    <p>Email:</p>
                    <input
                      value={email}
                      type="email"
                      className="form-control mb-3 "
                      name="email"
                      onChange={this.handleChange}
                    />
                    <p className="text-danger">{this.state.errors.email}</p>
                  </div>
                </div>
                <div className="col-6">
                  <div className="form-group">
                    <p>Họ Tên:</p>
                    <input
                      value={hoTen}
                      className="form-control mb-3 "
                      name="hoTen"
                      onChange={this.handleChange}
                    />
                    <p className="text-danger">{this.state.errors.hoTen}</p>
                  </div>
                  <div className="form-group">
                    <p>Số Điện Thoại:</p>
                    <input
                      value={soDt}
                      className="form-control mb-3 "
                      name="soDt"
                      onChange={this.handleChange}
                    />
                    <p className="text-danger">{this.state.errors.soDt}</p>
                  </div>
                  <div className="form-group">
                    <p>Mã Loại Người Dùng:</p>
                    <select
                      value={maLoaiNguoiDung}
                      className="form-control mb-3 "
                      name="maLoaiNguoiDung"
                      onChange={this.handleChange}
                    >
                      <option value="KhachHang">Khách hàng</option>
                      <option value="QuanTri">Quản Trị</option>
                    </select>
                  </div>
                </div>
                <button className="btn btn-primary">Đăng kí</button>
              </div>
            </div>
          </div>
        </form>
        <TableNguoiDung />
      </Fragment>
    );
  }
  // componentDidUpdate(prevProps, prevState) {//nhận vào
  //   if(!_.isEqual(prevProps.nguoiDungEdit,this.props.nguoiDungEdit)){
  //     this.setState({
  //       values:
  //     })
  //   }

  // }
}
const mapStateToProps = (state) => {
  return {
    nguoiDungEdit: state.BaiTapQuanLyNguoiDungReducer.nguoiDungEdit,
  };
};
export default connect(mapStateToProps)(Form_Validation);

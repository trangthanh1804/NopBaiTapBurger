import React, { Component } from "react";
import { connect } from "react-redux";
import "./BaiTapBurger.css";
class BaiTapBurger extends Component {
  renderBreadMid = () => {
    // console.log(this.props.burger);
    let { burger } = this.props;
    // for (let propBuger in burger) {
    //   console.log(propBuger, burger[propBuger]);
    // }
    return Object.entries(burger).map(([propsBurger, value], index) => {
      let breadMid = [];
      for (let i = 0; i < value; i++) {
        breadMid.push(<div key={index} className={propsBurger}></div>);
      }
      return breadMid;
    });
  };
  renderMenu = () => {
    //lấy props từ redux về
    let { menu, burger } = this.props;
    return Object.entries(menu).map(([propsMenu, price], index) => {
      return (
        <tr key={index}>
          <td>{propsMenu}</td>
          <td>
            <button
              onClick={() => {
                this.props.addBreadMid(propsMenu, 1);
              }}
              className="btn-success"
            >
              {" "}
              +
            </button>
            {burger[propsMenu]}
            <button
              onClick={() => {
                this.props.addBreadMid(propsMenu, -1);
              }}
              className="btn-danger"
            >
              -
            </button>
          </td>
          <td>{price}</td>
          <td>{burger[propsMenu] * price}</td>
        </tr>
      );
    });
  };
  render() {
    return (
      <div className="container">
        <h3 className="display-4 text-success text-center">Bài Tập Burger</h3>
        <div className="row">
          <div className="col-7">
            <h3 className="text-center text-danger">Bánh Burger của bạn</h3>
            <div className="breadTop"></div>
            {this.renderBreadMid()}
            <div className="breadBottom"></div>
          </div>
          <div className="col-5">
            <h3 className="text-center text-success">Chọn thức ăn</h3>
            <table className="table">
              <thead>
                <tr>
                  <th>Thức ăn</th>
                  <th></th>
                  <th>Đơn Giá</th>
                  <th>Thành Tiền</th>
                </tr>
                {this.renderMenu()}
              </thead>
              <tfoot>
                <tr>
                  <td colSpan="2"></td>
                  <td>Tổng Cộng</td>
                  <td>{this.props.total}</td>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    burger: state.BurgerReducer.burger,
    menu: state.BurgerReducer.menu,
    total: state.BurgerReducer.total,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    addBreadMid: (propsBurger, amount) => {
      //tạo action
      const action = {
        type: "ADD_BREADMID",
        propsBurger,
        amount,
      };
      dispatch(action);
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(BaiTapBurger);

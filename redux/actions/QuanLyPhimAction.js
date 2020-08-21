import axios from "axios";
import { result } from "lodash";
import { connect } from "react-redux";
import { LayDanhSachPhim, layDanhSachPhim } from "./types/QuanLyPhimType";
export const layDanhSachPhimAction = () => {
  return (dispatch) => {
    axios({
      method: "get",
      url:
        "http://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01",
    })
      .then((result) => {
        console.log(result.data);
        dispatch({
          type: layDanhSachPhim,
          danhSachPhim: result.data,
        });
      })
      .catch((error) => {
        console.log(error.response);
      });
  };
};

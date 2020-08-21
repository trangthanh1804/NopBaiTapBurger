import { layDanhSachPhim } from "../actions/types/QuanLyPhimType";
import { act } from "react-dom/test-utils";

const intialState = {
  danhSachPhim: [],
};
export default (state = intialState, action) => {
  switch (action.type) {
    case layDanhSachPhim: {
      state.danhSachPhim = action.danhSachPhim;
      return { ...state };
    }
    default:
      return { ...state };
  }
};

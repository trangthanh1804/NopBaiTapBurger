import { combineReducers } from "redux";
import BaiTapGioHangReducer from "./BaiTapGioHangReducer";
import BaiTapGameBauCuaReducer from "./BaiTapGameBauCuaReducer";
import BaiTapGameXucXacReducer from "./BaiTapXucXacReducer";
import BaiTapQuanLyNguoiDungReducer from "./BaiTapQuanLyNguoiDungReducer";
import QuanLyPhimReducer from "./QuanLyPhimReducer";
import { BurgerReducer } from "../reducers/BurgerReducer";
//rootReducer quản lý state của toàn ứng dụng
const rootReducer = combineReducers({
  //Nơi khai báo các state (reducer) theo từng nghiệp vụ
  // GioHangReducer chứa stateGioHang
  GioHangReducer: BaiTapGioHangReducer,
  BaiTapGameBauCuaReducer,
  BaiTapGameXucXacReducer,
  BaiTapQuanLyNguoiDungReducer,
  QuanLyPhimReducer,
  BurgerReducer,
});

export default rootReducer;

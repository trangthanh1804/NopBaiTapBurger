import { Them_nguoi_dung } from "../actions/types/QuanLyNguoiDungTypes";

const initialState = {
  mangNguoiDung: [
    {
      taiKhoan: "nguyenvana",
      matKhau: 123,
      hoTen: "Nguyễn Văn A",
      email: "nguyenvana@gmail.com",
      soDt: "0123456789",
      maLoaiNguoiDung: "KhachHang",
    },
    {
      taiKhoan: "nguyenvanb",
      matKhau: 123,
      hoTen: "Nguyễn Văn B",
      email: "nguyenvana@gmail.com",
      soDt: "0123456789",
      maLoaiNguoiDung: "KhachHang",
    },
  ],
  nguoiDungEdit: {
    taiKhoan: "",
    matKhau: "",
    hoTen: "",
    email: "nguyenvana@gmail.com",
    soDt: "0123456789",
    maLoaiNguoiDung: "KhachHang",
  },
};
export default (state = initialState, action) => {
  switch (action.type) {
    case Them_nguoi_dung: {
      let mangNguoiDungUpdate = [...state.mangNguoiDung, action.nguoiDung];
      state.mangNguoiDung = mangNguoiDungUpdate;
      return { ...state };
    }
    case "chinh_sua": {
      state.nguoiDungEdit = action.nguoiDungChinhSua;
      return { ...state };
    }
    default:
      return state;
  }
};

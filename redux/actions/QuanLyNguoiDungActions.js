//tạo ra 1 action sử dụng cho nhiều component muốn dispatch lên reducer nếu gióng nhau về chức năng
import { Them_nguoi_dung } from "./types/QuanLyNguoiDungTypes";
export const themNguoiDungAction = (nguoiDung) => {
  return {
    type: "Them_nguoi_dung",
    nguoiDung: nguoiDung,
  };
};

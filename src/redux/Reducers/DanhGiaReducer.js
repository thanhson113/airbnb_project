import { DanhSachDanhGiaPhongType, layDanhSachDanhGiaTheoPhongType, thongTinChiTietDanhGia } from "../Types/DanhGiaType";

const danhGiaState = {
  dsDanhGia: [],
  thongTinChiTietDanhGia: {},
  danhSachDanhGia: []
};

export const danhGiaReducer = (state = danhGiaState, action) => {
  switch (action.type) {
    //nhat
    case DanhSachDanhGiaPhongType:
      state.dsDanhGia = action.dsDanhGia;
      return { ...state };
    //nhat

    case thongTinChiTietDanhGia:
      state.thongTinChiTietDanhGia = action.thongTinChiTietDanhGia;
      return { ...state };

    case layDanhSachDanhGiaTheoPhongType:
      state.danhSachDanhGia = action.danhSachDanhGia;
      return { ...state };

    default:
      return { ...state };
  }
};

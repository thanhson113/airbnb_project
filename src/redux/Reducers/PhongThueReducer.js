/** @format */

import {
  GET_DSPHONGTHUE_VITRI,
  ThongTinChiTietPhongType,
} from "../Types/PhongThueType";

const phongThueState = {
  dsPhongTheoViTri: [],
  chiTietPhong: {},
};

export const phongThueReducer = (state = phongThueState, action) => {
  switch (action.type) {
    case GET_DSPHONGTHUE_VITRI: {
      state.dsPhongTheoViTri = action.dsPhongTheoViTri;
      return { ...state };
    }
    //nhat
    case ThongTinChiTietPhongType:
      state.chiTietPhong = action.chiTietPhong;

      return { ...state };
    //nhat
<<<<<<< HEAD
    default: return { ...state }
=======
    default:
      return { ...state };
>>>>>>> 0388d4e090bcc26d62defe76e4d69fe75e3ee552
  }
};

/** @format */

import {
  GET_DSPHONGTHUE_VITRI,
  ThongTinChiTietPhongType,
  GET_LIST_PHONG_THUE
} from "../Types/PhongThueType";

const phongThueState = {
  dsPhongTheoViTri: [],
  dsPhongThue : [],
  chiTietPhong: {},
};

export const phongThueReducer = (state = phongThueState, action) => {
  switch (action.type) {
    case GET_DSPHONGTHUE_VITRI: {
      state.dsPhongTheoViTri = action.dsPhongTheoViTri;
      return { ...state };
    }
    case GET_LIST_PHONG_THUE: {
      state.dsPhongThue = action.dsPhongThue;
      return { ...state };
    }
    //nhat
    case ThongTinChiTietPhongType:
      state.chiTietPhong = action.chiTietPhong;

      return { ...state };
    //nhat
    default: return { ...state }
    
  }
};

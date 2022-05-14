import { ThongTinChiTietPhongType } from "../Types/PhongThueType";

const phongThueState = {
  chiTietPhong: {},
};

export const phongThueReducer = (state = phongThueState, action) => {
  switch (action.type) {

    case ThongTinChiTietPhongType:
      state.chiTietPhong= action.chiTietPhong

      return { ...state };
     

    default:
      return { ...state };
  }
};

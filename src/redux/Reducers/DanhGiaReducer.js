import { DanhSachDanhGiaPhongType } from "../Types/DanhGiaType";

const danhGiaState = {
  dsDanhGia: [],
};

export const danhGiaReducer = (state = danhGiaState, action) => {
  switch (action.type) {
    
    case DanhSachDanhGiaPhongType:
      state.dsDanhGia = action.dsDanhGia;
      return { ...state };

    default:
      return { ...state };
  }
};

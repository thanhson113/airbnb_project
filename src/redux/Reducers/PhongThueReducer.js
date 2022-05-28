<<<<<<< HEAD
import { GET_DSPHONGTHUE_VITRI } from "../Types/PhongThueType"

const phongThueState = {
  dsPhongTheoViTri: []
}

export const phongThueReducer = (state = phongThueState, action) => {
  switch (action.type) {
    case GET_DSPHONGTHUE_VITRI : {
      state.dsPhongTheoViTri = action.dsPhongTheoViTri
      return {...state}
    }
  default:
    return state
=======
import { ThongTinChiTietPhongType } from "../Types/PhongThueType";

const phongThueState = {
  chiTietPhong: {},
};

export const phongThueReducer = (state = phongThueState, action) => {
  switch (action.type) {
    //nhat
    case ThongTinChiTietPhongType:
      state.chiTietPhong = action.chiTietPhong;

      return { ...state };
    //nhat

    default:
      return { ...state };
>>>>>>> eba15c20f0c03ecbaeaa96758bd6ce72ff97f1e5
  }
};

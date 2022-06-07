import { GET_VITRI, layDanhSachViTri, layThongTinViTriType } from "../Types/ViTriType"

const viTriState = {
  mangViTri: [],
  danhSachViTri: [],
  thongTinViTri: {}
}

export const viTriReducer = (state = viTriState, action) => {
  switch (action.type) {
    case GET_VITRI: {
      state.danhSachViTri = action.danhSachViTri;
      return { ...state }
    }
    case layDanhSachViTri:
      state.mangViTri = action.mangViTri
      return { ...state }

    case layThongTinViTriType:
      state.thongTinViTri = action.thongTinViTri

      return { ...state }
    default:
      return state


  }
}

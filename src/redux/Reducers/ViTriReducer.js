import { GET_VITRI, layDanhSachViTri } from "../Types/ViTriType"

const viTriState = {
  mangViTri: [],
  danhSachViTri: [],
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
    default:
      return state


  }
}

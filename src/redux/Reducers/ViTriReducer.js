import { layDanhSachViTri } from "../Types/ViTriType"

const viTriState = {
  mangViTri: [],
}

export const viTriReducer = (state = viTriState, action) => {
  switch (action.type) {
    case layDanhSachViTri:
      state.mangViTri = action.mangViTri
      return { ...state }
    default:
      return state
  }
}

<<<<<<< HEAD
import { GET_VITRI } from "../Types/ViTriType"

const viTriState = {
  danhSachViTri : [],
=======
import { layDanhSachViTri } from "../Types/ViTriType"

const viTriState = {
  mangViTri: [
    { id: 1, name: 'Đà Nẵng' },
    { id: 2, name: 'Đà lạt' }
  ],
>>>>>>> eba15c20f0c03ecbaeaa96758bd6ce72ff97f1e5
}

export const viTriReducer = (state = viTriState, action) => {
  switch (action.type) {
<<<<<<< HEAD
    case GET_VITRI :{
      state.danhSachViTri = action.danhSachViTri;
      return {...state}
    }
  default:
    return state
=======
    case layDanhSachViTri:
      state.mangViTri = action.mangViTri
      return { ...state }
    default:
      return state
>>>>>>> eba15c20f0c03ecbaeaa96758bd6ce72ff97f1e5
  }
}

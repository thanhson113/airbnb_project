import { GET_VITRI, layDanhSachViTri } from "../Types/ViTriType"

const viTriState = {
<<<<<<< HEAD
  mangViTri: [],
=======
  danhSachViTri: [],
  mangViTri: [
    { id: 1, name: 'Đà Nẵng' },
    { id: 2, name: 'Đà lạt' }
  ],
>>>>>>> b3d0737b54bba64f654a5ebb56eca318938eb58c
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

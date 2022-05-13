import { GET_VITRI } from "../Types/ViTriType"

const viTriState = {
  danhSachViTri : [],
}

export const viTriReducer = (state = viTriState, action) => {
  switch (action.type) {
    case GET_VITRI :{
      state.danhSachViTri = action.danhSachViTri;
      return {...state}
    }
  default:
    return state
  }
}

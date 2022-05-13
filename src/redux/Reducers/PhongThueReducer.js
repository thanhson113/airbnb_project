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
  }
}

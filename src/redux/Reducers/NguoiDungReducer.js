import { layDanhSachNguoiDung } from "../Types/NguoiDungType"

const nguoiDungState = {
  mangNguoiDung:[1,2,3]
}

export const nguoiDungReducer = (state = nguoiDungState, action) => {
  switch (action.type) {
    case layDanhSachNguoiDung:
      state.mangNguoiDung = action.mangNguoiDung
      return { ...state }
    default:
      return state
  }
}

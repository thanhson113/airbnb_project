import { LayDSNguoiDungType } from "../Types/NguoiDungType"

const nguoiDungState = {
  dsNguoiDung:[]
}

export const nguoiDungReducer = (state = nguoiDungState, action) => {
  switch (action.type) {
    case LayDSNguoiDungType:
      state.dsNguoiDung=[...action.dsNguoiDung]

      return {...state}

  default:
    return state
  }
}

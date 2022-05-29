import { LayDSNguoiDungType, layThongTinNguoiDungType } from "../Types/NguoiDungType"

const nguoiDungState = {
  dsNguoiDung: [],
  thongTinNguoiDung:{}
}

export const nguoiDungReducer = (state = nguoiDungState, action) => {
  switch (action.type) {
    //Nhat***
    case LayDSNguoiDungType:
      state.dsNguoiDung = [...action.dsNguoiDung]

      return { ...state }
    //***Nhat

    case layThongTinNguoiDungType:
      state.thongTinNguoiDung = action.thongTinNguoiDung

      return { ...state }

    default:
      return { ...state }
  }
}

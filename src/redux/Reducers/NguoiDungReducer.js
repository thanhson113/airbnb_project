import { LayDSNguoiDungType, layThongTinNguoiDungType } from "../Types/NguoiDungType"
import { ChiTieTNguoiDungType, LayDSNguoiDungType } from "../Types/NguoiDungType"
import { layDanhSachNguoiDung } from "../Types/NguoiDungType"
const nguoiDungState = {
  dsNguoiDung:[],
   mangNguoiDung:[1,2,3],
   //nhat***
   user:{},
   thongTinNguoiDung:{}
   //***Nhat */
}

export const nguoiDungReducer = (state = nguoiDungState, action) => {
  switch (action.type) {
    //Nhat***
    case LayDSNguoiDungType:
      state.dsNguoiDung = [...action.dsNguoiDung]

      return {...state}

    case ChiTieTNguoiDungType:
      state.user={...action.user}
      
      return {...state}
    //***Nhat

    case layThongTinNguoiDungType:
      state.thongTinNguoiDung = action.thongTinNguoiDung

      return { ...state }

    default:
      return { ...state }
  }
}

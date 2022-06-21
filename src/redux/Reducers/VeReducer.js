import { layDSVeTheoPhongType, LayChiTietVeCuaNDType, layChiTietVeAdminType, layDSVeTheoNguoiDungType } from "../Types/VeType"

const VeState = {
  dsVeIdroom: [],
  dsVeTheoND: [],
  chiTietVeAdmin: {},
  dsVeTheoNguoiDungAdmin: [],
}

export const VeReducer = (state = VeState, action) => {
  switch (action.type) {
    case layDSVeTheoPhongType:
      state.dsVeIdroom = [...action.dsVeIdroom]

      return { ...state }

    case LayChiTietVeCuaNDType:
      let dsVeCapNhap = [...state.dsVeTheoND]
      dsVeCapNhap.push(action.ve)
      state.dsVeTheoND = [...dsVeCapNhap]
      return { ...state }

    case layChiTietVeAdminType:
      state.chiTietVeAdmin = action.chiTietVeAdmin

      return { ...state }

    case layDSVeTheoNguoiDungType:
      state.dsVeTheoNguoiDungAdmin = action.dsVeTheoNguoiDung

      return { ...state }

    default:
      return { ...state }
  }
}

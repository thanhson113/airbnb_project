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

    case layChiTietVeAdminType:
      state.chiTietVeAdmin = action.chiTietVeAdmin

      return { ...state }

    case layDSVeTheoNguoiDungType:
      state.dsVeTheoNguoiDungAdmin = action.dsVeTheoNguoiDung

      return { ...state }

    case LayChiTietVeCuaNDType:
      let dsVeCapNhap = [...state.dsVeTheoND];
      const check = dsVeCapNhap.some((ve) => ve._id === action.ve._id)
      if (!check) dsVeCapNhap.push(action.ve)
      state.dsVeTheoND = [...dsVeCapNhap];
      return { ...state };

    default:
      return { ...state };
  }
};

/** @format */

import { quanLyNguoiDung } from "../../services/NguoiDungServices";
import { LayDSNguoiDungType } from "../Types/NguoiDungType";

//nhat
export const LayDSNguoiDungAction = () => {
  return async (dispatch) => {
    try {
      const result = await quanLyNguoiDung.DSNguoiDung();
      if (result.status === 200) {
        console.log(result.data);
        dispatch({
          type: LayDSNguoiDungType,
          dsNguoiDung: result.data,
        });
      }
    } catch (error) {
      console.log("error", error);
      console.log("error", error.response?.data);
    }
  };
};
//nhat

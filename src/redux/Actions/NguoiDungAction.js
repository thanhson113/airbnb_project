/** @format */

import { history } from "../../App";
import { quanLyNguoiDung } from "../../services/NguoiDungServices";
import {
  LayDSNguoiDungType,
  layThongTinNguoiDungType,
  ChiTieTNguoiDungType,
} from "../Types/NguoiDungType";
/** @format */

import { message } from "antd";

const success = (content) => {
  message.success(content, 3);
};
const err = (content) => {
  message.error(content, 5);
};

//nhat ***
export const LayDSNguoiDungAction = () => {
  return async (dispatch) => {
    try {
      const result = await quanLyNguoiDung.DSNguoiDung();
      if (result.status === 200) {
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

export const ChiTietNguoiDungAction = (id) => {
  return async (dispatch) => {
    try {
      const result = await quanLyNguoiDung.ChiTietNguoiDung(id);
      if (result.status === 200) {
        dispatch({
          type: ChiTieTNguoiDungType,
          user: result.data,
        });
      }
    } catch (error) {
      console.log("error", error);
      console.log("error", error.response?.data);
    }
  };
};
export const UploadAvaraNDAction = (formData, id) => {
  return async (dispatch) => {
    try {
      const result = await quanLyNguoiDung.UploadAvaraND(formData);
      if (result.status === 200) {
        console.log("success", result.data);
        dispatch({
          type: ChiTieTNguoiDungType,
          user: result.data,
        });
        success("Upload avatar thành công !");
      }
    } catch (error) {
      console.log("error", error);
      console.log("error", error.response?.data);
      err("Upload avatar không thành công !");
    }
  };
};
export const capNhatThongTinNguoiDungUserAction = (id, user) => {
  return async (dispatch) => {
    try {
      let result = await quanLyNguoiDung.capNhatThongTinNguoiDung(id, user);
      if (result.status === 200) {
        await success("Cập nhập người dùng thành công");
        await window.location.reload();
      }
    } catch (error) {
      console.log("error", error);
      console.log("error", error.response?.data);
      err("Cập nhập người dùng không thành công");
    }
  };
};

//*** nhat

export const themNguoiDungAction = (user) => {
  return async (dispatch) => {
    try {
      let result = await quanLyNguoiDung.themNguoiDung(user);
      if (result.status === 200) {
        success("Thêm người dùng thành công");
        console.log(result.data);
        history.push("/admin/user");
      }
    } catch (error) {
      console.log("error", error);
      console.log("error", error.response?.data);
      err("Thêm người dùng không thành công");
    }
  };
};

export const layThongTinNguoiDungAction = (id) => {
  return async (dispatch) => {
    try {
      let result = await quanLyNguoiDung.layThongTinNguoiDung(id);
      if (result.status === 200) {
        console.log(result.data);
        dispatch({
          type: layThongTinNguoiDungType,
          thongTinNguoiDung: result.data,
        });
      }
    } catch (error) {
      console.log("error", error);
      console.log("error", error.response?.data);
    }
  };
};

export const capNhatThongTinNguoiDungAction = (id, user) => {
  return async (dispatch) => {
    try {
      let result = await quanLyNguoiDung.capNhatThongTinNguoiDung(id, user);
      if (result.status === 200) {
        success("Thêm người dùng thành công");
        console.log(result.data);
        history.push("/admin/user");
      }
    } catch (error) {
      console.log("error", error);
      console.log("error", error.response?.data);
      err("Thêm người dùng thành công");
    }
  };
};

export const xoaNguoiDungAction = (id) => {
  return async (dispatch) => {
    try {
      let result = await quanLyNguoiDung.xoaNguoiDung(id);
      if (result.status === 200) {
        success("Xóa người dùng thành công");
        dispatch(LayDSNguoiDungAction());
      }
    } catch (error) {
      console.log("error", error);
      console.log("error", error.response?.data);
      err("Xóa người dùng thành công");
    }
  };
};

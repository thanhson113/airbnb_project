import { history } from "../../App";
import { quanLyNguoiDung } from "../../services/NguoiDungServices";
import { LayDSNguoiDungType, layThongTinNguoiDungType } from "../Types/NguoiDungType";

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
//*** nhat


export const themNguoiDungAction = (user) => {
  return async (dispatch) => {
    try {
      let result = await quanLyNguoiDung.themNguoiDung(user);
      if (result.status === 200) {
        alert('Thêm người dùng thành công');
        console.log(result.data);
        history.push('/admin/user')
      }
    } catch (error) {
      console.log("error", error);
      console.log("error", error.response?.data);
    }
  };
}

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
  }
}

export const capNhatThongTinNguoiDungAction = (id, user) => {
  return async (dispatch) => {
    try {
      let result = await quanLyNguoiDung.capNhatThongTinNguoiDung(id, user);
      if (result.status === 200) {
        alert('Thêm người dùng thành công');
        console.log(result.data);
        history.push('/admin/user')
      }
    } catch (error) {
      console.log("error", error);
      console.log("error", error.response?.data);
    }
  }
}

export const xoaNguoiDungAction = (id) => {
  return async (dispatch) => {
    try {
      let result = await quanLyNguoiDung.xoaNguoiDung(id);
      if (result.status === 200) {
        alert('xóa người dùng thành công');
        // console.log(result.data);
        history.push('/admin/user')
      }
    } catch (error) {
      console.log("error", error);
      console.log("error", error.response?.data);
    }
  }
}
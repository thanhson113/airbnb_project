/** @format */

import { history } from "../../App";
import { quanLyDatVe } from "../../services/VeServices";
import { layDSVeTheoPhongType, LayChiTietVeCuaNDType, layChiTietVeAdminType, layDSVeTheoNguoiDungType } from "../Types/VeType";

//Nhat ***
export const layDSVeTheoPhongAction = (idRoom) => {
  return async (dispatch) => {
    try {
      const result = await quanLyDatVe.layDSVeTheoPhong(idRoom);
      if (result.status === 200) {
        console.log(result);
        console.log(result.data);
        dispatch({
          type: layDSVeTheoPhongType,
          dsVeIdroom: result.data,
        });
      }
    } catch (error) {
      console.log("error", error);
      console.log("error", error.response?.data);
    }
  };
};
export const LayChiTietVeCuaNDAction = (idVe) => {
  return async (dispatch) => {
    try {
      const result = await quanLyDatVe.layChiTietVe(idVe);
      if (result.status === 200) {
        dispatch({
          type: LayChiTietVeCuaNDType,
          ve: result.data,
        });
      }
    } catch (error) {
      console.log("error", error);
      console.log("error", error.response?.data);
    }
  };
};
//*** nhat */


export const taoVeAction = (roomId, ticket) => {
  return async (dispatch) => {
    try {
      let result = await quanLyDatVe.taoVe(ticket);
      if (result.status === 200) {
        alert('Tạo vé thành công');
        console.log(result.data);
        history.push(`/admin/ticket/${roomId}`)
      }
    } catch (error) {
      console.log("error", error);
      console.log("error", error.response?.data);
    }
  };
};

export const LayChiTietVeAdminAction = (idVe) => {
  return async (dispatch) => {
    try {
      const result = await quanLyDatVe.layChiTietVeAdmin(idVe);
      if (result.status === 200) {
        console.log(result);
        console.log(result.data);
        dispatch({
          type: layChiTietVeAdminType,
          chiTietVeAdmin: result.data,
        });
      }
    } catch (error) {
      console.log("error", error);
      console.log("error", error.response?.data);
    }
  };
};

export const capNhatVeAdminAction = (idVe, ticket, roomId) => {
  return async (dispatch) => {
    try {
      let result = await quanLyDatVe.capNhatVeAdmin(idVe, ticket);
      if (result.status === 200) {
        alert('Cập nhật vé thành công');
        console.log(result.data);
        history.push(`/admin/ticket/${roomId}`)
      }
    } catch (error) {
      console.log("error", error);
      console.log("error", error.response?.data);
    }
  }
}

export const xoaVeAction = (idVe, idRoom) => {
  return async (dispatch) => {
    try {
      let result = await quanLyDatVe.xoaVe(idVe);
      if (result.status === 200) {
        alert('Xóa vé thành công');
        dispatch(layDSVeTheoPhongAction(idRoom))
      }
    } catch (error) {
      console.log("error", error);
      console.log("error", error.response?.data);
    }
  }
}

export const layDSVeTheoNguoiDungAction = (userId) => {
  return async (dispatch) => {
    try {
      const result = await quanLyDatVe.layDSVeTheoNguoiDung(userId);
      if (result.status === 200) {
        console.log(result);
        console.log(result.data);
        dispatch({
          type: layDSVeTheoNguoiDungType,
          dsVeTheoNguoiDung: result.data,
        });
      }
    } catch (error) {
      console.log("error", error);
      console.log("error", error.response?.data);
    }
  };
};

export const capNhatVeUserAdminAction = (idVe, ticket, userId) => {
  return async (dispatch) => {
    try {
      let result = await quanLyDatVe.capNhatVeAdmin(idVe, ticket);
      if (result.status === 200) {
        alert('Cập nhật vé thành công');
        console.log(result.data);
        history.push(`/admin/ticket/user/${userId}`)
      }
    } catch (error) {
      console.log("error", error);
      console.log("error", error.response?.data);
    }
  }
}

export const xoaVeUserAdminAction = (idVe, userId) => {
  return async (dispatch) => {
    try {
      let result = await quanLyDatVe.xoaVe(idVe);
      if (result.status === 200) {
        alert('Xóa vé thành công');
        dispatch(layDSVeTheoNguoiDungAction(userId))
      }
    } catch (error) {
      console.log("error", error);
      console.log("error", error.response?.data);
    }
  }
}

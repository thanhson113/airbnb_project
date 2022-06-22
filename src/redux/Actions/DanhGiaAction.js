/** @format */

import { history } from "../../App";
import { quanLyDanhGia } from "../../services/DanhGiaServices";
import { DanhSachDanhGiaPhongType, layDanhSachDanhGiaTheoPhongType, thongTinChiTietDanhGia } from "../Types/DanhGiaType";

//nhat head
export const DSDanhGiaTheoPhongAction = (id) => {
  return async (dispatch) => {
    try {
      const result = await quanLyDanhGia.DSDanhGiaTheoPhong(id);
      if (result.status === 200) {
        console.log(result);
        console.log(result.data);
        dispatch({
          type: DanhSachDanhGiaPhongType,
          dsDanhGia: result.data,
        });
      }
    } catch (error) {
      console.log("error", error);
      console.log("error", error.response?.data);
    }
  };
};

export const TaoDanhGiaTheoPhongAction = (idPhong, comment) => {
  return async (dispatch) => {
    try {
      const result = await quanLyDanhGia.TaoDanhGiaTheoPhong(idPhong, comment);
      if (result.status === 200) {
        console.log(result);
        console.log(result.data);
        dispatch(DSDanhGiaTheoPhongAction(idPhong));
      }
    } catch (error) {
      console.log("error", error);
      console.log("error", error.response?.data);
    }
  };
};

export const XoaDanhGiaAction = (idDanhGia, idPhong) => {
  return async (dispatch) => {
    try {
      const result = await quanLyDanhGia.XoaDanhGiaTheoPhong(idDanhGia);
      if (result.status === 200) {
        console.log(result);
        console.log(result.data);
        dispatch(DSDanhGiaTheoPhongAction(idPhong));
      }
    } catch (error) {
      console.log("error", error);
      console.log("error", error.response?.data);
    }
  };
};
//nhat final

export const taoDanhGiaTheoPhongADAction = (idPhong, comment) => {
  return async (dispatch) => {
    try {
      const result = await quanLyDanhGia.TaoDanhGiaTheoPhong(idPhong, comment);
      if (result.status === 200) {
        alert('Tạo đánh giá thành công');
        dispatch(DSDanhGiaTheoPhongAction(idPhong));
        history.push(`/admin/feedback/${idPhong}`)
      }
    } catch (error) {
      console.log("error", error);
      console.log("error", error.response?.data);
    }
  };
};

export const layThongTinChiTietDanhGiaAction = (id) => {
  return async (dispatch) => {
    try {
      const result = await quanLyDanhGia.layThongTinChiTietDanhGia(id);
      if (result.status === 200) {
        console.log(result);
        console.log(result.data);
        dispatch({
          type: thongTinChiTietDanhGia,
          thongTinChiTietDanhGia: result.data
        });
      }
    } catch (error) {
      console.log("error", error);
      console.log("error", error.response?.data);
    }
  };
};

export const capNhatThongTinChiTietDanhGiaAction = (id, review, feedbackRoomId) => {
  return async (dispatch) => {
    try {
      let result = await quanLyDanhGia.capNhatThongTinChiTietDanhGia(id, review);
      if (result.status === 200) {
        alert('Cập nhật đánh giá thành công');
        console.log(result.data);
       await layDanhGiaTheoPhongAction(feedbackRoomId)
        history.push(`/admin/feedback/${feedbackRoomId}`)
      }
    } catch (error) {
      console.log("error", error);
      console.log("error", error.response?.data);
    }
  }
}


export const xoaDanhGiaActionAD = (id, roomId) => {
  return async (dispatch) => {
    try {
      let result = await quanLyDanhGia.xoaDanhGia(id);
      if (result.status === 200) {
        alert('Xóa đánh giá thành công');
        dispatch(layDanhGiaTheoPhongAction(roomId))
        history.push(`/admin/feedback/${roomId}`)
      }
    } catch (error) {
      console.log("error", error);
      console.log("error", error.response?.data);
    }
  }
}

export const layDanhGiaTheoPhongAction = (id) => {
  return async (dispatch) => {
    try {
      const result = await quanLyDanhGia.layDanhGiaTheoPhong(id);
      if (result.status === 200) {
        console.log(result);
        console.log(result.data);
        dispatch({
          type: layDanhSachDanhGiaTheoPhongType,
          danhSachDanhGia: result.data,
        });
      }
    } catch (error) {
      console.log("error", error);
      console.log("error", error.response?.data);
    }
  };
};
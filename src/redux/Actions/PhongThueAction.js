
import { message } from "antd";

import { history } from "../../App";
import { quanLyPhongChoThue } from "../../services/PhongThueServices"
import { GET_DSPHONGTHUE_VITRI, ThongTinChiTietPhongType } from "../Types/PhongThueType";

const success = (content) => {
  message.loading(`${content} đang thực hiện..`, 2.5).then(() =>
    message.success(`${content} thành công`, 2.5, () => {  
       history.push("/home");   
    })
  );
};
const errorS = (content) => {
  message.error(`${content} không thành công !`, 3);
};

export const layDSPhongThueTheoViTri = (idViTri) => {
  return async (dispatch) => {
    try {
      let result = await quanLyPhongChoThue.layDSPhongThueTheoViTri(idViTri);
      dispatch({
        type: GET_DSPHONGTHUE_VITRI,
        dsPhongTheoViTri: result.data
      })
    } catch (err) {
      console.log(err.response.data)
    }
  }
}


//Nhat head
export const ThongTinChiTietPhongAction = (id) => {
  return async (dispatch) => {
    try {
      const result = await quanLyPhongChoThue.ThongTinChiTietPhong(id);
      if (result.status === 200) {
        dispatch({
          type: ThongTinChiTietPhongType,
          chiTietPhong: result.data
        })
      }
    } catch (error) {
      console.log("error", error);
      console.log("error", error.response?.data);
    }
  };
};

export const DatPhongAction = (ve) => {
  return async (dispatch) => {
    try {
      const result = await quanLyPhongChoThue.DatVe(ve)
      if (result.status === 200) {
        success('Đặt phòng')
      }
    } catch (error) {
      console.log("error", error);
      console.log("error", error.response?.data);
      errorS("Đặt phòng")
    }
  }
}
//Nhat final


export const themPhongThueAction = (room, locationId) => {
  return async (dispatch) => {
    try {
      let result = await quanLyPhongChoThue.themPhongThue(room);
      if (result.status === 200) {
        alert('Thêm phòng thành công');
        console.log(result.data);
        history.push(`/admin/room/${locationId}`)
      }
    } catch (error) {
      console.log("error", error);
      console.log("error", error.response?.data);
    }
  }
}

export const capNhatPhongThueAction = (id, room, locationId) => {
  return async (dispatch) => {
    try {
      let result = await quanLyPhongChoThue.capNhatPhongThue(id, room);
      if (result.status === 200) {
        alert('Cập nhật phòng thành công');
        history.push(`/admin/room/${locationId}`)
      }
    } catch (error) {
      console.log("error", error);
      console.log("error", error.response?.data);
    }
  }
}

export const xoaPhongThueAction = (id, locationId) => {
  return async (dispatch) => {
    try {
      let result = await quanLyPhongChoThue.xoaPhongThue(id);
      if (result.status === 200) {
        alert('Xóa phòng thành công');
        dispatch(layDSPhongThueTheoViTri(locationId))
      }
    } catch (error) {
      console.log("error", error);
      console.log("error", error.response?.data);
    }
  }
}
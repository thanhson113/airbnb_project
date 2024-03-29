import { http } from "../util/settingAxios";

class QuanLyPhongChoThue {
  layDSPhongThueTheoViTri = (idViTri) => {
    return http.get(`/api/rooms?locationId=${idViTri}`)
  }
  layDSPhongThue = () => {
    return http.get(`/api/rooms`)
  }
  ThongTinChiTietPhong = (id) => {
    return http.get(`/api/rooms/${id}`);
  };
  DatVe = (ve) => {
    return http.post(`/api/rooms/booking`, ve)

  }

  themPhongThue = (room) => {
    return http.post(`/api/rooms`, room)
  }
  capNhatPhongThue = (id, room) => {
    return http.put(`/api/rooms/${id}`, room)
  }
  xoaPhongThue = (id) => {
    return http.delete(`/api/rooms/${id}`)
  }

  UploadAvatarRoom = (roomId, formData) => {
    return http.post(`/api/rooms/upload-image/${roomId}`, formData);
  };
}
export const quanLyPhongChoThue = new QuanLyPhongChoThue();

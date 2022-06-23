/** @format */

import { http } from "../util/settingAxios";

class QuanLyNguoiDung {
  //Nhat***
  DSNguoiDung = () => {
    return http.get(`/api/users/pagination`)
  }
  ChiTietNguoiDung = (id) => {
    return http.get(`/api/users/${id}`);
  };
  UploadAvaraND = (formData) => {
    return http.post('/api/users/upload-avatar', formData);
  };
  //***Nhat

  layDanhSachNguoiDung = () => {
    return http.get(`/api/users`);
  };

  themNguoiDung = (user) => {
    return http.post(`/api/users`, user)
  }
  layThongTinNguoiDung = (id) => {
    return http.get(`/api/users/${id}`)
  }
  capNhatThongTinNguoiDung = (id, user) => {
    return http.put(`/api/users/${id}`, user)
  }
  xoaNguoiDung = (id) => {
    return http.delete(`/api/users/${id}`)
  }

  
}
export const quanLyNguoiDung = new QuanLyNguoiDung();

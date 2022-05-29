import { http } from "../util/settingAxios"

class QuanLyNguoiDung {
    //Nhat***
    DSNguoiDung = () => {
        return http.get(`/api/users/pagination`)
    }
    //***Nhat

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
export const quanLyNguoiDung = new QuanLyNguoiDung()
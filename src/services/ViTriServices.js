import { http } from "../util/settingAxios";

class QuanLyViTri {
    layDanhSachViTri = (keyWord) => {
        if (keyWord === '') {
            return http.get(`/api/locations`)
        }
        return http.get(`/api/locations?location=${keyWord}`)
    }

    themViTri = (location) => {
        return http.post(`/api/locations`, location)
    }

    layThongTinViTri = (id) => {
        return http.get(`/api/locations/${id}`)
    }

    capNhatThongTinViTri = (id, location) => {
        return http.put(`/api/locations/${id}`, location)
    }

    xoaViTri = (id) => {
        return http.delete(`/api/locations/${id}`)
    }
}
export const quanLyViTri = new QuanLyViTri()
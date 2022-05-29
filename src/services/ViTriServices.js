import { http } from "../util/settingAxios"

class QuanLyViTri {
    layDanhSachViTri = () => {
        return http.get(`/api/locations`)
    }

    themViTri = (location) => {
        return http.post(`/api/locations`,location)
    }
}
export const quanLyViTri = new QuanLyViTri()
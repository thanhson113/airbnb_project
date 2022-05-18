import { http } from "../util/settingAxios"

class QuanLyNguoiDung {
    layDanhSachNguoiDung = () => {
        return http.get(`/api/users`)
    }
}
export const quanLyNguoiDung = new QuanLyNguoiDung()
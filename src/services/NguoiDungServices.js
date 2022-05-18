import { http } from "../util/settingAxios"


class QuanLyNguoiDung {
    //Nhat
    DSNguoiDung=()=>{
        return http.get(`/api/users/pagination`)
    }
    //Nhat
}
export const quanLyNguoiDung = new QuanLyNguoiDung()
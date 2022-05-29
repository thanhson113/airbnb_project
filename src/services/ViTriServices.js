import { http } from "../util/settingAxios";

class QuanLyViTri {
    layDanhSachViTri = (keyWord) => {
        if(keyWord === ''){
            return http.get(`/api/locations`)
        }
        return http.get(`/api/locations?location=${keyWord}`)

    }

    themViTri = (location) => {
        return http.post(`/api/locations`,location)
    }
}
export const quanLyViTri = new QuanLyViTri()
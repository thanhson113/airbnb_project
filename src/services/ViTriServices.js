<<<<<<< HEAD
import { http } from "../util/settingAxios";

class QuanLyViTri {
    layDanhSachViTri = (keyWord) => {
        // if(keyWord === ''){
        //     return http.get(`/api/locations`)
        // }else{

        // }
        return http.get(`/api/locations?location=${keyWord}`)
=======
import { http } from "../util/settingAxios"

class QuanLyViTri {
    layDanhSachViTri = () => {
        return http.get(`/api/locations`)
>>>>>>> eba15c20f0c03ecbaeaa96758bd6ce72ff97f1e5
    }
}
export const quanLyViTri = new QuanLyViTri()
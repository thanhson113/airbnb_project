import {http} from "../util/settingAxios"

class XacThucNguoiDung {
    //Nhat
    Login=(nd)=>{
        return http.post(`/api/auth/login`,nd)
    }
    //nhat
}
export const xacThucNguoiDung = new XacThucNguoiDung()
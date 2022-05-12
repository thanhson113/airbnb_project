import {http} from "../util/settingAxios"

class XacThucNguoiDung {
    Login=(nd)=>{
        return http.post(`/api/auth/login`,nd)
    }
}
export const xacThucNguoiDung = new XacThucNguoiDung()
import { http } from "../util/settingAxios";

class QuanLyPhongChoThue{
    layDSPhongThueTheoViTri = (idViTri) => {
        return http.get(`/api/rooms?locationId=${idViTri}`)
    }
}
export const quanLyPhongChoThue = new QuanLyPhongChoThue()
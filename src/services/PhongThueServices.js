import { http } from "../util/settingAxios";


class QuanLyPhongChoThue {
    //nhat head
  ThongTinChiTietPhong = (id) => {
    return http.get(`/api/rooms/${id}`);
  };
  // nhat final
}
export const quanLyPhongChoThue = new QuanLyPhongChoThue();

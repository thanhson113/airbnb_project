import { http } from "../util/settingAxios";

<<<<<<< HEAD
class QuanLyPhongChoThue{
    layDSPhongThueTheoViTri = (idViTri) => {
        return http.get(`/api/rooms?locationId=${idViTri}`)
    }
=======

class QuanLyPhongChoThue {
    //nhat head
  ThongTinChiTietPhong = (id) => {
    return http.get(`/api/rooms/${id}`);
  };
  DatVe=(ve)=>{
    return  http.post(`/api/rooms/booking`,ve)
>>>>>>> eba15c20f0c03ecbaeaa96758bd6ce72ff97f1e5
}
  // nhat final
}
export const quanLyPhongChoThue = new QuanLyPhongChoThue();

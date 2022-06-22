import { http } from "../util/settingAxios"


class QuanLyDanhGia {
    //nhat head
    DSDanhGiaTheoPhong = (id) => {
        return http.get(`/api/reviews/byRoom?roomId=${id}`)
    }
    TaoDanhGiaTheoPhong = (idPhong, comment) => {
        return http.post(`https://airbnb.cybersoft.edu.vn/api/reviews?roomId=${idPhong}`, comment)
    }
    XoaDanhGiaTheoPhong = (idDanhGia) => {
        return http.delete(`/api/reviews/${idDanhGia}`)
    }
    //nhat final

    taoDanhGiaTheoPhongAD = (idPhong, comment) => {
        return http.post(`/api/reviews?roomId=${idPhong}`, comment)
    }

    layThongTinChiTietDanhGia = (id) => {
        return http.get(`/api/reviews/${id}`)
    }

    capNhatThongTinChiTietDanhGia = (id, review) => {
        return http.put(`/api/reviews/${id}`, review)
    }

    xoaDanhGia = (id) => {
        return http.delete(`/api/reviews/${id}`)
    }
    xuaDanhGia = (id,content) => {
        return http.put(`/api/reviews/${id}`,content)
    }

    layDanhGiaTheoPhong = (id) => {
        return http.get(`/api/reviews/byRoom?roomId=${id}`)
    }
}
export const quanLyDanhGia = new QuanLyDanhGia()
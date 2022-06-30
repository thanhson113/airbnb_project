import { http } from "../util/settingAxios"


class QuanLyDatVe {
    //nHAT **
    layDSVeTheoPhong = (idRoom) => {
        return http.get(`/api/tickets/by-room?roomId=${idRoom}`)
    }
    layChiTietVe = (idVe) => {
        return http.get(`https://airbnb.cybersoft.edu.vn/api/tickets/${idVe}`)
    }
    // ** nHAT  

    taoVe = (ticket) => {
        return http.post(`/api/tickets`, ticket)
    }
    layChiTietVeAdmin = (idVe) => {
        return http.get(`/api/tickets/${idVe}`)
    }
    capNhatVeAdmin = (idVe, ticket) => {
        return http.put(`/api/tickets/${idVe}`, ticket)
    }
    xoaVe = (idVe) => {
        return http.delete(`/api/tickets/${idVe}`)
    }
    layDSVeTheoNguoiDung = (userId) => {
        return http.get(`/api/tickets/by-user?userId=${userId}`)
    }
}
export const quanLyDatVe = new QuanLyDatVe()
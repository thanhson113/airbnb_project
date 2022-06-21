import { history } from "../../App";
import { quanLyViTri } from "../../services/ViTriServices"
import { GET_VITRI, layDanhSachViTri, layThongTinViTriType } from "../Types/ViTriType";

export const layDanhSachViTri_1 = (keyWord = '') => {
    return async (dispatch) => {
        try {
            let result = await quanLyViTri.layDanhSachViTri(keyWord)
            dispatch({
                type: GET_VITRI,
                danhSachViTri: result.data
            })
        } catch (err) {
            console.log(err.response.data)
        }
    }
}



export const layDanhSachViTriAction = (keyWord = '') => {
    return async (dispatch) => {
        try {
            let result = await quanLyViTri.layDanhSachViTri(keyWord);
            console.log(result.data)
            let action = {
                type: layDanhSachViTri,
                mangViTri: result.data
            }
            dispatch(action)
        } catch (error) {
            console.log(error)
        }
    }
}

export const themViTriAction = (location) => {
    return async (dispatch) => {
        try {
            let result = await quanLyViTri.themViTri(location);
            if (result.status === 200) {
                alert('Thêm vị trí thành công');
                console.log(result.data);
                history.push('/admin/location')
            }
        } catch (error) {
            console.log("error", error);
            console.log("error", error.response?.data);
        }
    }
}

export const layThongTinViTriAction = (id) => {
    return async (dispatch) => {
        try {
            let result = await quanLyViTri.layThongTinViTri(id);
            if (result.status === 200) {
                console.log(result.data);
                dispatch({
                    type: layThongTinViTriType,
                    thongTinViTri: result.data,
                });
            }
        } catch (error) {
            console.log("error", error);
            console.log("error", error.response?.data);
        }
    }
}

export const capNhatThongTinViTriAction = (id, location) => {
    return async (dispatch) => {
        try {
            let result = await quanLyViTri.capNhatThongTinViTri(id, location);
            if (result.status === 200) {
                alert('Cập nhật vị trí thành công');
                console.log(result.data);
                history.push('/admin/location')
            }
        } catch (error) {
            console.log("error", error);
            console.log("error", error.response?.data);
        }
    }
}

export const xoaViTriAction = (id) => {
    return async (dispatch) => {
        try {
            let result = await quanLyViTri.xoaViTri(id);
            if (result.status === 200) {
                alert('Xóa vị trí thành công');
                dispatch(layDanhSachViTriAction())
            }
        } catch (error) {
            console.log("error", error);
            console.log("error", error.response?.data);
        }
    }
}

import { history } from "../../App";
import { quanLyViTri } from "../../services/ViTriServices"
import { layDanhSachViTri } from "../Types/ViTriType"


export const layDanhSachViTriAction = () => {
    return async (dispatch) => {
        try {
            let result = await quanLyViTri.layDanhSachViTri();
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
                // history.push('/admin/location')
            }
        } catch (error) {
            console.log("error", error);
            console.log("error", error.response?.data);
        }
    }
}
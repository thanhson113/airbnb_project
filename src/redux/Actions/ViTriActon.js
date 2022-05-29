import { history } from "../../App";
import { quanLyViTri } from "../../services/ViTriServices"
import { GET_VITRI, layDanhSachViTri } from "../Types/ViTriType";

export const layDanhSachViTri_1 = (keyWord = '') => {
    return async (dispatch) => {
        try{
            let result = await quanLyViTri.layDanhSachViTri(keyWord)
            dispatch({
                type: GET_VITRI,
                danhSachViTri : result.data
            })
        }catch(err){
            console.log(err.response.data)
        }
    }
}



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
<<<<<<< HEAD

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
=======
>>>>>>> b3d0737b54bba64f654a5ebb56eca318938eb58c

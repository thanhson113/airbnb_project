import { quanLyViTri } from "../../services/ViTriServices"
<<<<<<< HEAD
import { GET_VITRI } from "../Types/ViTriType";

export const layDanhSachViTri = (keyWord = '') => {
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
=======
import { layDanhSachViTri } from "../Types/ViTriType"


export const layDanhSachViTriAction = () => {
    return async (dispatch) => {
        try {
            let result = await quanLyViTri.layDanhSachViTri();
            console.log(result)
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
>>>>>>> eba15c20f0c03ecbaeaa96758bd6ce72ff97f1e5

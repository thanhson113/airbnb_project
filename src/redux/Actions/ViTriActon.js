import { quanLyViTri } from "../../services/ViTriServices"
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

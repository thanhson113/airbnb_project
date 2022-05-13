import { quanLyPhongChoThue } from "../../services/PhongThueServices"
import { GET_DSPHONGTHUE_VITRI } from "../Types/PhongThueType";

export const layDSPhongThueTheoViTri = (idViTri) => {
    return async (dispatch) => {
        try {
            let result = await quanLyPhongChoThue.layDSPhongThueTheoViTri(idViTri);
            dispatch({
                type: GET_DSPHONGTHUE_VITRI,
                dsPhongTheoViTri : result.data
            })
        }catch(err){
            console.log(err.response.data)
        }
    }
}
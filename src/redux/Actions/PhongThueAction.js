<<<<<<< HEAD
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
=======
import { quanLyPhongChoThue } from "../../services/PhongThueServices";
import { ThongTinChiTietPhongType } from "../Types/PhongThueType";

//Nhat head
export const ThongTinChiTietPhongAction = (id) => {
  return async (dispatch) => {
    try {
      const result = await quanLyPhongChoThue.ThongTinChiTietPhong(id);
      if (result.status === 200) {
        console.log(result);
        console.log(result.data);
        dispatch({
          type:ThongTinChiTietPhongType,
          chiTietPhong:result.data
        })
      }
    } catch (error) {
      console.log("error", error);
      console.log("error", error.response?.data);
    }
  };
};

export const DatPhongAction = (ve) => {
  return  async (dispatch) => {
    try {
      const result = await quanLyPhongChoThue.DatVe(ve)
      if (result.status === 200) {
        console.log("dat ve thanh cong");
        console.log(result);
        console.log(result.data);
        console.log(result.data.message);
      }
    } catch (error) {
      console.log("error", error);
      console.log("error", error.response?.data);
    }
  }
}
//Nhat final
>>>>>>> eba15c20f0c03ecbaeaa96758bd6ce72ff97f1e5

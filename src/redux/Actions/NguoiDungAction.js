import { quanLyNguoiDung } from "../../services/NguoiDungServices";
import { layDanhSachNguoiDung } from "../Types/NguoiDungType";

export const layDanhSachNguoiDungAction = () => {
    return async (dispatch) => {
        try {
            let result = await quanLyNguoiDung.layDanhSachNguoiDung();
            let action = {
                type: layDanhSachNguoiDung,
                mangNguoiDung: result.data
            }
            dispatch(action)
        } catch (error) {
            console.log(error)
        }
    }
}
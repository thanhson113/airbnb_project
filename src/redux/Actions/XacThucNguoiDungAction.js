import { xacThucNguoiDung } from "../../services/XacThucNguoiDungService";

export const LoginAction = (nd) => {
  return async (dispatch) => {
    try {
      const result = await xacThucNguoiDung.Login(nd);
      if (result.status === 200){
          console.log(result.data.message);
          localStorage.setItem("accessToken",JSON.stringify(result.data.token))
      }
      

      
    } catch (error) {
      console.log("error", error);
      console.log("error", error.response?.data);
    }
  };
};

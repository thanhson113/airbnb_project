import { xacThucNguoiDung } from "../../services/XacThucNguoiDungService";
//nhat
export const LoginAction = (nd) => {
  return async (dispatch) => {
    try {
      const result = await xacThucNguoiDung.Login(nd);
      if (result.status === 200){
          console.log(result.data.message);
          console.log(result.data);
          console.log(result.data.user.type);
          localStorage.setItem("accessToken",result.data.token)
          localStorage.setItem("type",result.data.user.type)
      }
      

      
    } catch (error) {
      console.log("error", error);
      console.log("error", error.response?.data);
    }
  };
};
//nhat
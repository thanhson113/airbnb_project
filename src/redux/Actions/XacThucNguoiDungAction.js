/** @format */

import { message } from "antd";
import { history } from "../../App";
import { xacThucNguoiDung } from "../../services/XacThucNguoiDungService";

//nhat code
const success = (content) => {
  message.loading(`${content} in progress..`, 2.5)
  .then(() => message.success(`${content} Success`, 2.5,history.goBack()))
  
};
const errorS = (content) => {
  message.error(`${content} error! Please check all input value`,3);
};

export const LoginAction = (nd) => {
  return async (dispatch) => {
    try {
      const result = await xacThucNguoiDung.Login(nd);
<<<<<<< HEAD
      if (result.status === 200){
          console.log(result.data.message);
          localStorage.setItem("accessToken",JSON.stringify(result.data.token))
      }
      
=======
      if (result.status === 200) {
        console.log(result.data.message);
        console.log(result.data);
        console.log(result.data.user._id);
        console.log(result.data.user.type);
        localStorage.setItem("accessToken", result.data.token);
        localStorage.setItem("type", result.data.user.type);
        localStorage.setItem("id", result.data.user._id);
        await success("SignIn")
        
>>>>>>> eba15c20f0c03ecbaeaa96758bd6ce72ff97f1e5

      }
    } catch (error) {
      console.log("error", error);
      console.log("error", error.response?.data);
      errorS("SignIn")
    }
  };
};
export const RegisterAction = (nd)=>{
  return async (dispatch) => {
    try {
      const result = await xacThucNguoiDung.Register(nd);
      if (result.status === 200) {
        console.log(result.data);
        success("SignUp")
        
      }
    } catch (error) {
      console.log("error", error);
      console.log("error", error.response?.data);
      errorS("SignUp")
    }
  };
}
//nhat

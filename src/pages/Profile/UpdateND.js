/** @format */

import { DatePicker, Form, Input, Select } from "antd";
import { useFormik } from "formik";
import moment from "moment";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import * as Yup from "yup";
import { ChiTietNguoiDungAction } from "../../redux/Actions/NguoiDungAction";

const { Option } = Select;

function UpdateND(props) {
  const [turnOn, setTurnOn] = useState(true);
  const { user } = useSelector((state) => state.nguoiDungReducer);
  const { address, birthday, email, gender, phone, name } = user;

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      birthday: "",
      gender: true,
      address: "",
      type: "CLIENT",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .required("Email khong duoc de trong")
        .email("Email ko đúng định dạng email"),
      // .notOneOf(taoDSNDEmail, "Email đã được sử dụng"),
      phone: Yup.string().required("Số điện thoai khong duoc de trong"),
      //matches : kiểm tra biểu thức
      name: Yup.string()
        .required("Họ Tên khong duoc de trong")
        .matches(
          /^[a-zA-Z_ÀÁÂÃÈÉÊẾÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶ" + "ẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợ" + "ụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹý\\s]+$/,
          "Tên chỉ có ký tự chữ hoy"
        ),
      address: Yup.string().required("Địa chỉ không được để trống"),
      birthday: Yup.string().required("Chưa Nhập Ngày Sinh"),

      gender: Yup.boolean().required("Chưa chọn giới tính"),
    }),
    onSubmit: (values) => {
      console.log("values", values);
    },
  });
  const formItemLayout = {
    labelCol: {
      xs: {
        span: 24,
      },
      sm: {
        span: 8,
      },
    },
    wrapperCol: {
      xs: {
        span: 24,
      },
      sm: {
        span: 16,
      },
    },
  };
  const tailFormItemLayout = {
    wrapperCol: {
      xs: {
        span: 24,
        offset: 0,
      },
      sm: {
        span: 16,
        offset: 8,
      },
    },
  };
  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };
  const handleChangeForm = (values) => {
    console.log("Received values of form: ", values);
  };
  const handleChangeDatePicker = (values) => {
    let birthday = moment(values).format("YYYY/MM/DD");
    formik.setFieldValue(birthday);
  };

  const [form] = Form.useForm();
  return (
    <div>
      <div className="UpdateND py-2">
        <button
          onClick={() => {
            setTurnOn(!turnOn);
          }}
          className={`${turnOn ? "" : "d-none"} custom-btn btn_updateInfor`}
        >
          Cập Nhập Thông tin
        </button>
      </div>
      <Form
        {...formItemLayout}
        form={form}
        name="updateInfo"
        onFinish={formik.onSubmit}
        onValuesChange={handleChangeForm}
        size={"middle"}
        scrollToFirstError
      >
        <Form.Item label="E-mail">
          <Input
            disabled={turnOn}
            name="email"
            value={email ? email : ""}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.email && formik.errors.email ? (
            <div className="alert alert-danger">{formik.errors.email}</div>
          ) : null}
        </Form.Item>

        <Form.Item
          type="text"
          label="Tên Người dùng"
          tooltip="Tên Khai sinh của bạn "
        >
          <Input
            disabled={turnOn}
            value={name ? name : ""}
            type="text"
            name="name"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
          />
          {formik.touched.name && formik.errors.name ? (
            <div className="alert alert-danger">{formik.errors.name}</div>
          ) : null}
        </Form.Item>

        <Form.Item label="Số điện thoại">
          <Input
            disabled={turnOn}
            value={phone ? phone : ""}
            name="phone"
            style={{
              width: "100%",
            }}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.phone && formik.errors.phone ? (
            <div className="alert alert-danger">{formik.errors.phone}</div>
          ) : null}
        </Form.Item>
        <Form.Item label="Ngày sinh">
          <DatePicker
            disabled={turnOn}
            value={birthday ? moment(birthday) : ""}
            format={"YYYY/MM/DD"}
            name="birthday"
            onChange={handleChangeDatePicker}
            onBlur={formik.handleBlur}
          />
          {formik.touched.birthday && formik.errors.birthday ? (
            <div className="alert alert-danger">{formik.errors.birthday}</div>
          ) : null}
        </Form.Item>

        <Form.Item label="Địa chỉ">
          <Input.TextArea
            disabled={turnOn}
            value={address ? address : ""}
            name="address"
            showCount
            maxLength={150}
          />
          {formik.touched.address && formik.errors.address ? (
            <div className="alert alert-danger">{formik.errors.address}</div>
          ) : null}
        </Form.Item>

        <Form.Item label="Giới tính">
          <Select
            disabled={turnOn}
            value={gender ? "true" : "false"}
            name="gender"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeholder="select your gender"
          >
            <Option value="true">Boy</Option>
            <Option value="false">Girl</Option>
          </Select>
          {formik.touched.gender && formik.errors.gender ? (
            <div className="alert alert-danger d-none">
              {formik.errors.gender}
            </div>
          ) : null}
        </Form.Item>
      </Form>
      <div className={`w-100 text-center  ${turnOn ? "d-none" : ""}`}>
        <button onClick={()=>{
          setTurnOn(!turnOn)
        }} className="btn btn-outline-success w-25 py-3" type="submit">
          Update
        </button>
      </div>
    </div>
  );
}
export const formUp = UpdateND;

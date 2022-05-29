import React, { Fragment, useEffect, useState } from 'react'
import { Form, Input, Select, DatePicker } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import moment from 'moment';
import { capNhatThongTinNguoiDungAction, layThongTinNguoiDungAction } from '../../../redux/Actions/NguoiDungAction';

const { Option } = Select;

export default function EditUser(props) {

  const [componentSize, setComponentSize] = useState('default');
  const { thongTinNguoiDung } = useSelector((state) => state.nguoiDungReducer);
  // console.log(thongTinNguoiDung);
  let dispatch = useDispatch();

  // const mangEmail = dsNguoiDung?.map((user) => {
  //   return user.email
  // });


  useEffect(() => {
    let { id } = props.match.params
    dispatch(layThongTinNguoiDungAction(id))
  }, [])

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      _id: thongTinNguoiDung._id,
      name: thongTinNguoiDung.name,
      gender: thongTinNguoiDung.gender,
      email: thongTinNguoiDung.email,
      password: thongTinNguoiDung.password,
      phone: thongTinNguoiDung.phone,
      birthday: thongTinNguoiDung?.birthday,
      type: thongTinNguoiDung.type,
      address: thongTinNguoiDung.address
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Name không được để trống").matches(/^[a-zA-Z_ÀÁÂÃÈÉÊẾÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶ" + "ẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợ" + "ụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹý\\s]+$/, "Name chỉ được có ký tự chữ"),
      gender: Yup.string().required("Gender không được để trống"),
      password: Yup.string().required("Password không được để trống"),
      phone: Yup.string().required("Phone không được để trống"),
      birthday: Yup.string().required("Birthday không được để trống"),
      address: Yup.string().required("Address không được để trống"),
      type: Yup.string().required("Type không được để trống"),
    }),
    onSubmit: (values) => {
      console.log(values);
      let { id } = props.match.params
      dispatch(capNhatThongTinNguoiDungAction(id, values))
    }
  });

  const handleChangeGender = (value) => {
    if (value === 'MALE') {
      formik.setFieldValue('gender', true)
    } else {
      formik.setFieldValue('gender', false)
    }
  }

  const handleChangeType = (value) => {
    formik.setFieldValue('type', value)
  }

  const handleChangeDatePicker = (value) => {
    let birthday = moment(value).format('YYYY-MM-DD');
    formik.setFieldValue('birthday', birthday)
  }

  const onFormLayoutChange = ({ size }) => {
    setComponentSize(size);
  };

  return (
    <Fragment>
      <h2 className='mb-4'>Edit user</h2>
      <Form onSubmitCapture={formik.handleSubmit}
        labelCol={{
          span: 4,
        }}
        wrapperCol={{
          span: 14,
        }}
        layout="horizontal"
        initialValues={{
          size: componentSize,
        }}
        onValuesChange={onFormLayoutChange}
        size={componentSize}
      >
        <Form.Item label="Name">
          <Input name='name' onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.name} />
          {formik.touched.name && formik.errors.name ? (
            <div className="alert alert-danger">{formik.errors.name}</div>
          ) : null}
        </Form.Item>
        <Form.Item label="Gender">
          <Select defaultValue='' style={{ width: 120 }} onChange={handleChangeGender} >
            <Option value="MALE">MALE</Option>
            <Option value="FEMALE">FEMALE</Option>
          </Select>
        </Form.Item>
        <Form.Item label="Email">
          <Input name='email' onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.email} disabled />
          {formik.touched.email && formik.errors.email ? (
            <div className="alert alert-danger">{formik.errors.email}</div>
          ) : null}
        </Form.Item>
        <Form.Item label="Password">
          <Input name='password' onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.password} />
          {formik.touched.password && formik.errors.password ? (
            <div className="alert alert-danger">{formik.errors.password}</div>
          ) : null}
        </Form.Item>
        <Form.Item label="Phone">
          <Input name='phone' onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.phone} />
          {formik.touched.phone && formik.errors.phone ? (
            <div className="alert alert-danger">{formik.errors.phone}</div>
          ) : null}
        </Form.Item>
        <Form.Item label="Birthday">
          <DatePicker format={'YYYY/MM/DD'} onChange={handleChangeDatePicker} onBlur={formik.handleBlur} value={moment(formik.values.birthday)} />
          {formik.touched.birthday && formik.errors.birthday ? (
            <div className="alert alert-danger">{formik.errors.birthday}</div>
          ) : null}
        </Form.Item>
        <Form.Item label="Type">
          <Select defaultValue='' style={{ width: 120 }} onChange={handleChangeType} onBlur={formik.handleBlur}>
            <Option value="CLIENT">CLIENT</Option>
            <Option value="ADMIN">ADMIN</Option>
          </Select>
          {formik.touched.type && formik.errors.type ? (
            <div className="alert alert-danger">{formik.errors.type}</div>
          ) : null}
        </Form.Item>
        <Form.Item label="Address">
          <Input name='address' onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.address} />
          {formik.touched.address && formik.errors.address ? (
            <div className="alert alert-danger">{formik.errors.address}</div>
          ) : null}
        </Form.Item>

        <Form.Item label="Submit">
          <button type='submit' style={{ width: 155 }} className='btn btn-success' >Edit user</button>
        </Form.Item>
      </Form>
    </Fragment>
  )
}

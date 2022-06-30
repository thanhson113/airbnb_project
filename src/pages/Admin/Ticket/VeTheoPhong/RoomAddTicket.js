import React, { Fragment, useEffect, useState } from 'react'
import { Form, Input, Select, DatePicker } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import moment from 'moment';
import { taoVeAction } from '../../../../redux/Actions/VeAction';

export default function RoomAddTicket(props) {
  const [componentSize, setComponentSize] = useState('default');
  let dispatch = useDispatch();

  let userId = localStorage.getItem('id')
  let roomId = props.match.params.id

  const formik = useFormik({
    initialValues: {
      userId: userId,
      roomId: roomId,
      checkIn: '',
      checkOut: ''
    },
    validationSchema: Yup.object({
      checkIn: Yup.string().required("Check in không được để trống"),
      checkOut: Yup.string().required("Check out không được để trống")
    }),
    onSubmit: (values) => {
      console.log(values);
      dispatch(taoVeAction(roomId,values))
    }
  });

  const handleChangeCheckIn = (value) => {
    formik.setFieldValue('checkIn', moment(value).format('YYYY-MM-DDTHH:mm:ss.000') +'Z')
    console.log(moment(value).format('YYYY-MM-DDTHH:mm:ss.000') +'Z')
  }

  const handleChangeCheckOut = (value) => {
    formik.setFieldValue('checkOut', moment(value).format('YYYY-MM-DDTHH:mm:ss.000') +'Z')
    console.log(moment(value).format('YYYY-MM-DDTHH:mm:ss.000') +'Z')
  }

  const onFormLayoutChange = ({ size }) => {
    setComponentSize(size);
  };

  return (
    <Fragment>
      <h2 className='my-3'>Add new ticket</h2>
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
        <Form.Item label="User Id">
          <Input name='userId' onChange={formik.handleChange} value={formik.values.userId} disabled />
        </Form.Item>
        <Form.Item label="Room Id">
          <Input name='roomId' onChange={formik.handleChange} value={formik.values.roomId} disabled />
        </Form.Item>

        <Form.Item label="Check in">
          <DatePicker showTime onChange={handleChangeCheckIn} onBlur={formik.handleBlur} />
          {formik.touched.checkIn && formik.errors.checkIn ? (
            <div className="alert alert-danger">{formik.errors.checkIn}</div>
          ) : null}
        </Form.Item>
        <Form.Item label="Check out">
          <DatePicker showTime onChange={handleChangeCheckOut} onBlur={formik.handleBlur} />
          {formik.touched.checkOut && formik.errors.checkOut ? (
            <div className="alert alert-danger">{formik.errors.checkOut}</div>
          ) : null}
        </Form.Item>

        <Form.Item label="Submit">
          <button type='submit' style={{ width: 155 }} className='btn btn-success' >Add new ticket</button>
        </Form.Item>
      </Form>
    </Fragment>
  )
}

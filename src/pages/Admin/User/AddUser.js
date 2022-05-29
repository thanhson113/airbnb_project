import React, { Fragment, useEffect, useState } from 'react'
import { Form, Input, Select, DatePicker } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import moment from 'moment';
import { LayDSNguoiDungAction, themNguoiDungAction } from '../../../redux/Actions/NguoiDungAction';

const { Option } = Select;

export default function AddUser() {

    const [componentSize, setComponentSize] = useState('default');
    const { dsNguoiDung } = useSelector((state) => state.nguoiDungReducer);
    let dispatch = useDispatch();

    const mangEmail = dsNguoiDung?.map((user) => {
        return user.email
    });

    useEffect(() => {
        dispatch(LayDSNguoiDungAction());
    }, [])

    const formik = useFormik({
        initialValues: {
            name: '',
            gender: true,
            email: '',
            password: '',
            phone: '',
            birthday: '',
            type: '',
            address: ''
        },
        validationSchema: Yup.object({
            name: Yup.string().required("Name không được để trống").matches(/^[a-zA-Z_ÀÁÂÃÈÉÊẾÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶ" + "ẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợ" + "ụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹý\\s]+$/, "Name chỉ được có ký tự chữ"),
            gender: Yup.string().required("Gender không được để trống"),
            email: Yup.string().required("Email không được để trống").email("Không đúng định dạng email").notOneOf(mangEmail, "Email đã được sử dụng"),
            password: Yup.string().required("Password không được để trống"),
            phone: Yup.string().required("Phone không được để trống"),
            birthday: Yup.string().required("Birthday không được để trống"),
            address: Yup.string().required("Address không được để trống"),
            type: Yup.string().required("Type không được để trống"),
        }),
        onSubmit: (values) => {
            console.log(values);
            dispatch(themNguoiDungAction(values))
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
        let birthday = moment(value).format('YYYY-MM-DD')
        formik.setFieldValue('birthday', birthday)
    }

    const onFormLayoutChange = ({ size }) => {
        setComponentSize(size);
    };

    return (
        <Fragment>
            <h2 className='mb-4'>Add new user</h2>
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
                    <Input name='name' onChange={formik.handleChange} onBlur={formik.handleBlur}/>
                    {formik.touched.name && formik.errors.name ? (
                        <div className="alert alert-danger">{formik.errors.name}</div>
                    ) : null}
                </Form.Item>
                <Form.Item label="Gender">
                    <Select defaultValue="MALE" style={{ width: 120 }} onChange={handleChangeGender}>
                        <Option value="MALE">MALE</Option>
                        <Option value="FEMALE">FEMALE</Option>
                    </Select>
                </Form.Item>
                <Form.Item label="Email">
                    <Input name='email' onChange={formik.handleChange} onBlur={formik.handleBlur}/>
                    {formik.touched.email && formik.errors.email ? (
                        <div className="alert alert-danger">{formik.errors.email}</div>
                    ) : null}
                </Form.Item>
                <Form.Item label="Password">
                    <Input name='password' onChange={formik.handleChange} onBlur={formik.handleBlur}/>
                    {formik.touched.password && formik.errors.password ? (
                        <div className="alert alert-danger">{formik.errors.password}</div>
                    ) : null}
                </Form.Item>
                <Form.Item label="Phone">
                    <Input name='phone' onChange={formik.handleChange} onBlur={formik.handleBlur}/>
                    {formik.touched.phone && formik.errors.phone ? (
                        <div className="alert alert-danger">{formik.errors.phone}</div>
                    ) : null}
                </Form.Item>
                <Form.Item label="Birthday">
                    <DatePicker format={'YYYY/MM/DD'} onChange={handleChangeDatePicker} onBlur={formik.handleBlur} />
                    {formik.touched.birthday && formik.errors.birthday ? (
                        <div className="alert alert-danger">{formik.errors.birthday}</div>
                    ) : null}
                </Form.Item>
                <Form.Item label="Type">
                    <Select defaultValue="Change" style={{ width: 120 }} onChange={handleChangeType} onBlur={formik.handleBlur}>
                        <Option value="CLIENT">CLIENT</Option>
                        <Option value="ADMIN">ADMIN</Option>
                    </Select>
                    {formik.touched.type && formik.errors.type ? (
                        <div className="alert alert-danger">{formik.errors.type}</div>
                    ) : null}
                </Form.Item>
                <Form.Item label="Address">
                    <Input name='address' onChange={formik.handleChange} onBlur={formik.handleBlur}/>
                    {formik.touched.address && formik.errors.address ? (
                        <div className="alert alert-danger">{formik.errors.address}</div>
                    ) : null}
                </Form.Item>

                <Form.Item label="Submit">
                    <button type='submit' style={{ width: 155 }} className='btn btn-success' >Add new user</button>
                </Form.Item>
            </Form>
        </Fragment>
    )
}

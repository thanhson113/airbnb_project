import React, { Fragment, useEffect, useState } from 'react'
import { Form, Input, Select, DatePicker, InputNumber } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { themViTriAction } from '../../../redux/Actions/ViTriActon';
import { layDanhSachViTri } from '../../../redux/Types/ViTriType';

const { Option } = Select;

export default function AddLocation() {
    const [componentSize, setComponentSize] = useState('default');

    let dispatch = useDispatch();

    const formik = useFormik({
        initialValues: {
            name: "",
            country: "",
            province: "",
            valueate: 0
        },
        validationSchema: Yup.object({
            name: Yup.string().required("Name không được để trống"),
            country: Yup.string().required("Country không được để trống"),
            province: Yup.string().required("Province không được để trống"),
            // valueate: Yup.string().required("Valueate không được để trống"),
        }),
        onSubmit: (values) => {
            console.log(values);
            dispatch(themViTriAction(values))
        }
    });

    const handleChangeInputNumber = (name) => {
        return (value) => {
            formik.setFieldValue(name, value)
        }
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
                    <Input name='name' onChange={formik.handleChange} onBlur={formik.handleBlur} />
                    {formik.touched.name && formik.errors.name ? (
                        <div className="alert alert-danger">{formik.errors.name}</div>
                    ) : null}
                </Form.Item>
                <Form.Item label="Country">
                    <Input name='country' onChange={formik.handleChange} onBlur={formik.handleBlur} />
                    {formik.touched.country && formik.errors.country ? (
                        <div className="alert alert-danger">{formik.errors.country}</div>
                    ) : null}
                </Form.Item>
                <Form.Item label="Province">
                    <Input name='province' onChange={formik.handleChange} onBlur={formik.handleBlur} />
                    {formik.touched.province && formik.errors.province ? (
                        <div className="alert alert-danger">{formik.errors.province}</div>
                    ) : null}
                </Form.Item>
                <Form.Item label="Valueate">
                    <InputNumber onChange={handleChangeInputNumber('valueate')}/>
                </Form.Item>

                <Form.Item label="Submit">
                    <button type='submit' style={{ width: 175 }} className='btn btn-success' >Add new location</button>
                </Form.Item>
            </Form>
        </Fragment>
    )
}

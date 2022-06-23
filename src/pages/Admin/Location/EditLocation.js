import React, { Fragment, useEffect, useState } from 'react'
import { Form, Input, Select, InputNumber } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { capNhatThongTinViTriAction, layThongTinViTriAction } from '../../../redux/Actions/ViTriActon';

const { Option } = Select;

export default function Editlocation(props) {
    const [componentSize, setComponentSize] = useState('default');
    const { thongTinViTri } = useSelector((state) => state.viTriReducer);
    console.log(thongTinViTri);

    let dispatch = useDispatch();

    useEffect(() => {
        let { id } = props.match.params
        dispatch(layThongTinViTriAction(id))
    }, [])

    const formik = useFormik({
        enableReinitialize: true,

        initialValues: {
            name: thongTinViTri.name,
            country: thongTinViTri.country,
            province: thongTinViTri.province,
            valueate: thongTinViTri.valueate
        },
        validationSchema: Yup.object({
            name: Yup.string().required("Name không được để trống"),
            country: Yup.string().required("Country không được để trống"),
            province: Yup.string().required("Province không được để trống"),
        }),
        onSubmit: (values) => {
            console.log(values);
            let { id } = props.match.params;
            dispatch(capNhatThongTinViTriAction(id, values))
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
            <h2 className='my-3'>Edit location</h2>
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
                <Form.Item label="Country">
                    <Input name='country' onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.country} />
                    {formik.touched.country && formik.errors.country ? (
                        <div className="alert alert-danger">{formik.errors.country}</div>
                    ) : null}
                </Form.Item>
                <Form.Item label="Province">
                    <Input name='province' onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.province} />
                    {formik.touched.province && formik.errors.province ? (
                        <div className="alert alert-danger">{formik.errors.province}</div>
                    ) : null}
                </Form.Item>
                <Form.Item label="Valueate">
                    <InputNumber onChange={handleChangeInputNumber('valueate')} value={formik.values.valueate} />
                </Form.Item>

                <Form.Item label="Submit">
                    <button type='submit' style={{ width: 175 }} className='btn btn-success' >Edit location</button>
                </Form.Item>
            </Form>
        </Fragment>
    )
}

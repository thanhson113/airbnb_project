import React, { Fragment, useEffect, useState } from 'react'
import { Form, Input, Select, DatePicker, InputNumber } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { capNhatThongTinChiTietDanhGiaAction, layThongTinChiTietDanhGiaAction } from '../../../redux/Actions/DanhGiaAction';

const { Option } = Select;

export default function EditFeedback(props) {
    const [componentSize, setComponentSize] = useState('default');
    const { thongTinChiTietDanhGia } = useSelector((state) => state.danhGiaReducer);
    console.log(thongTinChiTietDanhGia);

    let feedbackRoom = {}
    if (localStorage.getItem('roomParams1')) {
        feedbackRoom = JSON.parse(localStorage.getItem('roomParams1'))
    }

    let dispatch = useDispatch();
         
    let { id } = props.match.params
    useEffect(() => {
        dispatch(layThongTinChiTietDanhGiaAction(id))
    }, [])

    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            content: thongTinChiTietDanhGia.content
        },
        validationSchema: Yup.object({
            content: Yup.string().required("Content không được để trống"),
        }),
        onSubmit: (values) => {
            console.log(values);
            dispatch(capNhatThongTinChiTietDanhGiaAction(id, values, feedbackRoom._id))
        }
    });

    const onFormLayoutChange = ({ size }) => {
        setComponentSize(size);
    };

    return (
        <Fragment>
            <h2 className='my-3'>Add new feedback</h2>
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
                    <Input name='name' onChange={formik.handleChange} onBlur={formik.handleBlur} value={thongTinChiTietDanhGia.userId?.name} disabled />
                </Form.Item>
                <Form.Item label="User Id">
                    <Input name='id' onChange={formik.handleChange} onBlur={formik.handleBlur} value={thongTinChiTietDanhGia.userId?._id} disabled />
                </Form.Item>
                <Form.Item label="Content">
                    <Input name='content' onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.content} />
                    {formik.touched.content && formik.errors.content ? (
                        <div className="alert alert-danger">{formik.errors.content}</div>
                    ) : null}
                </Form.Item>

                <Form.Item label="Submit">
                    <button type='submit' style={{ width: 175 }} className='btn btn-success' >Edit feedback</button>
                </Form.Item>
            </Form>
        </Fragment>
    )
}


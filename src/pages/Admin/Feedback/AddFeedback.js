import React, { Fragment, useEffect, useState } from 'react'
import { Form, Input, Select, DatePicker, InputNumber } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { TaoDanhGiaTheoPhongAction, taoDanhGiaTheoPhongADAction } from '../../../redux/Actions/DanhGiaAction';

const { Option } = Select;

export default function AddFeedback(props) {
    const [componentSize, setComponentSize] = useState('default');

    let { id } = props.match.params
    console.log(id)

    let dispatch = useDispatch();

    const formik = useFormik({
        initialValues: {
            content: "",
        },
        validationSchema: Yup.object({
            content: Yup.string().required("Content không được để trống"),
        }),
        onSubmit: (values) => {
            console.log(values);
            dispatch(taoDanhGiaTheoPhongADAction(id, values))
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
                <Form.Item label="Content">
                    <Input name='content' onChange={formik.handleChange} onBlur={formik.handleBlur} />
                    {formik.touched.content && formik.errors.content ? (
                        <div className="alert alert-danger">{formik.errors.content}</div>
                    ) : null}
                </Form.Item>

                <Form.Item label="Submit">
                    <button type='submit' style={{ width: 175 }} className='btn btn-success' >Add new feedback</button>
                </Form.Item>
            </Form>
        </Fragment>
    )
}


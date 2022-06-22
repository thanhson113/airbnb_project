import React, { Fragment, useEffect, useState } from 'react'
import { Form, Input, Select, DatePicker, InputNumber, Switch } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { themPhongThueAction } from '../../../redux/Actions/PhongThueAction';

const { Option } = Select;
const { TextArea } = Input;

export default function AddRoom(props) {

    const [componentSize, setComponentSize] = useState('default');

    let { id } = props.match.params

    let dispatch = useDispatch();

    const formik = useFormik({

        initialValues: {
            name: "",
            guests: 1,
            bedRoom: 1,
            bath: 1,
            description: "",
            price: 100000,
            elevator: false,
            hotTub: false,
            pool: false,
            indoorFireplace: false,
            dryer: false,
            gym: false,
            kitchen: false,
            wifi: false,
            heating: false,
            cableTV: false,
            locationId: id
        },
        validationSchema: Yup.object({
            name: Yup.string().required("Name không được để trống"),
            description: Yup.string().required("Description không được để trống"),
        }),
        onSubmit: (values) => {
            console.log(values);
            dispatch(themPhongThueAction(values,id))
        }
    });

    const handleChangeInputNumber = (name) => {
        return (value) => {
            formik.setFieldValue(name, value)
        }
    }

    const handleChangeSwitch = (name) => {
        return (value) => {
            formik.setFieldValue(name, value)
        }
    }

    const onFormLayoutChange = ({ size }) => {
        setComponentSize(size);
    };

    return (
        <Fragment>
            <h2 className='my-3'>Add new room</h2>
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
                <Form.Item label="Guests">
                    <InputNumber defaultValue={1} min={1} max={10} onChange={handleChangeInputNumber('guests')} />
                </Form.Item>
                <Form.Item label="Bed room">
                    <InputNumber defaultValue={1} min={1} max={10} onChange={handleChangeInputNumber('bedRoom')} />
                </Form.Item>
                <Form.Item label="Bath">
                    <InputNumber defaultValue={1} min={1} max={10} onChange={handleChangeInputNumber('bath')} />
                </Form.Item>
                <Form.Item label="Price">
                    <InputNumber defaultValue={100000} min={100000} max={999999} onChange={handleChangeInputNumber('price')} />
                </Form.Item>

                <Form.Item label="Description">
                    <Input name='description' onChange={formik.handleChange} onBlur={formik.handleBlur} />
                    {formik.touched.description && formik.errors.description ? (
                        <div className="alert alert-danger">{formik.errors.description}</div>
                    ) : null}
                </Form.Item>

                <Form.Item label="Elevator" valuePropName="checked">
                    <Switch style={{ width: 20 }} onChange={handleChangeSwitch('elevator')} />
                </Form.Item>
                <Form.Item label="Hot tub" valuePropName="checked">
                    <Switch style={{ width: 20 }} onChange={handleChangeSwitch('hotTub')} />
                </Form.Item>
                <Form.Item label="Pool" valuePropName="checked">
                    <Switch style={{ width: 20 }} onChange={handleChangeSwitch('pool')} />
                </Form.Item>
                <Form.Item label="Indoor fireplace" valuePropName="checked">
                    <Switch style={{ width: 20 }} onChange={handleChangeSwitch('indoorFireplace')} />
                </Form.Item>
                <Form.Item label="Dryer" valuePropName="checked">
                    <Switch style={{ width: 20 }} onChange={handleChangeSwitch('dryer')} />
                </Form.Item>
                <Form.Item label="Gym" valuePropName="checked">
                    <Switch style={{ width: 20 }} onChange={handleChangeSwitch('gym')} />
                </Form.Item>
                <Form.Item label="Kitchen" valuePropName="checked">
                    <Switch style={{ width: 20 }} onChange={handleChangeSwitch('kitchen')} />
                </Form.Item>
                <Form.Item label="Wifi" valuePropName="checked">
                    <Switch style={{ width: 20 }} onChange={handleChangeSwitch('wifi')} />
                </Form.Item>
                <Form.Item label="Heating" valuePropName="checked">
                    <Switch style={{ width: 20 }} onChange={handleChangeSwitch('heating')} />
                </Form.Item>
                <Form.Item label="Cable TV" valuePropName="checked">
                    <Switch style={{ width: 20 }} onChange={handleChangeSwitch('cableTV')} />
                </Form.Item>

                <Form.Item label="Submit">
                    <button type='submit' style={{ width: 175 }} className='btn btn-success' >Add new room</button>
                </Form.Item>
            </Form>
        </Fragment>
    )
}

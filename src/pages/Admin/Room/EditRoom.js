import React, { Fragment, useEffect, useState } from 'react'
import { Form, Input, Select, DatePicker, InputNumber, Switch } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { capNhatPhongThueAction, ThongTinChiTietPhongAction } from '../../../redux/Actions/PhongThueAction';

const { Option } = Select;
const { TextArea } = Input;

export default function AddRoom(props) {

    const [componentSize, setComponentSize] = useState('default');
    const { chiTietPhong } = useSelector((state) => state.phongThueReducer);
    console.log(chiTietPhong);

    let { id } = props.match.params
    console.log(id)

    let location = {}
    if (localStorage.getItem('locationParams')) {
        location = JSON.parse(localStorage.getItem('locationParams'))
    }

    let dispatch = useDispatch();

    useEffect(() => {
        dispatch(ThongTinChiTietPhongAction(id))
    }, [])

    const formik = useFormik({
        enableReinitialize: true,

        initialValues: {
            name: chiTietPhong.name,
            guests: chiTietPhong.guests,
            bedRoom: chiTietPhong.bedRoom,
            bath: chiTietPhong.bath,
            description: chiTietPhong.description,
            price: chiTietPhong.price,
            elevator: chiTietPhong.elevator,
            hotTub: chiTietPhong.hotTub,
            pool: chiTietPhong.pool,
            indoorFireplace: chiTietPhong.indoorFireplace,
            dryer: chiTietPhong.dryer,
            gym: chiTietPhong.gym,
            kitchen: chiTietPhong.kitchen,
            wifi: chiTietPhong.wifi,
            heating: chiTietPhong.heating,
            cableTV: chiTietPhong.cableTV,
            locationId: location._id
        },
        validationSchema: Yup.object({
            name: Yup.string().required("Name không được để trống"),
            description: Yup.string().required("Description không được để trống"),
        }),
        onSubmit: (values) => {
            console.log(values);
            dispatch(capNhatPhongThueAction(id, values, location._id))
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

    let room = {}
    if (localStorage.getItem('roomParams')) {
        room = JSON.parse(localStorage.getItem('roomParams'))
    }

    return (
        <Fragment>
            <h2 className='my-3'>Edit room</h2>
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
                <Form.Item label="Guests">
                    <InputNumber defaultValue={1} min={1} max={10} onChange={handleChangeInputNumber('guests')} value={formik.values.guests} />
                </Form.Item>
                <Form.Item label="Bed room">
                    <InputNumber defaultValue={1} min={1} max={10} onChange={handleChangeInputNumber('bedRoom')} value={formik.values.bedRoom} />
                </Form.Item>
                <Form.Item label="Bath">
                    <InputNumber defaultValue={1} min={1} max={10} onChange={handleChangeInputNumber('bath')} value={formik.values.bath} />
                </Form.Item>
                <Form.Item label="Price">
                    <InputNumber defaultValue={100000} min={100000} max={999999} onChange={handleChangeInputNumber('price')} value={formik.values.price} />
                </Form.Item>

                <Form.Item label="Description">
                    <Input name='description' onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.description} />
                    {formik.touched.description && formik.errors.description ? (
                        <div className="alert alert-danger">{formik.errors.description}</div>
                    ) : null}
                </Form.Item>

                <Form.Item label="Elevator" valuePropName="checked">
                    <Switch style={{ width: 20 }} onChange={handleChangeSwitch('elevator')} checked={formik.values.elevator} />
                </Form.Item>
                <Form.Item label="Hot tub" valuePropName="checked">
                    <Switch style={{ width: 20 }} onChange={handleChangeSwitch('hotTub')} checked={formik.values.hotTub} />
                </Form.Item>
                <Form.Item label="Pool" valuePropName="checked">
                    <Switch style={{ width: 20 }} onChange={handleChangeSwitch('pool')} checked={formik.values.pool} />
                </Form.Item>
                <Form.Item label="Indoor fireplace" valuePropName="checked">
                    <Switch style={{ width: 20 }} onChange={handleChangeSwitch('indoorFireplace')} checked={formik.values.indoorFireplace} />
                </Form.Item>
                <Form.Item label="Dryer" valuePropName="checked">
                    <Switch style={{ width: 20 }} onChange={handleChangeSwitch('dryer')} checked={formik.values.dryer} />
                </Form.Item>
                <Form.Item label="Gym" valuePropName="checked">
                    <Switch style={{ width: 20 }} onChange={handleChangeSwitch('gym')} checked={formik.values.gym} />
                </Form.Item>
                <Form.Item label="Kitchen" valuePropName="checked">
                    <Switch style={{ width: 20 }} onChange={handleChangeSwitch('kitchen')} checked={formik.values.kitchen} />
                </Form.Item>
                <Form.Item label="Wifi" valuePropName="checked">
                    <Switch style={{ width: 20 }} onChange={handleChangeSwitch('wifi')} checked={formik.values.wifi} />
                </Form.Item>
                <Form.Item label="Heating" valuePropName="checked">
                    <Switch style={{ width: 20 }} onChange={handleChangeSwitch('heating')} checked={formik.values.heating} />
                </Form.Item>
                <Form.Item label="Cable TV" valuePropName="checked">
                    <Switch style={{ width: 20 }} onChange={handleChangeSwitch('cableTV')} checked={formik.values.cableTV} />
                </Form.Item>

                <Form.Item label="Submit">
                    <button type='submit' style={{ width: 175 }} className='btn btn-success' >Edit room</button>
                </Form.Item>
            </Form>
        </Fragment>
    )
}

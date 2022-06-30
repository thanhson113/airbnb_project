import React, { Fragment, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Form } from 'antd';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { ThongTinChiTietPhongAction, UploadAvatarRoomAction } from '../../../redux/Actions/PhongThueAction';

export default function AvatarRoom(props) {
    const [componentSize, setComponentSize] = useState('default');
    const { chiTietPhong } = useSelector((state) => state.phongThueReducer);
    console.log(chiTietPhong);
    const [img, setImg] = useState('');
    const dispatch = useDispatch();

    let { id } = props.match.params;
    useEffect(() => {
        dispatch(ThongTinChiTietPhongAction(id))
    }, [])

    let location = {}
    if (localStorage.getItem('locationParams1')) {
        location = JSON.parse(localStorage.getItem('locationParams1'))
    }

    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            room: null
        },
        validationSchema: Yup.object({

        }),
        onSubmit: (values) => {
            console.log(values);
            let formData = new FormData();
            formData.append('room', values.room, values.room.name);

            console.log(formData.get('room'))
            dispatch(UploadAvatarRoomAction(id, formData, location._id))
        }
    })

    const handleChangeFile = (event) => {
        let file = event.target.files[0];
        if (file.type === 'image/jpeg' || file.type === 'image/gif' || file.type === 'image/png' || file.type === 'image/jpg') {
            let reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = (e) => {
                setImg(e.target.result)
            }
            console.log(file)
            formik.setFieldValue('room', file)
        }
    }

    const onFormLayoutChange = ({ size }) => {
        setComponentSize(size);
    };

    return (
        <Fragment>
            <h2 className='mb-4'>Add avatar room</h2>
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
                <Form.Item label="Avatar">
                    <input type='file' onChange={handleChangeFile} accept='image/jpeg, image/gif, image/png, image/jpg' />

                    <br />
                    <img style={{ width: 150, height: 150 }} src={img === '' ? chiTietPhong.image : img} alt="..." />
                </Form.Item>
                <Form.Item label="Submit">
                    <button type='submit' style={{ width: 135 }} className='btn btn-success' >Add avatar</button>
                </Form.Item>
            </Form>
        </Fragment>
    );
}

import React, { useEffect, useState } from 'react'
import { Form, Input, Button, Checkbox, Cascader, DatePicker, InputNumber, Select } from 'antd';
import { Formik, useFormik } from 'formik';
import moment from 'moment';
import { quanLyViTri } from '../../../../services/ViTriServices';
import { quanLyPhongChoThue } from '../../../../services/PhongThueServices';
import { useDispatch, useSelector } from 'react-redux';
import { layDanhSachViTriAction } from '../../../../redux/Actions/ViTriActon';
import { layDSPhongThueTheoViTri } from '../../../../redux/Actions/PhongThueAction';

export default function UserAddTicket(props) {
    const { mangViTri } = useSelector(state => state.viTriReducer);
    console.log(mangViTri);

    let dispatch = useDispatch()

    let { id } = props.match.params;
    const formik = useFormik({
        initialValues: {
            userId: id,
            roomId: '',
            checkIn: '',
            checkOut: ''
        },
        // onSubmit: async (values) => {
        //     console.log(values);
        //     try {
        //         let result = await manager.taoLichChieu(values);
        //         alert(result.data.content)
        //     } catch (error) {
        //         console.log(error)
        //     }
        // }
        onSubmit: (values) => {
            console.log(values);
        }
    })

    const [state, setState] = useState({
        location: [],
        room: []
    });
    console.log(state.room);

    useEffect(() => {
        // dispatch(layDanhSachViTriAction());
        // dispatch(layDSPhongThueTheoViTri());

        try {
            async function fetchMyAPI() {
                let result = await dispatch(layDanhSachViTriAction());
                console.log(result)
                setState({
                    ...state,
                    location: result.data
                })
            }
            fetchMyAPI()
        } catch (error) {
            console.log(error)
        }
    }, [])

    const handleChangeLocation = async (value) => {
        console.log(value);
        try {
            let result = await dispatch(layDSPhongThueTheoViTri(value));
            // console.log(result.data.content);
            setState({
                ...state,
                room: result.data
            })
        } catch (error) {
            console.log(error)
        }
    }

    const handleChangeRoom = (value) => {
        formik.setFieldValue('roomId', value)
    }

    const convertSelectHTR = () => {
        // state.heThongRapChieu?.map((htr, index) => ({ label: htr.tenHeThongRap, value: htr.maHeThongRap }))
        return mangViTri?.map((htr) => {
            return {
                label: htr.name,
                value: htr._id
            }
        })
    }

    const handleChangeCheckIn = (value) => {
        formik.setFieldValue('checkIn', moment(value).format('YYYY-MM-DDTHH:mm:ss.000') + 'Z')
        console.log(moment(value).format('YYYY-MM-DDTHH:mm:ss.000') + 'Z')
    }

    const handleChangeCheckOut = (value) => {
        formik.setFieldValue('checkOut', moment(value).format('YYYY-MM-DDTHH:mm:ss.000') + 'Z')
        console.log(moment(value).format('YYYY-MM-DDTHH:mm:ss.000') + 'Z')
    }




    // let film = {}
    // if (localStorage.getItem('filmParams')) {
    //     film = JSON.parse(localStorage.getItem('filmParams'))
    // }

    return (
        <div>
            <Form
                name="basic"
                onSubmitCapture={formik.handleSubmit}
                labelCol={{
                    span: 8,
                }}
                wrapperCol={{
                    span: 16,
                }}
                initialValues={{
                    remember: true,
                }}
                autoComplete="off"
            >
                {/* <h2>Tạo lịch chiếu - {film.tenPhim}</h2>
                <img src={film.hinhAnh} alt="..." width={100} height={150} /> */}

                <h2>Add new ticket</h2>

                <Form.Item label="User Id">
                    <Input name='userId' onChange={formik.handleChange} value={formik.values.userId} disabled />
                </Form.Item>

                <Form.Item label="Location" >
                    <Select style={{ width: 300 }} options={convertSelectHTR()} onChange={handleChangeLocation} placeholder="Chọn vị trí" />
                </Form.Item>

                <Form.Item label="Room" >
                    <Select style={{ width: 300 }} options={state.handleChangeRoom?.map((room) => ({ label: room.name, value: room.roomId }))} onChange={handleChangeRoom} placeholder="Chọn phòng" />
                </Form.Item>

                <Form.Item label="Check in" >
                    <DatePicker showTime onChange={handleChangeCheckIn} />
                </Form.Item>
                <Form.Item label="Check out" >
                    <DatePicker showTime onChange={handleChangeCheckOut} />
                </Form.Item>

                <Form.Item label="Chức năng" >
                    <Button type="primary" htmlType="submit" style={{ width: 135 }}>Add new ticket</Button>
                </Form.Item>

            </Form>
        </div>
    )
}

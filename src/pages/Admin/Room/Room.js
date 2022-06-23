import React, { Fragment, useEffect } from 'react';
import { Table, Button, Input, Tag, Space } from 'antd';
import { DeleteOutlined, SearchOutlined, EditOutlined, CalendarOutlined, FileImageOutlined } from '@ant-design/icons';
import { history } from '../../../App';
import { useDispatch, useSelector } from 'react-redux';
import { layDSPhongThueTheoViTri, xoaPhongThueAction } from '../../../redux/Actions/PhongThueAction';
import { NavLink } from 'react-router-dom';

const { Search } = Input;

export default function Room(props) {
    const { dsPhongTheoViTri } = useSelector(state => state.phongThueReducer)
    console.log(dsPhongTheoViTri);

    let dispatch = useDispatch();

    let { id } = props.match.params
    console.log(id)

    useEffect(() => {
        dispatch(layDSPhongThueTheoViTri(id))
    }, [])

    const columns = [
        {
            title: 'Serial',
            render: (text, stt, index) => {
                return <Fragment>
                    <p className='mt-3'>{index + 1}</p>
                </Fragment>
            }
        },
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Image',
            dataIndex: 'image',
            key: 'image',
            render: (text, location) => {
                return <Fragment>
                    <img src={location.image} alt={location.name} width={50} height={50} onError={(e) => { e.target.onError = null; e.target.src = 'https://picsum.photos/50' }} />
                </Fragment>
            },
        },
        {
            title: 'Guests',
            dataIndex: 'guests',
            key: 'guests',
        },
        {
            title: 'Bed Room',
            dataIndex: 'bedRoom',
            key: 'bedRoom',
        },
        {
            title: 'Bath',
            dataIndex: 'bath',
            key: 'bath',
        },
        {
            title: 'Description',
            dataIndex: 'description',
            key: 'description',
        },
        {
            title: 'Price (VND)',
            dataIndex: 'price',
            key: 'price',
        },
        {
            title: 'Feedback',
            dataIndex: 'feedback',
            key: 'feedback',
            render: (text, room) => {
                return <Fragment>
                    <NavLink to={`/admin/feedback/${room._id}`} onClick={() => {
                        localStorage.setItem('roomParams1', JSON.stringify(room))
                    }}>Feedback</NavLink>
                </Fragment>
            },
        },
        {
            title: 'Action',
            dataIndex: 'action',
            render: (text, room) => {
                return <Fragment>
                    <NavLink key={1} to={`/admin/room/edit/${room._id}`} style={{ color: 'blue', fontSize: 25, paddingRight: 10 }} onClick={() => {
                        localStorage.setItem('roomParams', JSON.stringify(room))
                    }}><EditOutlined /></NavLink>
                    <span onClick={() => {
                        if (window.confirm('Bạn có chắc muốn xóa phòng ' + room.name + ' không?')) {
                            dispatch(xoaPhongThueAction(room._id, id));
                        }
                    }} key={2} style={{ color: 'red', fontSize: 25, paddingRight: 10, cursor: 'pointer' }}><DeleteOutlined /></span>

                    <NavLink key={3} to={`/admin/room/avatar/${room._id}`} style={{ color: 'green', fontSize: 25, paddingRight: 10 }}><FileImageOutlined /></NavLink>
                </Fragment>
            }
        },
    ];

    const data = dsPhongTheoViTri;

    function onChange(pagination, filters, sorter, extra) {
        console.log("params", pagination, filters, sorter, extra);
    }

    let location = {}
    if (localStorage.getItem('locationParams1')) {
        location = JSON.parse(localStorage.getItem('locationParams1'))
    }


    return (
        <div className="dashboard-content">
            <h2 className='my-3'>Danh sách phòng tại: {location.name}</h2>
            <Button type='primary' style={{ width: 150 }} className='mb-4' onClick={() => {
                history.push(`/admin/room/add/${location._id}`)
            }}>Add new room</Button>
            <Table columns={columns} dataSource={data} onChange={onChange} rowKey={'_id'} />
        </div>
    )
}

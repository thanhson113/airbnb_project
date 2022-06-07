import React, {Fragment, useEffect } from 'react';
import { Table, Button, Input, Tag, Space } from 'antd';
import { DeleteOutlined, SearchOutlined, EditOutlined, CalendarOutlined } from '@ant-design/icons';
import { history } from '../../../App';
import { useDispatch, useSelector } from 'react-redux';
import { layDSPhongThueTheoViTri } from '../../../redux/Actions/PhongThueAction';
import { NavLink } from 'react-router-dom';

const { Search } = Input;

export default function Room(props) {
    const { dsPhongTheoViTri } = useSelector(state => state.phongThueReducer)
    console.log(dsPhongTheoViTri);

    let dispatch = useDispatch();

    useEffect(() => {
        let { id } = props.match.params
        dispatch(layDSPhongThueTheoViTri(id))
    }, [])

    const columns = [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Image',
            dataIndex: 'image',
            key:'image',
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
            title: 'Action',
            dataIndex: 'action',
            render: (text, user) => {
                return <Fragment>
                    <p>Hành động</p>
                    {/* <NavLink key={1} to={`/admin/location/edit/${user._id}`} style={{ color: 'blue', fontSize: 25, paddingRight: 10 }}><EditOutlined /></NavLink> */}

                    {/* <span onClick={() => {
                        if (window.confirm('Bạn có chắc muốn xóa tài khoản ' + user.name + ' không?')) {
                            dispatch(xoaNguoiDungAction(user._id));
                        }
                    }} key={2} style={{ color: 'red', fontSize: 25, paddingRight: 10, cursor: 'pointer' }}><DeleteOutlined /></span> */}
                </Fragment>
            }
        },
    ];

    const data = dsPhongTheoViTri;

    const onSearch = () => {

    }

    function onChange(pagination, filters, sorter, extra) {
        console.log("params", pagination, filters, sorter, extra);
    }

    let location = {}
    if (localStorage.getItem('locationParams')) {
        location = JSON.parse(localStorage.getItem('locationParams'))
    }


    return (
        <div className="dashboard-content">
            <h2 className='my-3'>Danh sách phòng tại: {location.name}</h2>
            <Button type='primary' style={{ width: 150 }} className='mb-4' onClick={() => {
                // history.push('/admin/location/add')
            }}>Add new room</Button>
            <Search
                className='mb-4'
                placeholder="Search"
                enterButton={<SearchOutlined />}
                size="large"
                onSearch={onSearch}
            />
            <Table columns={columns} dataSource={data} onChange={onChange} rowKey={'_id'} />
        </div>
    )
}

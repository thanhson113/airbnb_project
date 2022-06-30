import React, { Fragment, useEffect } from 'react';
import { Table, Button, Input } from 'antd';
import { DeleteOutlined, EditOutlined, FileImageOutlined } from '@ant-design/icons';
import { history } from '../../../App';
import { useDispatch, useSelector } from 'react-redux';
import { layDanhSachViTriAction, SearchViTriAction, xoaViTriAction } from '../../../redux/Actions/ViTriActon';
import { NavLink } from 'react-router-dom';

const { Search } = Input;

export default function Location() {
    const { mangViTri } = useSelector(state => state.viTriReducer)
    console.log(mangViTri);

    let dispatch = useDispatch();

    useEffect(() => {
        dispatch(layDanhSachViTriAction())
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
            title: 'Room',
            dataIndex: 'room',
            key: 'room',
            render: (text, location) => {
                return <Fragment>
                    <NavLink to={`/admin/room/${location._id}`} onClick={() => {
                        localStorage.setItem('locationParams1', JSON.stringify(location))
                    }}>List room</NavLink>
                </Fragment>
            },
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
            title: 'Country',
            dataIndex: 'country',
            key: 'country',
        },
        {
            title: 'Province',
            dataIndex: 'province',
            key: 'province',
        },
        {
            title: 'Valueate',
            dataIndex: 'valueate',
            key: 'valueate',
        },
        {
            title: 'Action',
            dataIndex: 'action',
            render: (text, location) => {
                return <Fragment>
                    <NavLink key={1} to={`/admin/location/edit/${location._id}`} style={{ color: 'blue', fontSize: 25, paddingRight: 10 }}><EditOutlined /></NavLink>

                    <span onClick={() => {
                        if (window.confirm('Bạn có chắc muốn xóa vị trí ' + location.name + ' không?')) {
                            dispatch(xoaViTriAction(location._id));
                        }
                    }} key={2} style={{ color: 'red', fontSize: 25, paddingRight: 10, cursor: 'pointer' }}><DeleteOutlined /></span>

                    <NavLink key={3} to={`/admin/location/avatar/${location._id}`} style={{ color: 'green', fontSize: 25, paddingRight: 10 }}><FileImageOutlined /></NavLink>
                </Fragment>
            }
        },
    ];

    const data = mangViTri;


    const onSearch = (value) => {
        console.log(value);
        if(value) dispatch(layDanhSachViTriAction(value))
        else dispatch(layDanhSachViTriAction())
    }


    function onChange(pagination, filters, sorter, extra) {
        console.log("params", pagination, filters, sorter, extra);
    }

    return (
        <div className="dashboard-content">
            <h2 className='my-3'>Location</h2>
            <Button type='primary' style={{ width: 150 }} className='mb-4' onClick={() => {
                history.push('/admin/location/add')
            }}>Add new location</Button>

            <Search
                className='mb-4'
                placeholder="Nhập vị trí bạn muốn để tìm kiếm chính xác !"
                allowClear
                enterButton={<SearchOutlined />}
                size="large"
                onSearch={onSearch}
            />

            <Table columns={columns} dataSource={data} onChange={onChange} rowKey={'_id'} />
        </div>
    )
}
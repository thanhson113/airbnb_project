import React, { Fragment,useEffect } from 'react'
import { Table, Input  } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { layDanhSachViTriAction } from '../../../../redux/Actions/ViTriActon';

const { Search } = Input;

export default function LocationTicket() {
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
            title: 'Room',
            dataIndex: 'room',
            key: 'room',
            render: (text, location) => {
                return <Fragment>
                    <NavLink to={`/admin/ticket/room/${location._id}`}>List room</NavLink>
                </Fragment>
            },
        },
    ];

    const data = mangViTri;

    function onChange(pagination, filters, sorter, extra) {
        console.log("params", pagination, filters, sorter, extra);
    }

    return (
        <div className="dashboard-content">
            <h2 className='my-3'>Ticket - Location</h2>
            <Table columns={columns} dataSource={data} onChange={onChange} rowKey={'_id'} />
        </div>
    )
}

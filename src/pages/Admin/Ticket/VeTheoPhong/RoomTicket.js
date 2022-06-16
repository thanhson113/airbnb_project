import { Table } from 'antd';
import React, { Fragment, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { layDSPhongThueTheoViTri } from '../../../../redux/Actions/PhongThueAction';

export default function RoomTicket(props) {
    const { dsPhongTheoViTri } = useSelector(state => state.phongThueReducer)
    console.log(dsPhongTheoViTri);

    let dispatch = useDispatch();

    let { id } = props.match.params

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
            title: 'Ticket',
            dataIndex: 'ticket',
            key: 'ticket',
            render: (text, room) => {
                return <Fragment>
                    <NavLink to={`/admin/ticket/${room._id}`}>List ticket</NavLink>
                </Fragment>
            },
        },
    ];

    const data = dsPhongTheoViTri;

    function onChange(pagination, filters, sorter, extra) {
        console.log("params", pagination, filters, sorter, extra);
    }

    return (
        <div className="dashboard-content">
            <h2 className='my-3'>Ticket - Room</h2>
            <Table columns={columns} dataSource={data} onChange={onChange} rowKey={'_id'} />
        </div>
    )
}



import { DeleteOutlined, EditOutlined, Login } from '@mui/icons-material';

import { Button, Table } from 'antd';
import React, { Fragment, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { history } from '../../../../App';
import { layDSVeTheoPhongAction, xoaVeAction } from '../../../../redux/Actions/VeAction';

export default function Ticket(props) {
    const { dsVeIdroom } = useSelector(state => state.VeReducer)
    console.log(dsVeIdroom);

    let dispatch = useDispatch();

    let { id } = props.match.params
    console.log(id)

    useEffect(() => {
        dispatch(layDSVeTheoPhongAction(id))
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
            title: 'ID',
            dataIndex: '_id',
            key: '_id',
        },
        {
            title: 'Check in',
            dataIndex: 'checkIn',
            key: 'checkIn',
        },
        {
            title: 'Check out',
            dataIndex: 'checkOut',
            key: 'checkOut',
        },
        {
            title: 'Action',
            dataIndex: 'action',
            render: (text, ticket) => {
                return <Fragment>
                    <NavLink key={1} to={`/admin/ticket/roomedit/${ticket._id}`} style={{ color: 'blue', fontSize: 25, paddingRight: 10 }}><EditOutlined /></NavLink>

                    <span onClick={() => {
                        if (window.confirm('Bạn có chắc muốn xóa vé ' + ticket._id + ' không?')) {
                            dispatch(xoaVeAction(ticket._id, id));
                        }
                    }} key={2} style={{ color: 'red', fontSize: 25, paddingRight: 10, cursor: 'pointer' }}><DeleteOutlined /></span>
                </Fragment>
            }
        },
    ];

    const data = dsVeIdroom;

    function onChange(pagination, filters, sorter, extra) {
        console.log("params", pagination, filters, sorter, extra);
    }

    return (
        <div className="dashboard-content">
            <h2 className='my-3'>Ticket</h2>
            <Button type='primary' style={{ width: 150 }} className='mb-4' onClick={() => {
                history.push(`/admin/ticket/roomadd/${id}`)
            }}>Add new ticket</Button>
            <Table columns={columns} dataSource={data} onChange={onChange} rowKey={'_id'} />
        </div>
    )
}

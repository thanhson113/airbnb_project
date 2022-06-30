import { SearchOutlined } from '@ant-design/icons';
import { Login } from '@mui/icons-material';
import { Button, Table,Input } from 'antd';
import React, { Fragment, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { history } from '../../../../App';
import { layDSVeTheoPhongAction } from '../../../../redux/Actions/VeAction';
import { LoginAction } from '../../../../redux/Actions/XacThucNguoiDungAction';

const {Search} = Input

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
            render: (text, location) => {
                return <Fragment>
                    <p>Hành động</p>
                    {/* <NavLink key={1} to={`/admin/location/edit/${location._id}`} style={{ color: 'blue', fontSize: 25, paddingRight: 10 }}><EditOutlined /></NavLink> */}

                    {/* <span onClick={() => {
                        if (window.confirm('Bạn có chắc muốn xóa vị trí ' + location.name + ' không?')) {
                            dispatch(xoaViTriAction(location._id));
                        }
                    }} key={2} style={{ color: 'red', fontSize: 25, paddingRight: 10, cursor: 'pointer' }}><DeleteOutlined /></span> */}
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

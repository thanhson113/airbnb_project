import React, { Fragment, useEffect } from 'react';
import { Table, Button, Input, Tag, Space } from 'antd';
import { DeleteOutlined, EditOutlined, SearchOutlined, SwapRightOutlined } from '@ant-design/icons';
import { history } from '../../../App';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { DSDanhGiaTheoPhongAction, layDanhGiaTheoPhongAction, XoaDanhGiaAction, xoaDanhGiaActionAD } from '../../../redux/Actions/DanhGiaAction';

const { Search } = Input;

export default function Feedback(props) {
  const { danhSachDanhGia } = useSelector(state => state.danhGiaReducer)
  console.log(danhSachDanhGia)

  let { id } = props.match.params

  let dispatch = useDispatch()

  useEffect(() => {
    dispatch(layDanhGiaTheoPhongAction(id))
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
      title: 'Content',
      dataIndex: 'content',
      key: 'content',
    },
    {
      title: 'Action',
      dataIndex: 'action',
      render: (text, feedback) => {
        return <Fragment>
          <NavLink key={1} to={`/admin/feedback/edit/${feedback._id}`} style={{ color: 'blue', fontSize: 25, paddingRight: 10 }} ><EditOutlined /></NavLink>

          <span onClick={() => {
            if (window.confirm('Bạn có chắc muốn xóa đánh giá này không?')) {
              dispatch(xoaDanhGiaActionAD(feedback._id, feedback.roomId?._id));
            }
          }} key={2} style={{ color: 'red', fontSize: 25, paddingRight: 10, cursor: 'pointer' }}><DeleteOutlined /></span>
        </Fragment>
      }
    },
  ];

  const data = danhSachDanhGia;

  const onSearch = () => {

  }

  let feedback = {}
  if (localStorage.getItem('roomParams1')) {
    feedback = JSON.parse(localStorage.getItem('roomParams1'))
  }

  function onChange(pagination, filters, sorter, extra) {
    console.log("params", pagination, filters, sorter, extra);
  }

  return (
    <div className="dashboard-content">
      <h2 className='my-3'>Feedback</h2>
      <Button type='primary' style={{ width: 150 }} className='mb-4' onClick={() => {
        history.push(`/admin/feedback/add/${feedback._id}`)
      }}>Add new feedback</Button>
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

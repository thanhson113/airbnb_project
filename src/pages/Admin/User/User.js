import React from 'react'
import { Table, Button, Input, Tag, Space } from 'antd';
import { DeleteOutlined, SearchOutlined, EditOutlined, CalendarOutlined } from '@ant-design/icons';
import { history } from '../../../App';

const { Search } = Input;

export default function User() {

    const columns = [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
            render: text => <a>{text}</a>,
        },
        {
            title: 'Age',
            dataIndex: 'age',
            key: 'age',
        },
        {
            title: 'Address',
            dataIndex: 'address',
            key: 'address',
        },
        {
            title: 'Tags',
            key: 'tags',
            dataIndex: 'tags',
            render: tags => (
                <>
                    {tags.map(tag => {
                        let color = tag.length > 5 ? 'geekblue' : 'green';
                        if (tag === 'loser') {
                            color = 'volcano';
                        }
                        return (
                            <Tag color={color} key={tag}>
                                {tag.toUpperCase()}
                            </Tag>
                        );
                    })}
                </>
            ),
        },
        {
            title: 'Action',
            key: 'action',
            render: (text, record) => (
                <Space size="middle">
                    <a>Invite {record.name}</a>
                    <a>Delete</a>
                </Space>
            ),
        },
    ];

    const data = [
        {
            key: '1',
            name: 'John Brown',
            age: 32,
            address: 'New York No. 1 Lake Park',
            tags: ['nice', 'developer'],
        },
        {
            key: '2',
            name: 'Jim Green',
            age: 42,
            address: 'London No. 1 Lake Park',
            tags: ['loser'],
        },
        {
            key: '3',
            name: 'Joe Black',
            age: 32,
            address: 'Sidney No. 1 Lake Park',
            tags: ['cool', 'teacher'],
        },
    ];

    const onSearch = () => {

    }

    return (
        <div className="dashboard-content">
            <h2>Quản lý người dùng</h2>
            <Button type='primary' style={{ width: 150 }} className='mb-4' onClick={() => {
                history.push('/admin/films/addnew')
            }}>Thêm phim</Button>
            <Search
                className='mb-4'
                placeholder="Tìm kiếm phim"
                enterButton={<SearchOutlined />}
                size="large"
                onSearch={onSearch}
            />
            <Table columns={columns} dataSource={data} onChange={onSearch} />
        </div>
    )
}

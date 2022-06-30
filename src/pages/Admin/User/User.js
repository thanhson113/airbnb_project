
/** @format */

import React, { Fragment, useEffect } from "react";
import { Table, Button, Input, Tag, Space } from "antd";
import {
  DeleteOutlined,
  SearchOutlined,
  EditOutlined,
  CalendarOutlined,
} from "@ant-design/icons";
import { history } from "../../../App";
import { useDispatch, useSelector } from "react-redux";
import {
  LayDSNguoiDungAction,
  xoaNguoiDungAction,
} from "../../../redux/Actions/NguoiDungAction";
import { NavLink } from "react-router-dom";
import { useState } from "react";


const { Search } = Input;

export default function User() {
  let { dsNguoiDung } = useSelector((state) => state.nguoiDungReducer);

  const [data, getData] = useState(dsNguoiDung);

  let dispatch = useDispatch();

  useEffect(() => {
    dispatch(LayDSNguoiDungAction());
  }, []);


  useEffect(()=>{
    getData(dsNguoiDung)
  },[dsNguoiDung])


  const columns = [
    {
      title: "ID",
      dataIndex: "_id",
      key: "id",
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Avatar",
      dataIndex: "avatar",
      key: "avatar",
      render: (text, user) => {
        return (
          <Fragment>
            <img
              src={user.avatar}
              alt={user.name}
              width={50}
              height={50}
              onError={(e) => {
                e.target.onError = null;
                e.target.src = "https://i.pravatar.cc/50";
              }}
            />
          </Fragment>
        );
      },
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Phone",
      dataIndex: "phone",
      key: "phone",
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "Action",
      dataIndex: "action",
      render: (text, user) => {
        return (
          <Fragment>
            <NavLink
              key={1}
              to={`/admin/user/edit/${user._id}`}
              style={{ color: "blue", fontSize: 25, paddingRight: 10 }}
            >
              <EditOutlined />
            </NavLink>
            <span
              onClick={() => {
                if (
                  window.confirm(
                    "Bạn có chắc muốn xóa tài khoản " + user.name + " không?"
                  )
                ) {
                  dispatch(xoaNguoiDungAction(user._id));
                }
              }}
              key={2}
              style={{
                color: "red",
                fontSize: 25,
                paddingRight: 10,
                cursor: "pointer",
              }}
            >
              <DeleteOutlined />
            </span>
          </Fragment>
        );
      },
    },
  ];


  const onSearch = (value) => {
    const keyW = value.toLowerCase();

    if (value) {
      let mang = [];
      dsNguoiDung.map((item) => {
        const nameItem = item.name?.toLowerCase();
        const indexName = nameItem?.indexOf(keyW);
        if (indexName > -1) mang.push(item);
      });
      getData(mang);
    } else getData(dsNguoiDung);
  };

  function onChange(pagination, filters, sorter, extra) {
    console.log("params", pagination, filters, sorter, extra);
  }

  return (
    <div className="dashboard-content">
      <h2 className="my-3">Admin/User</h2>
      <Button
        type="primary"
        style={{ width: 150 }}
        className="mb-4"
        onClick={() => {
          history.push("/admin/user/add");
        }}
      >
        Add new user
      </Button>
      <Search
        className="mb-4"
        placeholder="Nhập tên người dùng bạn cần kiếm để tìm kiếm chính xác !"
        allowClear
        enterButton={<SearchOutlined />}
        size="large"
        onSearch={onSearch}
        
      />
      <Table
        columns={columns}
        dataSource={data}
        onChange={onChange}
        rowKey={"_id"}
      />
    </div>
  );

}

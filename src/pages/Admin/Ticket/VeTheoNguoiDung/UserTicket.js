/** @format */

import React, { Fragment, useEffect } from "react";
import { Table, Input } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { LayDSNguoiDungAction } from "../../../../redux/Actions/NguoiDungAction";
import { SearchOutlined } from "@ant-design/icons";
import { useState } from "react";

const { Search } = Input;

export default function UserTicket() {
  const { dsNguoiDung } = useSelector((state) => state.nguoiDungReducer);

  const [data, getData] = useState(dsNguoiDung);
  let dispatch = useDispatch();

  useEffect(() => {
    dispatch(LayDSNguoiDungAction());
  }, []);

  useEffect(() => {
    getData(dsNguoiDung);
  }, [dsNguoiDung]);

  const columns = [
    {
      title: "Serial",
      render: (text, stt, index) => {
        return (
          <Fragment>
            <p className="mt-3">{index + 1}</p>
          </Fragment>
        );
      },
    },
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
      title: "Action",
      dataIndex: "action",
      render: (text, user) => {
        return (
          <Fragment>
            <NavLink to={`/admin/ticket/user/${user._id}`}>List ticket</NavLink>
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
      <h2 className="my-3">Ticket - User</h2>
      <Search
        className="mb-4"
        placeholder="Nhập vị trí bạn muốn để tìm kiếm chính xác !"
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

/** @format */

import React, { Fragment, useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  DatPhongAction,
  ThongTinChiTietPhongAction,
} from "../../../redux/Actions/PhongThueAction";
import { Affix, Avatar, Image, Popconfirm } from "antd";

import "../../../asset/css/cart.css";
import moment from "moment";
import Login from "../../../pages/Login/Login";
import { add_component } from "../../../redux/Actions/ComponentAction";
import { ChiTietNguoiDungAction } from "../../../redux/Actions/NguoiDungAction";

export default function Cart() {
  const ref1 = useRef();
  const ref2 = useRef();
  const dispatch = useDispatch();
  const { chiTietPhong } = useSelector((state) => state.phongThueReducer);

  const datPhong = JSON.parse(localStorage.getItem("datPhong"));
  const { roomId } = datPhong;
  const token = localStorage.getItem("accessToken");

  const { Component } = useSelector((state) => state.ComponentReducer);
  const {user} = useSelector((state)=>state.nguoiDungReducer)
  const id = localStorage.getItem('id')
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);
  const [checkIn, setCheckIn] = useState(datPhong?.checkIn);
  const [checkOut, setCheckOut] = useState(datPhong?.checkOut);
  const [exchange, setExchange] = useState(1);
  const [add, setAdd] = useState(false);
  const [scroll, setCroll] = useState();
  const [heightScroll, setHeightScroll] = useState();
  const [heightScroll2, setHeightScroll2] = useState();
 

  useEffect(() => {
    if(!token) { dispatch(add_component(<Login />, "Đăng Nhập"));}
    dispatch(ThongTinChiTietPhongAction(roomId));
    dispatch(ChiTietNguoiDungAction(id))
    const handleWindowResize = () => {
      setWidth(window.innerWidth);
      setHeight(window.innerHeight);
      setHeightScroll(ref1.current.offsetHeight);
      setHeightScroll2(ref2.current.offsetHeight);
      setCroll(
        (height - (ref1.current.offsetHeight + ref2.current.offsetHeight)) / 2
      );
    };
    const handleWindowScroll = ()=>{
      setHeightScroll(ref1.current.offsetHeight);
      setHeightScroll2(ref2.current.offsetHeight);
      setCroll(
        (height - (ref1.current.offsetHeight + ref2.current.offsetHeight)) / 2
      );
    }
    window.addEventListener("resize", handleWindowResize);
    window.addEventListener("scroll", handleWindowScroll);
    
    return () => {
      window.removeEventListener("resize", handleWindowResize);
      window.removeEventListener("scroll", handleWindowScroll);
    };
  }, []);

  const countDate = () => {
    let count = 0;
    const endDay = new Date(checkOut);
    const startDay = new Date(checkIn);
    while (endDay > startDay) {
      count++;
      startDay.setDate(startDay.getDate() + 1);
    }
    return count;
  };

  const handleChange = (e) => {
    setExchange(e.target.value);
  };

  const confirm = () => {
    dispatch(DatPhongAction(datPhong));
  };

  return (
    <Fragment>
      <div className="cart">
        <div className="cart_head" ref={ref1}>
          {width >= 1024 &&
          height >= heightScroll + heightScroll2 &&
          height <= 1000 ? (
            <Affix offsetTop={scroll}>
              <div className="cart_head_fit">
                <div className="row py-4">
                  <div className="col-5">
                    <Image
                      style={{
                        width: "200px",
                        maxHeight: "150px",
                        borderRadius: "10px",
                      }}
                      src={chiTietPhong?.image}
                    />
                  </div>
                  <div className="col-7">
                    <h5 className="text text-black py-1">
                      {chiTietPhong?.name}
                    </h5>
                   
                  </div>
                </div>
                <div className="cart_certification py-4">
                  <p className="py-1">
                    Đặt phòng của bạn được chấp nhận và bảo vệ từ{" "}
                    <span style={{ color: "red", fontWeight: 700 }}>air</span>
                    <span style={{ fontWeight: 700 }}>BnB</span>
                  </p>
                </div>
              </div>
            </Affix>
          ) : (
            <div className="cart_head_fit">
              <div className="row py-4">
                <div className="col-5">
                  <Image
                    style={{
                      maxWidth: "200px",
                      maxHeight: "150px",
                      borderRadius: "10px",
                    }}
                    src={chiTietPhong?.image}
                  />
                </div>
                <div className="col-7">
                  <h5 className="text text-black py-2">{chiTietPhong?.name}</h5>
                 
                </div>
              </div>
              <div className="cart_certification py-4">
                <p className="py-1">
                  Đặt phòng của bạn được chấp nhận và bảo vệ từ{" "}
                  <span style={{ color: "red", fontWeight: 700 }}>air</span>
                  <span style={{ fontWeight: 700 }}>BnB</span>
                </p>
              </div>
            </div>
          )}
        </div>
        <div className="cart_celendar">
          <h5 className="text text-black py-2 ">
            Thời gian cho chuyến đi của bạn
          </h5>
          <div className="d-flex justify-content-between py-4">
            <div>
              <h5>Ngày đến : </h5>
              <h5 className="py-2">{moment(checkIn).format("DD/MM/YYYY")}</h5>
            </div>
            <a className="btn_setting  ">Chỉnh Sửa</a>
          </div>
          <div className="d-flex justify-content-between py-2">
            <div>
              <h5>Ngày Đi</h5>
              <h5 className="py-2">{moment(checkOut).format("DD/MM/YYYY")}</h5>
            </div>
            <a className="btn_setting  ">Chỉnh Sửa</a>
          </div>
        </div>
        <div className="cart_detail" ref={ref2}>
          {width >= 1024 &&
          height >= heightScroll + heightScroll2 &&
          height <= 1000 ? (
            <Affix offsetTop={scroll + heightScroll}>
              <div className="cart_detail_fit">
                <h5 className="text text-black py-2">Chi tiết giá</h5>
                <div className="d-flex justify-content-between py-2">
                  <h5>
                    ${chiTietPhong.price} x {countDate()}
                  </h5>
                  <span>${chiTietPhong.price * countDate()}</span>
                </div>
                <div className="d-flex justify-content-between py-2">
                  <h5>Phí Vệ Sinh</h5>
                  <span>${(chiTietPhong.price * countDate() * 2) / 100}</span>
                </div>
                <div className="d-flex justify-content-between py-2">
                  <h5>Phí dịch vụ</h5>
                  <span>${(chiTietPhong.price * countDate() * 5) / 100}</span>
                </div>
                <div className="d-flex justify-content-between py-3 ">
                  <div className="py-2">
                    <h5>Tổng Chi Phí là :</h5>
                    {exchange == 1 / 2 ? <h5>Discount 50%</h5> : ""}
                  </div>

                  <span className="text-danger">
                    $
                    {(chiTietPhong.price * countDate() +
                      (chiTietPhong.price * countDate() * 5) / 100 +
                      (chiTietPhong.price * countDate() * 2) / 100) *
                      exchange}
                  </span>
                </div>
                <div className="w-100 text-right py-2 ">
                  <a className="btn_setting  ">Thông tin thêm</a>
                </div>
              </div>
            </Affix>
          ) : (
            <div className="cart_detail_fit">
              <h5 className="text text-black py-2">Chi tiết giá</h5>
              <div className="d-flex justify-content-between py-2">
                <h5>Giá phòng {` ( ${countDate()} Ngày ) `}</h5>
                <span>${chiTietPhong.price * countDate()}</span>
              </div>
              <div className="d-flex justify-content-between py-2">
                <h5>Phí Vệ Sinh</h5>
                <span>${(chiTietPhong.price * countDate() * 2) / 100}</span>
              </div>
              <div className="d-flex justify-content-between py-2">
                <h5>Phí dịch vụ</h5>
                <span>${(chiTietPhong.price * countDate() * 5) / 100}</span>
              </div>
              <div className="d-flex justify-content-between py-3">
                <div className="py-2">
                  <h5>Tổng Chi Phí là :</h5>
                  {exchange == 1 / 2 ? <h5>Discount 50%</h5> : ""}
                </div>
                <span className="text-danger">
                  $
                  {(chiTietPhong.price * countDate() +
                    (chiTietPhong.price * countDate() * 5) / 100 +
                    (chiTietPhong.price * countDate() * 2) / 100) *
                    exchange}
                </span>
              </div>
              <div className="w-100 text-right py-2 ">
                <a className="btn_setting  ">Thông tin thêm</a>
              </div>
            </div>
          )}
        </div>
        <div className="cart_payment">
          <h5 className="text text-black py-4">Chọn cách thanh toán</h5>
          <div>
            <div className="form-check py-2 ">
              <input
                className="form-check-input"
                type="radio"
                name="payment"
                id="payment1"
                // defaultValue="option1"
                value={1}
                defaultChecked
                onChange={handleChange}
              />
              <label className="form-check-label px-2" htmlFor="payment1">
                Trả Toàn Bộ Chi Phí
              </label>
            </div>
            <div className="form-check py-2">
              <input
                className="form-check-input"
                type="radio"
                name="payment"
                id="payment2"
                // defaultValue="option2"
                value={50 / 100}
                onChange={handleChange}
              />
              <label className="form-check-label px-2" htmlFor="payment2">
                Trả trước 50% chi phí, phần còn lại trả sau
              </label>
              <div className="p-2">
             
                <a 
                  className="btn_setting "
                  onClick={() => {
                    setAdd(!add);
                  }}
                >
                  Thông tin thêm
                </a>
                <p className={`${add ? "" : "d-none"} py-2`}>
                  Bạn phải thanh toán trước 50% giá trị phòng thuê, phần còn lại
                  bạn có thể trả sau khi nhận phòng, nhưng đi kèm thêm phụ phí
                  từ 2-5% giá trị còn lại của phòng thuê
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="empty "></div>
        {!token ? (
          <div className="cart_login_or_register">
            <h5 className="text text-black pt-4 text-center">
              Đăng nhập hoặc đăng ký để đặt phòng/ đặt chỗ
            </h5>
            <div className="cart_login_or_register_content">{Component}</div>
          </div>
        ) : (
          <div className="cart_submit">
           <div className="d-flex justify-content-center pb-5 border-bottom">
           <h5 >Chào </h5> <h5 className="px-3">{user?.name}</h5>
            <Avatar style={{border:"2px solid wheat"}}
            shape="square"
            size={100}
            src={
              <Image src={user?.avatar} style={{ height: 100, width: 100 }} />
            }
          />
           </div>
            <div className="d-flex justify-content-around py-5">
              <div className="py-2">
                <h5>Tổng Chi Phí là :</h5>
                {exchange == 1 / 2 ? <h5>Discount 50%</h5> : ""}
              </div>
              <span className="text-danger ">
                $
                {(chiTietPhong.price * countDate() +
                  (chiTietPhong.price * countDate() * 5) / 100 +
                  (chiTietPhong.price * countDate() * 2) / 100) *
                  exchange}
              </span>
            </div>
            <h5 className="text text-success text-center py-2">
              Bạn Muốn Thanh Toán Chứ
            </h5>

            <div className="cart_sudmit_btn w-100 text-center py-4">
              <Popconfirm
                className="w-50"
                title={
                  <div className="pb-2">
                    <h5>Bạn Chắn Chắn Chứ</h5>
                  </div>
                }
                okText={<p>Vâng</p>}
                cancelText="Để Khi Khác"
                onConfirm={confirm}
              >
                <button className="btn btn-success">Vâng</button>
              </Popconfirm>
            </div>
          </div>
        )}
      </div>
    </Fragment>
  );
}

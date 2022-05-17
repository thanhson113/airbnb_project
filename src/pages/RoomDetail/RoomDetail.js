/** @format */

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Map from "./Map";

import {
  Avatar,
  Button,
  DatePicker,
  Form,
  Image,
  Modal,
  Progress,
  Select,
} from "antd";
import Icon, {
  CalendarOutlined,
  HeartOutlined,
  HomeOutlined,
  SafetyOutlined,
  ShareAltOutlined,
  StarOutlined,
  TrophyOutlined,
  WifiOutlined,
  ExclamationCircleOutlined,
} from "@ant-design/icons";

import {
  TvOutlined,
  AcUnit,
  Hvac,
  Elevator,
  Restaurant,
} from "@mui/icons-material";

import { DSDanhGiaTheoPhongAction } from "../../redux/Actions/DanhGiaAction";
import { ThongTinChiTietPhongAction } from "../../redux/Actions/PhongThueAction";

import moment from "moment";

import "../../asset/css/roomdetail.css";

export default function RoomDetail(props) {
  const dispatch = useDispatch();
  const { dsDanhGia } = useSelector((state) => state.danhGiaReducer);
  const { chiTietPhong } = useSelector((state) => state.phongThueReducer);
  const { locationId } = chiTietPhong;

  const key = "AIzaSyA3HUkpN5-tSw68taF-syOrFnDp2rhDKZY";

  const [width, setWidth] = useState(window.innerWidth);
  const [more, setMore] = useState(6);
  const [add, setAdd] = useState(6);

  const [ngayDen, setNgayDen] = useState();
  const [ngayDi, setNgayDi] = useState();
  let dayCount = 0;
  const [isModalVisible, setIsModalVisible] = useState(false);

  //Form setting

  useEffect(() => {
    dispatch(ThongTinChiTietPhongAction(props.match.params.id));
    dispatch(DSDanhGiaTheoPhongAction(props.match.params.id));

    const handleWindowResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  const renderDanhGia = (more) => {
    return dsDanhGia?.slice(0, more)?.map((danhGia, index) => {
      return (
        <div className="col-6" key={index}>
          <div className="d-flex">
            <Avatar src={danhGia.userId.avatar} style={{ width: "30px" }} />
            <div className="m-2">
              <h5>{danhGia.userId.name}</h5>
              <span className="text text-secondary">
                {moment(danhGia.updatedAt).format("DD-MM-YYYY")}
              </span>
            </div>
          </div>
          <span>{danhGia.content}</span>
        </div>
      );
    });
  };
  const renderTienNghi = (add) => {
    const tienNghi = [];
    if (chiTietPhong.kitchen)
      tienNghi.push(
        <div className="col-6 d-flex" key={1}>
         <i><Restaurant /></i>  <p>Bếp</p>
        </div>
      );
    if (chiTietPhong.cableTV)
      tienNghi.push(
        <div className="col-6 d-flex" key={2}>
        <i><TvOutlined /></i>   <p>TV với truyền hình cáp tiêu chuẩn</p>
        </div>
      );

    if (chiTietPhong.heating)
      tienNghi.push(
        <div className="col-6 d-flex" key={3}>
         <i><AcUnit /></i>  <p>Điều Hòa Nhiệt Độ</p>
        </div>
      );
    if (chiTietPhong.indoorFireplace)
      tienNghi.push(
        <div className="col-6 d-flex " key={4}>
        <i><Hvac /></i>   <p>Lò Sưởi trong nhà</p>
        </div>
      );

    if (chiTietPhong.wifi)
      tienNghi.push(
        <div className="col-6 d-flex" key={5}>
        <i><WifiOutlined /></i>   <p>Wifi</p>
        </div>
      );
    if (chiTietPhong.elevator)
      tienNghi.push(
        <div className="col-6 d-flex" key={6}>
         <i><Elevator /></i>  <p>Thang máy</p>
        </div>
      );
    if (chiTietPhong.pool)
      tienNghi.push(
        <div className="col-6 d-flex" key={7}>
          <i className="fa fa-swimming-pool"></i> <p>Bể bơi sạch đẹp</p>
        </div>
      );
    if (chiTietPhong.hotTub)
      tienNghi.push(
        <div className="col-6 d-flex" key={8}>
          <i className="fa fa-hot-tub"></i> <p>Có bồn nước nóng để thư giản</p>
        </div>
      );
    if (chiTietPhong.dryer)
      tienNghi.push(
        <div className="col-6 d-flex" key={9}>
          <i className="fa fa-wind"></i> <p>Có máy sấy để làm khô tóc</p>
        </div>
      );
    if (chiTietPhong.gym)
      tienNghi.push(
        <div className="col-6 d-flex" key={10}>
          <i className="fa fa-dumbbell"></i>{" "}
          <p>Có phòng tập hoặc khu tập gym</p>
        </div>
      );

    return tienNghi.slice(0, add);
  };
  const handleInput = (e) => {
    setNgayDen(new Date(e._d));
    console.log(e);
  };
  const handleInput2 = (e) => {
    setNgayDi(new Date(e._d));
    console.log(e);
  };

  const renderReducer = () => {
    const start = new Date(ngayDen); //clone
    const end = new Date(ngayDi); //clone

    console.log(end > start);
    while (end > start) {
      dayCount++;
      start.setDate(start.getDate() + 1);
    }

    return (
      <div className="col-12 text-center py-2">
        <div className="d-flex justify-content-between">
          <p>
            {chiTietPhong.price} x {dayCount} đêm
          </p>{" "}
          <span>${chiTietPhong.price * dayCount}</span>
        </div>
        <div className="d-flex justify-content-between  py-3 border-bottom">
          <p>Phí dịch vụ</p>{" "}
          <span>${(chiTietPhong.price * dayCount) / 20}</span>
        </div>
        <div className="d-flex justify-content-between py-2">
          <p>Tổng</p> <span>${(chiTietPhong.price * dayCount * 95) / 100}</span>
        </div>
      </div>
    );
  };
  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  function confirm() {
    Modal.confirm({
      title: "Bạn Muốn Đặt Vé Chứ",
      icon: <ExclamationCircleOutlined />,
      content: (
        <p>Tổng Chi phí là: {(chiTietPhong.price * dayCount * 95) / 100}</p>
      ),
      okText: "Vâng",
      cancelText: "Để Suy Nghĩ Lại",
    });
  }

  return (
    <div className="container roomDetail ">
      <div className="roomDetail_head">
        <div className="roomDetail_head_tittle">
          <h3>{chiTietPhong.name}</h3>
          <div
            className={`${
              width <= 1024 ? "" : "d-flex"
            } justify-content-between`}
          >
            <div>
              <div className={`${width <= 768 ? "" : "d-flex"}`}>
                <div className="d-flex">
                  <a
                    href="#rank"
                    className="d-flex text-dark text-decoration-underline"
                  >
                    <StarOutlined /> {locationId?.valueate}
                  </a>
                  <a
                    href="#comment"
                    className="ml-1 text-dark text-decoration-underline"
                  >
                    {dsDanhGia.length === 0
                      ? " "
                      : ` ${dsDanhGia.length} đánh giá`}
                  </a>
                </div>

                <a
                  onClick={showModal}
                  className="px-2 text-dark text-decoration-text-decoration-underline"
                >
                  {" "}
                  {locationId?.name}, {locationId?.province},{" "}
                  {locationId?.country}
                </a>
              </div>
            </div>

            <div className="d-flex mx-2">
              <a className="d-flex text-success">
                <ShareAltOutlined /> Chia Sẽ
              </a>

              <a className="d-flex mx-2 text-danger">
                <HeartOutlined />
                Lưu
              </a>
            </div>
          </div>
        </div>
        <div className="roomDetail_head_photos py-4">
          <Image
            src={chiTietPhong?.image}
            className={`img-fluid`}
            style={{ height: "100%", width: "100vw" }}
            alt="photos"
          />
        </div>
      </div>

      <div className="roomDetail_book row">
        <div className={width <= 1024 ? "col-12" : "col-7"}>
          <div className="roomDetail_book_detail">
            <div className="roomDetail_book_detail_head py-4">
              <h4>
                {chiTietPhong.name} Tại {locationId?.name},{" "}
                {locationId?.province}, {locationId?.country}
              </h4>
              <span className="text-secondary">
                {chiTietPhong.guests ? `${chiTietPhong.guests} khách` : ""}{" "}
                {chiTietPhong.bedRoom
                  ? `${chiTietPhong.bedRoom} phòng ngủ`
                  : ""}{" "}
                {chiTietPhong.bath ? `${chiTietPhong.bath} phòng tắm` : ""}
              </span>
            </div>
            <div className="roomDetail_book_detail_mid py-4 border-top border-bottom">
              <div className="d-flex">
                <i className="m-2">
                  <HomeOutlined />
                </i>
                <div>
                  <h6>Toàn Bộ Nhà</h6>
                  <span>Bạn sẽ có chung cư cao cấp cho riêng mình</span>
                </div>
              </div>
              <div className="d-flex">
                <i className="m-2">
                  <SafetyOutlined />
                </i>
                <div>
                  <h6>Vệ Sinh Tăng Cường</h6>
                  <span>Cam kêt vs sạch</span>
                </div>
              </div>
              <div className="d-flex">
                <i className="m-2">
                  <TrophyOutlined />
                </i>
                <div>
                  <h6>Phong Là Chủ Nhà Siu cấp</h6>
                  <span>Bạn sẽ có chung cư cao cấp cho riêng mình</span>
                </div>
              </div>
              <div className="d-flex">
                <i className="m-2">
                  <CalendarOutlined />
                </i>
                <div>
                  <h6>Miễn Phí Hủy Trong 48 Giờ</h6>
                  <span>Có thể hủy đơn nếu không vừa ý trong 2 ngày</span>
                </div>
              </div>
            </div>
            <div className="roomDetail_book_detail_bot py-4">
              {chiTietPhong.description}
            </div>
            <div className="roomDetail_book_detail_last py-4 border-top border-bottom">
              <h4 className="my-1">Tiện Nghi</h4>
              <div className="row">
                {renderTienNghi(add)}
                <div className="col-12 text-center">
                  {renderTienNghi(add).length >= add ? (
                    <button
                      onClick={() => {
                        setAdd(10);
                      }}
                      className="custom-btn btn_Add"
                    >
                      Hiển Thị Tất Cả Tiện Ích
                    </button>
                  ) : (
                    ""
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={width <= 1024 ? "col-12" : "col-5"}>
          <div className="roomDetail_book_booking py-4">
            <Form
              className="m-auto"
              style={{ maxWidth: 400 }}
              layout="vertical"
              size={width <= 400 ? "small" : width <= 800 ? "default" : "large"}
            >
              <div className=" d-flex justify-content-between">
                <span>
                  <span>${chiTietPhong.price}</span> / đêm
                </span>
                <div className="d-flex">
                  <StarOutlined style={{ color: "pink" }} />{" "}
                  <span style={{ color: "black" }}>
                    {locationId?.valueate}{" "}
                  </span>
                </div>
              </div>
              <div className="row">
                <div className="col-6">
                  <Form.Item label="Ngày Đến">
                    <DatePicker
                      placeholder="Ngày đến"
                      name="form"
                      id="ngayDen"
                      onChange={(e) => {
                        handleInput(e);
                      }}
                    />
                  </Form.Item>
                </div>
                <div className="col-6">
                  <Form.Item label="Ngày Đi">
                    <DatePicker
                      placeholder="Ngày đi"
                      id="ngayDi"
                      name="to"
                      onChange={(e) => {
                        handleInput2(e);
                      }}
                    />
                  </Form.Item>
                </div>
                <div className="col-12">
                  <Form.Item label="Select">
                    <Select onChange={(a) => {}} defaultValue={{ value: "1" }}>
                      {}
                      <Select.Option value="1">1 Khách</Select.Option>
                      <Select.Option value="2">2 Khách</Select.Option>
                      <Select.Option value="3">3 Khách</Select.Option>
                      <Select.Option value="4">4 Khách</Select.Option>
                    </Select>
                  </Form.Item>
                </div>
                <div className="col-12 text-center py-2">
                  <Button onClick={()=>{
                    if(dayCount!==0)confirm()
                    else
                    alert("Chưa Chọn Ngày")
                  }} className="w-100 btn_submit">
                    Submit
                  </Button>
                </div>
                {renderReducer()}
              </div>
            </Form>
          </div>
        </div>
      </div>
      <div className="roomdetail_map">
        <Map
          googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${key}&callback=initMap`}
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={
            <div
              style={{
                height: `90vh`,
                margin: `auto`,
                border: "2px solid black",
              }}
            />
          }
          mapElement={<div style={{ height: `100%` }} />}
        />
      </div>
      <div className="roomDetail_reviews py-4">
        <div className="roomDetail_reviews_rank" id="rank">
          <div className="d-flex">
            <Icon style={{ color: "hotpink" }} component={HeartOutlined} />{" "}
            <h4>
              {locationId?.valueate}{" "}
              {dsDanhGia.length === 0 ? "" : ` ${dsDanhGia.length} đánh giá`}
            </h4>
          </div>
          <div className="row">
            <div className="col-6">
              <div className="d-flex justify-content-between">
                <span>Mức Độ Sạch Sẽ</span>
                <Progress
                  className="w-75"
                  strokeColor={{
                    from: "#E233FF",
                    to: "#FF6B00",
                  }}
                  percent={`${locationId?.valueate}0`}
                  status="active"
                />
              </div>
              <div className="d-flex justify-content-between">
                <span>Liên Lạc</span>
                <Progress
                  className="w-75"
                  strokeColor={{
                    from: "#E233FF",
                    to: "#FF6B00",
                  }}
                  percent={`${locationId?.valueate}0`}
                  status="active"
                />
              </div>
              <div className="d-flex justify-content-between">
                <span>Nhận Phòng</span>
                <Progress
                  className="w-75"
                  strokeColor={{
                    from: "#E233FF",
                    to: "#FF6B00",
                  }}
                  percent={`${locationId?.valueate}0`}
                  status="active"
                />
              </div>
            </div>
            <div className="col-6">
              <div className="d-flex justify-content-between">
                <span>Mức Độ Chính Xác</span>
                <Progress
                  className="w-75"
                  strokeColor={{
                    from: "#E233FF",
                    to: "#FF6B00",
                  }}
                  percent={`${locationId?.valueate}0`}
                  status="active"
                />
              </div>
              <div className="d-flex justify-content-between">
                <span>Vị Trí</span>
                <Progress
                  className="w-75"
                  strokeColor={{
                    from: "#E233FF",
                    to: "#FF6B00",
                  }}
                  percent={`${locationId?.valueate}0`}
                  status="active"
                />
              </div>
              <div className="d-flex justify-content-between">
                <span>Giá Trị</span>
                <Progress
                  className="w-75"
                  strokeColor={{
                    from: "#E233FF",
                    to: "#FF6B00",
                  }}
                  percent={`${locationId?.valueate}0`}
                  status="active"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="roomDetail_reviews_comment py-4" id="comment">
          <div className="row">
            {dsDanhGia?.length !== 0 ? (
              renderDanhGia(more)
            ) : (
              <span className="col-12 py-3 text-center text-success">
                Hiện Tại Chưa Có Đánh Giá
              </span>
            )}
          </div>
          {dsDanhGia?.length !== 0 && dsDanhGia.length > more ? (
            <button
              onClick={() => {
                setMore(more + 6);
              }}
              className="custom-btn btn_Add"
            >
              Hiển Thị Thêm Đánh Giá
            </button>
          ) : (
            ""
          )}
        </div>
      </div>
      <Modal
        title={`${locationId?.name}, ${locationId?.province}, ${locationId?.country}`}
        width="80%"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        okText="Wellcome"
        cancelText={<i class="fab fa-angellist"></i>}
      >
        <Image
          src={locationId?.image}
          className={`img-fluid`}
          style={{ height: "100%", width: "100vw" }}
          alt="photos vitri"
        />
      </Modal>
    </div>
  );
}

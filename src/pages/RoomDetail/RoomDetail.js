import React, { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  Avatar,
  Button,
  Cascader,
  DatePicker,
  Form,
  Image,
  Input,
  InputNumber,
  Progress,
  Radio,
  Row,
  Select,
  Switch,
  TreeSelect,
} from "antd";
import Icon, {
  CalendarOutlined,
  HeartOutlined,
  HomeOutlined,
  SafetyOutlined,
  ShareAltOutlined,
  StarOutlined,
  TrophyOutlined,
  UserOutlined,
  WifiOutlined,
} from "@ant-design/icons";
import KitchenIcon from "@mui/icons-material/Kitchen";
import {
  TvOutlined,
  AcUnit,
  Hvac,
  LocalParking,
  Elevator,
  Yard,
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

  const [width, setWidth] = useState(window.innerWidth);
  const [more, setMore] = useState(6);
  const [add, setAdd] = useState(6);

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
          <Restaurant /> <p>Bếp</p>
        </div>
      );
    if (chiTietPhong.cableTV)
      tienNghi.push(
        <div className="col-6 d-flex" key={2}>
          <TvOutlined /> <p>TV với truyền hình cáp tiêu chuẩn</p>
        </div>
      );

    if (chiTietPhong.heating)
      tienNghi.push(
        <div className="col-6 d-flex" key={3}>
          <AcUnit /> <p>Điều Hòa Nhiệt Độ</p>
        </div>
      );
    if (chiTietPhong.indoorFireplace)
      tienNghi.push(
        <div className="col-6 d-flex " key={4}>
          <Hvac /> <p>Lò Sưởi trong nhà</p>
        </div>
      );

    if (chiTietPhong.wifi)
      tienNghi.push(
        <div className="col-6 d-flex" key={5}>
          <WifiOutlined /> <p>Wifi</p>
        </div>
      );
    if (chiTietPhong.elevator)
      tienNghi.push(
        <div className="col-6 d-flex" key={6}>
          <Elevator /> <p>Thang máy</p>
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

  return (
    <div className="container roomDetail ">
      <div className="roomDetail_head">
        <div className="roomDetail_head_tittle">
          <h4>{chiTietPhong.name}</h4>
          <div
            className={`${
              width <= 1024 ? "" : "d-flex"
            } justify-content-between`}
          >
            <div>
              <div className={`${width <= 768 ? "" : "d-flex"}`}>
                <div className="d-flex">
                  <StarOutlined />
                  4,83 {dsDanhGia.length===0?"":` ${dsDanhGia.length} đánh giá`} 
                </div>
                <div className="d-flex mx-2">
                  <UserOutlined />
                  Chủ nhà siêu cấp
                </div>
                <a>Thành Phố Vũng Tàu, Bà Rịa- Vũng Tàu, Việt Nam</a>
              </div>
            </div>

            <div className="d-flex mx-2">
              <a className="d-flex" href="">
                <ShareAltOutlined /> Chia Sẽ
              </a>

              <div className="d-flex mx-2">
                <HeartOutlined />
                Lưu
              </div>
            </div>
          </div>
        </div>
        <div className="roomDetail_head_photos py-4">
          <Image
            src={chiTietPhong.image}
            className={`img-fluid`}
            alt="photos"
          />
        </div>
      </div>

      <div className="roomDetail_book row">
        <div className={width <= 1024 ? "col-12" : "col-7"}>
          <div className="roomDetail_book_detail">
            <div className="roomDetail_book_detail_head d-flex py-4">
              <div>
                <h5>Toàn Bộ Căn Hộ Chung Cư . Chủ nhà Phong</h5>
                <span className="text-secondary">
                  {chiTietPhong.guests ? `${chiTietPhong.guests} khách` : ""}{" "}
                  {chiTietPhong.bedRoom
                    ? `${chiTietPhong.bedRoom} phòng ngủ`
                    : ""}{" "}
                  {chiTietPhong.bath ? `${chiTietPhong.bath} phòng tắm` : ""}
                </span>
              </div>
              <Avatar
                src={
                  <Image
                    src="https://joeschmoe.io/api/v1/random"
                    style={{ width: 32 }}
                  />
                }
              />
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
              <h4>Tiện Nghi</h4>
              <div className="row">
                {renderTienNghi(add)}
                <div className="col-12 text-center">
                  {renderTienNghi(add).length >= add ? (
                    <button
                      onClick={() => {
                        setAdd(10);
                      }}
                      className="btn-outline-dark w-50 my-2"
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
              style={{ maxWidth: 400 }}
              layout="vertical"
              size={width <= 400 ? "small" : width <= 800 ? "default" : "large"}
            >
              <div className=" d-flex justify-content-between">
                <span>
                  <span>${chiTietPhong.price}</span> / đêm
                </span>
                <span className="d-flex">
                  <StarOutlined style={{ color: "pink" }} />{" "}
                  <span style={{ color: "black" }}>4,83 đánh giá</span>
                </span>
              </div>
              <div className="row">
                <div className="col-6">
                  <Form.Item label="Ngày Đến">
                    <DatePicker name="from" />
                  </Form.Item>
                </div>
                <div className="col-6">
                  <Form.Item label="Ngày Đi">
                    <DatePicker name="to" />
                  </Form.Item>
                </div>
                <div className="col-12">
                  <Form.Item label="Select">
                    <Select>
                      <Select.Option value="1">1 Khách</Select.Option>
                      <Select.Option value="2">2 Khách</Select.Option>
                      <Select.Option value="3">3 Khách</Select.Option>
                      <Select.Option value="4">4 Khách</Select.Option>
                    </Select>
                  </Form.Item>
                </div>
                <div className="col-12 text-center">
                  <Button className="w-100 btn_submit">Submit</Button>
                </div>
              </div>
            </Form>
          </div>
        </div>
      </div>

      <div className="roomDetail_reviews py-4">
        <div className="roomDetail_reviews_rank">
          <div className="d-flex">
            <Icon style={{ color: "hotpink" }} component={HeartOutlined} />{" "}
            <h4>4,83(18 Đánh Giá)</h4>
          </div>
          <div className="row">
            <div className="col-6">
              <div className="d-flex justify-content-between">
                <span>Mức Độ Sạch Sẽ</span>
                <Progress
                  className="w-75"
                  strokeColor={{
                    from: "#108ee9",
                    to: "#87d068",
                  }}
                  percent={50}
                  status="active"
                />
              </div>
              <div className="d-flex justify-content-between">
                <span>Liên Lạc</span>
                <Progress
                  className="w-75"
                  strokeColor={{
                    from: "#108ee9",
                    to: "#87d068",
                  }}
                  percent={99.9}
                  status="active"
                />
              </div>
              <div className="d-flex justify-content-between">
                <span>Nhận Phòng</span>
                <Progress
                  className="w-75"
                  strokeColor={{
                    from: "#108ee9",
                    to: "#87d068",
                  }}
                  percent={99.9}
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
                    from: "#108ee9",
                    to: "#87d068",
                  }}
                  percent={99.9}
                  status="active"
                />
              </div>
              <div className="d-flex justify-content-between">
                <span>Vị Trí</span>
                <Progress
                  className="w-75"
                  strokeColor={{
                    from: "#108ee9",
                    to: "#87d068",
                  }}
                  percent={99.9}
                  status="active"
                />
              </div>
              <div className="d-flex justify-content-between">
                <span>Giá Trị</span>
                <Progress
                  className="w-75"
                  strokeColor={{
                    from: "#108ee9",
                    to: "#87d068",
                  }}
                  percent={99.9}
                  status="active"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="roomDetail_reviews_comment py-4">
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
              className="btn btn-outline-secondary"
              style={{ padding: 5, boderRadius: 5 }}
            >
              Hiển Thị Thêm Đánh Giá
            </button>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
}

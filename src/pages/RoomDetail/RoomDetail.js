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

  //Form setting

  useEffect(() => {
    dispatch(ThongTinChiTietPhongAction(props.match.params.id));
    dispatch(DSDanhGiaTheoPhongAction(props.match.params.id));

    const handleWindowResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  const renderDanhGia = () => {
    return dsDanhGia?.map((danhGia, index) => {
      return (
        <li key={index}>
          <div className="avatar">
            <img src={danhGia.userId.avatar} />
          </div>
          <div className="comment-content">
            <div className="arrow-comment" />
            <div className="comment-by">
              {danhGia.userId.name}{" "}
              <i
                className="tip"
                data-tip-content="Person who left this review actually was a customer"
              />{" "}
              <span className="date">
                {moment(danhGia.created_at).format("DD-MM-YYYY")}
              </span>
              <div className="star-rating" data-rating={5} />
            </div>
            <p>{danhGia.content}</p>
            <a href="#" className="rate-review">
              <i className="sl sl-icon-like" /> Helpful Review <span>12</span>
            </a>
          </div>
        </li>
      );
    });
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
                  4,83 ((18) đánh giá)
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
          <img src={chiTietPhong.image} className={`img-fluid`} alt="photos" />
        </div>
      </div>

      <div className="roomDetail_book row">
        <div className={width <= 1024 ? "col-12" : "col-7"}>
          <div className="roomDetail_book_detail">
            <div className="roomDetail_book_detail_head d-flex py-4">
              <div>
                <h5>Toàn Bộ Căn Hộ Chung Cư . Chủ nhà Phong</h5>
                <span>6 khách - 2 phòng ngủ - 2 giường - 2 phòng tắm</span>
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
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
              corrupti sunt ullam quam error nisi cumque accusantium dolorem
              minus, nihil delectus. Magnam nisi distinctio tenetur sed
              exercitationem blanditiis minus rerum!
            </div>
            <div className="roomDetail_book_detail_last py-4 border-top border-bottom">
              <h4>Tiện Nghi</h4>
              <div className="row">
                <div className="col-6 d-flex">
                  <Restaurant /> <p>Bếp</p>
                </div>
                <div className="col-6 d-flex">
                  <TvOutlined /> <p>TV với truyền hình cáp tiêu chuẩn</p>
                </div>
                <div className="col-6 d-flex">
                  <AcUnit /> <p>Điều Hòa Nhiệt Độ</p>
                </div>
                <div className="col-6 d-flex">
                  <Hvac /> <p>Lò Sưởi trong nhà</p>
                </div>
                <div className="col-6 d-flex">
                  <LocalParking /> <p>Bãi đổ xe thu phí nằm ngoài khuôn viên</p>
                </div>
                <div className="col-6 d-flex">
                  <WifiOutlined /> <p>Wifi</p>
                </div>
                <div className="col-6 d-flex">
                  <Elevator /> <p>Thang máy</p>
                </div>
                <div className="col-6 d-flex">
                  <Yard /> <p>Sân hoặc ban công</p>
                </div>
                <div className="col-6 d-flex">
                  <KitchenIcon /> <p>Tủ Lạnh</p>
                </div>
                <div className="col-6 d-flex">
                  <CalendarOutlined /> <p>Cho phép ở dài hạn</p>
                </div>
                <button className="col-8 btn-outline-dark">
                  Hiển Thị Tất Cả Tiện Ích
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className={width <= 1024 ? "col-12" : "col-5"}>
          <div className="roomDetail_book_booking px-2 py-4">
            <Form style={{maxWidth:400}}
              layout="vertical"
              size={width <= 400 ? "small" : width <= 800 ? "default" : "large"}
            >
              <div className=" d-flex justify-content-between">
                <span>
                  <span>$44</span> / đêm
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
                <div className="col-6">
                  <Button style={{backgroundImage:"red"}} type="submit">Submit</Button>
                </div>
              </div>
              
            </Form>
          </div>
        </div>
      </div>

      <div className="roomDetail_reviews">
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
        <div className="roomDetail_reviews_comment">
          <div className="row">
            <div className="col-6">
              <div className="d-flex">
                <Avatar
                  src={
                    <Image
                      src="https://joeschmoe.io/api/v1/random"
                      style={{ width: 32 }}
                    />
                  }
                />
                <div>
                  <h5>My Nương</h5>
                  <span>Tháng 7 năm 2020</span>
                </div>
              </div>
              <span>Host thân hiện và check in nhà nhanh</span>
            </div>{" "}
            <div className="col-6">
              <div className="d-flex">
                <Avatar
                  src={
                    <Image
                      src="https://joeschmoe.io/api/v1/random"
                      style={{ width: 32 }}
                    />
                  }
                />
                <div>
                  <h5>My Nương</h5>
                  <span>Tháng 7 năm 2020</span>
                </div>
              </div>
              <span>Host thân hiện và check in nhà nhanh</span>
            </div>{" "}
            <div className="col-6">
              <div className="d-flex">
                <Avatar
                  src={
                    <Image
                      src="https://joeschmoe.io/api/v1/random"
                      style={{ width: 32 }}
                    />
                  }
                />
                <div>
                  <h5>My Nương</h5>
                  <span>Tháng 7 năm 2020</span>
                </div>
              </div>
              <span>Host thân hiện và check in nhà nhanh</span>
            </div>{" "}
            <div className="col-6">
              <div className="d-flex">
                <Avatar
                  src={
                    <Image
                      src="https://joeschmoe.io/api/v1/random"
                      style={{ width: 32 }}
                    />
                  }
                />
                <div>
                  <h5>My Nương</h5>
                  <span>Tháng 7 năm 2020</span>
                </div>
              </div>
              <span>Host thân hiện và check in nhà nhanh</span>
            </div>{" "}
            <div className="col-6">
              <div className="d-flex">
                <Avatar
                  src={
                    <Image
                      src="https://joeschmoe.io/api/v1/random"
                      style={{ width: 32 }}
                    />
                  }
                />
                <div>
                  <h5>My Nương</h5>
                  <span>Tháng 7 năm 2020</span>
                </div>
              </div>
              <span>Host thân hiện và check in nhà nhanh</span>
            </div>{" "}
            <div className="col-6">
              <div className="d-flex">
                <Avatar
                  src={
                    <Image
                      src="https://joeschmoe.io/api/v1/random"
                      style={{ width: 32 }}
                    />
                  }
                />
                <div>
                  <h5>My Nương</h5>
                  <span>Tháng 7 năm 2020</span>
                </div>
              </div>
              <span>Host thân hiện và check in nhà nhanh</span>
            </div>
          </div>
          <button>Hiển Thị Tất Cả</button>
        </div>
      </div>
    </div>
  );
}

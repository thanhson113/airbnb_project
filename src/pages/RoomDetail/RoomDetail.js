/** @format */

import React, { createElement, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Map from "./Map";

import {
  Avatar,
  Button,
  Comment,
  DatePicker,
  Form,
  Image,
  Modal,
  Progress,
  Select,
  Tooltip,
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
  LikeFilled,
  DislikeFilled,
  LikeOutlined,
  DislikeOutlined,
} from "@ant-design/icons";

import {
  TvOutlined,
  AcUnit,
  Hvac,
  Elevator,
  Restaurant,
} from "@mui/icons-material";

import {
  DSDanhGiaTheoPhongAction,
  TaoDanhGiaTheoPhongAction,
} from "../../redux/Actions/DanhGiaAction";
import {
  DatPhongAction,
  ThongTinChiTietPhongAction,
} from "../../redux/Actions/PhongThueAction";
import { ChiTietNguoiDungAction } from "../../redux/Actions/NguoiDungAction";
import { layDSVeTheoPhongAction } from "../../redux/Actions/VeAction";

import moment from "moment";

import "../../asset/css/roomdetail.css";
import TextArea from "antd/lib/input/TextArea";

export default function RoomDetail(props) {
  const dispatch = useDispatch();
  const { dsDanhGia } = useSelector((state) => state.danhGiaReducer);
  const { chiTietPhong } = useSelector((state) => state.phongThueReducer);
  const { locationId } = chiTietPhong;
  const { dsVeIdroom } = useSelector((state) => state.VeReducer);
  const idUser = localStorage.getItem("id");
  const { user } = useSelector((state) => state.nguoiDungReducer);

  const { RangePicker } = DatePicker;
  const [dates, setDates] = useState([]);
  const [hackValue, setHackValue] = useState();
  const [value, setValue] = useState();
  let countDate = 0;

  const key = "AIzaSyA3HUkpN5-tSw68taF-syOrFnDp2rhDKZY"; //map

  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);
  const [more, setMore] = useState(6);
  const [add, setAdd] = useState(6);

  const [isModalVisible, setIsModalVisible] = useState(false);

  //comment
  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);
  const [action, setAction] = useState(null);
  const like = () => {
    setLikes(1);
    setDislikes(0);
    setAction("liked");
  };

  const dislike = () => {
    setLikes(0);
    setDislikes(1);
    setAction("disliked");
  };

  const actions = [
    <Tooltip key="comment-basic-like" title="Like">
      <span onClick={like}>
        {createElement(action === "liked" ? LikeFilled : LikeOutlined)}
        <span className="comment-action">{likes}</span>
      </span>
    </Tooltip>,
    <Tooltip key="comment-basic-dislike" title="Dislike">
      <span onClick={dislike}>
        {createElement(action === "disliked" ? DislikeFilled : DislikeOutlined)}
        <span className="comment-action">{dislikes}</span>
      </span>
    </Tooltip>,
    <span key="comment-basic-reply-to">Reply to</span>,
  ];

  //user comment
  const [submitting, setSubmitting] = useState(false);
  const [valueCM, setValueCM] = useState("");

  const handleSubmit = () => {
    console.log(valueCM);
    if (!valueCM) return;
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setValue("");
      dispatch(
        TaoDanhGiaTheoPhongAction(props.match.params.id, { content: valueCM })
      );//TODO:
    }, 1000);
  };

  const handleChange = (e) => {
    console.log(e.target.value);
    setValueCM(e.target.value);
  };

  const Editor = ({ onChange, onSubmit, submitting, value }) => (
    <>
      <Form.Item>
        <TextArea rows={4} onChange={onChange} value={value} />
      </Form.Item>
      <Form.Item>
        <Button
          htmlType="submit"
          loading={submitting}
          onClick={onSubmit}
          type="primary"
        >
          Add Comment
        </Button>
      </Form.Item>
    </>
  );

  //Form setting

  useEffect(() => {
    if (props.match.params.id) {
      dispatch(ThongTinChiTietPhongAction(props.match.params.id));
      dispatch(DSDanhGiaTheoPhongAction(props.match.params.id));
      dispatch(layDSVeTheoPhongAction(props.match.params.id));
    }

    if (idUser) dispatch(ChiTietNguoiDungAction(idUser));

    const handleWindowResize = () => {
      setWidth(window.innerWidth);
      setHeight(window.innerHeight);
    };

    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  const disableDate = (current) => {
    if (!dates || dates.length === 0) {
      return current && current < moment().endOf("day");
    }
    //Số ngày đat it nhat 3 ngay
    const tooLate = dates[0] && current.diff(dates[0], "days") < 3;
    const tooEarly =
      (current && current < moment().endOf("day")) ||
      (dates[1] && dates[1].diff(current, "days") < 3);
    return tooEarly || tooLate;
  };
  const onOpenChange = (open) => {
    if (open) {
      console.log("onOpenChange");
      setHackValue([]);
      setDates([]);
    } else {
      setHackValue(undefined);
    }
  };

  const renderDanhGia = (more) => {
    return dsDanhGia?.slice(0, more)?.map((danhGia, index) => {
      return (
        <Comment
          className={width < 768 ? "col-12" : "col-6"}
          key={index}
          actions={actions}
          author={<a>{danhGia.userId.name}</a>}
          avatar={
            <Avatar
              src={<Image src={danhGia.userId.avatar} />}
              alt={danhGia.userId.name}
            />
          }
          content={<p>{danhGia.content}</p>}
          datetime={
            <Tooltip
              title={moment(danhGia.created_at).format("YYYY-MM-DD HH:mm:ss")}
            >
              <span>{moment().fromNow()}</span>
            </Tooltip>
          }
        />
      );
    });
  };
  const renderTienNghi = (add) => {
    const tienNghi = [];
    if (chiTietPhong.kitchen)
      tienNghi.push(
        <div className="col-6 d-flex py-2" key={1}>
          <i className="m-2">
            <Restaurant />
          </i>{" "}
          <p>Bếp</p>
        </div>
      );
    if (chiTietPhong.cableTV)
      tienNghi.push(
        <div className="col-6 d-flex py-2" key={2}>
          <i className="m-2">
            <TvOutlined />
          </i>{" "}
          <p>TV với truyền hình cáp tiêu chuẩn</p>
        </div>
      );

    if (chiTietPhong.heating)
      tienNghi.push(
        <div className="col-6 d-flex py-2" key={3}>
          <i className="m-2">
            <AcUnit />
          </i>{" "}
          <p>Điều Hòa Nhiệt Độ</p>
        </div>
      );
    if (chiTietPhong.indoorFireplace)
      tienNghi.push(
        <div className="col-6 d-flex py-2" key={4}>
          <i className="m-2">
            <Hvac />
          </i>{" "}
          <p>Lò Sưởi trong nhà</p>
        </div>
      );

    if (chiTietPhong.wifi)
      tienNghi.push(
        <div className="col-6 d-flex py-2" key={5}>
          <i className="m-2">
            <WifiOutlined />
          </i>{" "}
          <p>Wifi</p>
        </div>
      );
    if (chiTietPhong.elevator)
      tienNghi.push(
        <div className="col-6 d-flex py-2" key={6}>
          <i className="m-2">
            <Elevator />
          </i>{" "}
          <p>Thang máy</p>
        </div>
      );
    if (chiTietPhong.pool)
      tienNghi.push(
        <div className="col-6 d-flex py-2" key={7}>
          <i className="fa fa-swimming-pool m-2"></i> <p>Bể bơi sạch đẹp</p>
        </div>
      );
    if (chiTietPhong.hotTub)
      tienNghi.push(
        <div className="col-6 d-flex py-2" key={8}>
          <i className="fa fa-hot-tub m-2"></i>{" "}
          <p>Có bồn nước nóng để thư giản</p>
        </div>
      );
    if (chiTietPhong.dryer)
      tienNghi.push(
        <div className="col-6 d-flex py-2" key={9}>
          <i className="fa fa-wind m-2"></i> <p>Có máy sấy để làm khô tóc</p>
        </div>
      );
    if (chiTietPhong.gym)
      tienNghi.push(
        <div className="col-6 d-flex py-2" key={10}>
          <i className="fa fa-dumbbell m-2"></i>{" "}
          <p>Có phòng tập hoặc khu tập gym</p>
        </div>
      );

    return tienNghi.slice(0, add);
  };

  const renderReducer = () => {
    if (value?.length === 0 || !value)
      return (
        <h5 className="w-100 text-danger text-center py-2">
          Vui lòng thực hiện hết thao tác đặt phòng
        </h5>
      );
    else {
      const endDay = new Date(value[1]);
      const startDay = new Date(value[0]);
      while (endDay > startDay) {
        countDate++;
        startDay.setDate(startDay.getDate() + 1);
      }

      return (
        <div className="col-12 text-center py-2">
          <div className="d-flex justify-content-between">
            <p>
              {chiTietPhong.price} x {countDate} đêm
            </p>{" "}
            <span>${chiTietPhong.price * countDate}</span>
          </div>
          <div className="d-flex justify-content-between  py-3 border-bottom">
            <p>Phí dịch vụ</p>{" "}
            <span>${(chiTietPhong.price * countDate) / 20}</span>
          </div>
          <div className="d-flex justify-content-between py-2">
            <p>Tổng</p>{" "}
            <span>${(chiTietPhong.price * countDate * 95) / 100}</span>
          </div>
        </div>
      );
    }
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

  const confirm = () => {
    Modal.confirm({
      title: "Bạn Muốn Đặt Vé Chứ",
      icon: <ExclamationCircleOutlined />,
      content: (
        <p>Tổng Chi phí là: {(chiTietPhong.price * countDate * 95) / 100}</p>
      ),
      okText: "Vâng",
      onOk() {
        const ve = {
          roomId: props.match.params.id,
          checkIn: moment(value[0]).format(),
          checkOut: moment(value[1]).format(),
        };
        console.log(ve);
        dispatch(DatPhongAction(ve));
      },
      cancelText: "Để Suy Nghĩ Lại",
    });
  };

  return (
    <div className={width >= 1024 ? `container roomDetail` : " roomDetail"}>
      <div className="roomDetail_head">
        <div className="roomDetail_head_tittle pb-3">
          <h1>{chiTietPhong.name}</h1>
          <div
            className={`${
              width <= 1024 ? "" : "d-flex"
            } justify-content-between`}
          >
            <div>
              <div className={`${width <= 768 ? "" : "d-flex"}`}>
                <h5
                  onClick={showModal}
                  className="cursor h_located text-decoration-text-decoration-underline py-3 "
                >
                  {" "}
                  {locationId?.name}, {locationId?.province},{" "}
                  {locationId?.country}
                </h5>
              </div>
            </div>

            <div className="d-flex">
              <button
                className="btn btn-outline-dark"
                style={{ borderRadius: "50%", height: "auto" }}
              >
                <i>
                  <ShareAltOutlined style={{ height: "auto" }} />
                </i>
              </button>

              <button
                className="btn btn-outline-dark mx-1"
                style={{ borderRadius: "50%", height: "auto" }}
              >
                <HeartOutlined />
              </button>
            </div>
          </div>
        </div>
        <div className="roomDetail_head_photos">
          <Image
            src={chiTietPhong?.image}
            className={`img-fluid roomDetail_head_photos_image`}
            alt="photos"
          />
        </div>
      </div>

      <div className="roomDetail_book row">
        <div className={width <= 1024 ? "col-12" : "col-7"}>
          <div className="roomDetail_book_detail">
            <div className="roomDetail_book_detail_head py-3 border-top">
              <h5 className="h_located cursor py-1" onClick={showModal}>
                Chỗ Ở Đẹp Và Tiện Nghi Tại {locationId?.name},{" "}
                {locationId?.province}, {locationId?.country}
              </h5>
              <p className="text-secondary pt-3">
                {chiTietPhong.guests ? `${chiTietPhong.guests} khách` : ""}{" "}
                {chiTietPhong.bedRoom
                  ? `${chiTietPhong.bedRoom} phòng ngủ`
                  : ""}{" "}
                {chiTietPhong.bath ? `${chiTietPhong.bath} phòng tắm` : ""}
              </p>
            </div>
            <div className="roomDetail_book_detail_mid py-4 border-top border-bottom">
              <div className="d-flex py-2">
                <i className="m-2">
                  <HomeOutlined />
                </i>
                <div>
                  <h6>Toàn Bộ Nhà</h6>
                  <span>Bạn sẽ có chung cư cao cấp cho riêng mình</span>
                </div>
              </div>
              <div className="d-flex py-2">
                <i className="m-2">
                  <SafetyOutlined />
                </i>
                <div>
                  <h6>Vệ Sinh Tăng Cường</h6>
                  <span>Cam kêt vs sạch</span>
                </div>
              </div>
              <div className="d-flex py-2">
                <i className="m-2">
                  <TrophyOutlined />
                </i>
                <div>
                  <h6>Phong Là Chủ Nhà Siu cấp</h6>
                  <span>Bạn sẽ có chung cư cao cấp cho riêng mình</span>
                </div>
              </div>
              <div className="d-flex py-2">
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
              <h5 className="mb-2">Tiện Nghi</h5>
              <div className="row">
                {renderTienNghi(add)}
                <div className="col-12 text-center p-2">
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
          <div className={"roomDetail_book_booking bg-white py-4"}>
            <Form
              className="m-auto form_book"
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
                <div className="col-12">
                  <Form.Item>
                    <h5 className="w-100 text-center p-2">
                      Ngày Đến Và Ngày Đi
                    </h5>
                    <RangePicker
                      value={hackValue || value}
                      format="YYYY-MM-DD"
                      disabledDate={disableDate}
                      onCalendarChange={(val) => setDates(val)}
                      onChange={(val) => setValue(val)}
                      onOpenChange={onOpenChange}
                    />
                    {/* <RangePicker
                      format="YYYY-MM-DD"
                      disabledDate={disableDateRanges({
                        endDate: checkOut,
                        startDate: checkIn,
                      })}
                    /> */}
                  </Form.Item>
                  <Form.Item label="Bạn Đi Bao Nhiêu Người">
                    <Select onChange={(a) => {}} defaultValue={{ value: "1" }}>
                      <Select.Option value="1">1 Người</Select.Option>
                      <Select.Option value="2">2 Người</Select.Option>
                      <Select.Option value="3">3 Người</Select.Option>
                      <Select.Option value="4">4 Người</Select.Option>
                    </Select>
                  </Form.Item>
                </div>
                <div className="col-12 text-center py-2">
                  <Button
                    onClick={() => {
                      if (value?.length === 2) confirm();
                      else alert("Chưa Chọn Ngày");
                    }}
                    className="w-100 btn_submit"
                  >
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
            <div className={width < 768 ? "col-12" : "col-6"}>
              <div className="d-flex justify-content-between">
                <span className="w-50">Mức Độ Sạch Sẽ</span>
                <Progress
                  className="w-50"
                  strokeColor={{
                    from: "#E233FF",
                    to: "#FF6B00",
                  }}
                  percent={`${locationId?.valueate}0`}
                  status="active"
                />
              </div>
              <div className="d-flex justify-content-between">
                <span className="w-50">Liên Lạc</span>
                <Progress
                  className="w-50"
                  strokeColor={{
                    from: "#E233FF",
                    to: "#FF6B00",
                  }}
                  percent={`${locationId?.valueate}0`}
                  status="active"
                />
              </div>
              <div className="d-flex justify-content-between">
                <span className="w-50">Nhận Phòng</span>
                <Progress
                  className="w-50"
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
                <span className="w-50">Mức Độ Chính Xác</span>
                <Progress
                  className="w-50"
                  strokeColor={{
                    from: "#E233FF",
                    to: "#FF6B00",
                  }}
                  percent={`${locationId?.valueate}0`}
                  status="active"
                />
              </div>
              <div className="d-flex justify-content-between">
                <span className="w-50">Vị Trí</span>
                <Progress
                  className="w-50"
                  strokeColor={{
                    from: "#E233FF",
                    to: "#FF6B00",
                  }}
                  percent={`${locationId?.valueate}0`}
                  status="active"
                />
              </div>
              <div className="d-flex justify-content-between">
                <span className="w-50">Giá Trị</span>
                <Progress
                  className="w-50"
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
            <div className="w-100 text-center p-2">
              <button
                onClick={() => {
                  setMore(more + 6);
                }}
                className="custom-btn btn_Add"
              >
                Hiển Thị Thêm Đánh Giá
              </button>
            </div>
          ) : (
            ""
          )}
          {idUser ? (
            <div className="roomDetail_reviews_user_comment">
              <Comment
                avatar={<Avatar src={user?.avatar} alt={user?.name} />}
                content={
                  <Editor
                    onChange={handleChange}
                    onSubmit={handleSubmit}
                    submitting={submitting}
                    value={valueCM}
                  />
                }
              />
            </div>
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
        cancelText={<i className="fab fa-angellist"></i>}
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

/** @format */

import React, { createElement, useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Map from "./Map";

import {
  Avatar,
  Button,
  Comment,
  DatePicker,
  Form,
  Image,
  Input,
  message,
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
  LikeFilled,
  DislikeFilled,
  LikeOutlined,
  DislikeOutlined,
  DeleteOutlined,
  UndoOutlined,
  UserOutlined,
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
  XoaDanhGiaAction,
  XuaDanhGiaAction,
} from "../../redux/Actions/DanhGiaAction";
import { ThongTinChiTietPhongAction } from "../../redux/Actions/PhongThueAction";
import { ChiTietNguoiDungAction } from "../../redux/Actions/NguoiDungAction";
import { layDSVeTheoPhongAction } from "../../redux/Actions/VeAction";

import moment from "moment";

import "../../asset/css/roomdetail.css";
import { history } from "../../App";

export default function RoomDetail(props) {
  const dispatch = useDispatch();
  const container = useRef(null);
  const divScroll = useRef(null);

  const { dsDanhGia } = useSelector((state) => state.danhGiaReducer);
  const { chiTietPhong } = useSelector((state) => state.phongThueReducer);
  const { locationId } = chiTietPhong;

  const idUser = localStorage.getItem("id");
  const { user } = useSelector((state) => state.nguoiDungReducer);

  const { RangePicker } = DatePicker;
  const [dates, setDates] = useState([]);
  const [hackValue, setHackValue] = useState();
  const [value, setValue] = useState();
  const [value2, setValue2] = useState();
  let countDate = 0;

  const key = "AIzaSyA3HUkpN5-tSw68taF-syOrFnDp2rhDKZY"; //map

  const [width, setWidth] = useState(window.innerWidth);

  const [more, setMore] = useState(6);
  const [add, setAdd] = useState(6);
  const [heightDiv, setHeightDiv] = useState(0);

  const [isModalVisible, setIsModalVisible] = useState(false);

  useEffect(() => {
    if (props.match.params.id) {
      dispatch(ThongTinChiTietPhongAction(props.match.params.id));
      dispatch(DSDanhGiaTheoPhongAction(props.match.params.id));
      dispatch(layDSVeTheoPhongAction(props.match.params.id));
    }

    if (idUser) dispatch(ChiTietNguoiDungAction(idUser));

    const handleWindowResize = () => {
      setWidth(window.innerWidth);
      // setHeight(window.innerHeight);
    };

    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  //comment
  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);
  const [action, setAction] = useState(null);
  const [visible, setVisible] = useState(false);
  const [commentID, setCommentId] = useState("");
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

  const renderDanhGia = (more) => {
    return dsDanhGia?.slice(0, more).map((danhGia, index) => {
      const actions = [
        <Tooltip key="comment-basic-like" title="Like">
          <span onClick={like}>
            {createElement(action === "liked" ? LikeFilled : LikeOutlined)}
            <span className="comment-action">{likes}</span>
          </span>
        </Tooltip>,
        <Tooltip key="comment-basic-dislike" title="Dislike">
          <span onClick={dislike}>
            {createElement(
              action === "disliked" ? DislikeFilled : DislikeOutlined
            )}
            <span className="comment-action">{dislikes}</span>
          </span>
        </Tooltip>,
        <span key="comment-basic-reply-to">Reply to</span>,

        <Tooltip key="update-comment" title="Correct ">
          {idUser === danhGia?.userId?._id ? (
            <span
              onClick={() => {
                setValue2(danhGia.content);
                setVisible(!isModalVisible);
                setCommentId(danhGia?.userId?._id);
              }}
              className="ReloadOutlined"
            >
              <UndoOutlined />
            </span>
          ) : (
            ""
          )}
        </Tooltip>,
        <Tooltip key="delete-comment" title="Delete">
          {idUser === danhGia?.userId?._id ? (
            <span
              onClick={() => {
                dispatch(XoaDanhGiaAction(danhGia?._id, props.match.params.id));
              }}
              className="DeleteOutlined"
            >
              <DeleteOutlined />
            </span>
          ) : (
            ""
          )}
        </Tooltip>,
      ];
      return (
        <Comment
          className={width < 768 ? "col-12" : "col-6"}
          key={index}
          actions={actions}
          author={<a>{danhGia.userId?.name}</a>}
          avatar={
            danhGia.userId?.avatar ? (
              <Avatar
                src={<Image src={danhGia.userId?.avatar} />}
                alt={danhGia.userId?.name}
              />
            ) : (
              <Avatar icon={<UserOutlined />} />
            )
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

  //user comment

  const [submitting, setSubmitting] = useState(false);
  let [valueComment, setValueComment] = useState("");
  let [valueComment2, setValueComment2] = useState("");

  const { TextArea } = Input;

  const handleSubmit = () => {
    if (!valueComment) return;
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      dispatch(
        TaoDanhGiaTheoPhongAction(props.match.params.id, {
          content: valueComment,
        })
      );
    }, 1125);
  };
  const handleSubmit2 = () => {
    if (!valueComment2) return;
    dispatch(
      XuaDanhGiaAction(commentID, props.match.params.id, {
        content: valueComment2,
      })
    );
  };

  const handleChange = (e) => {
    setValueComment(e.target.value);
  };

  const handleChange2 = (e) => {
    setValueComment2(e.target.value);
  };
  //Form setting

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
      setHackValue([]);
      setDates([]);
    } else {
      setHackValue(undefined);
    }
  };

  const renderTienNghi = (add) => {
    const rdTienNghi = { tienNghi: [], countTienNghi: 0 };

    if (chiTietPhong.kitchen) {
      rdTienNghi.tienNghi.push(
        <div className="col-6 d-flex py-2" key={1}>
          <i className="m-2">
            <Restaurant />
          </i>{" "}
          <p>Bếp</p>
        </div>
      );
      rdTienNghi.countTienNghi++;
    }

    if (chiTietPhong.cableTV) {
      rdTienNghi.tienNghi.push(
        <div className="col-6 d-flex py-2" key={2}>
          <i className="m-2">
            <TvOutlined />
          </i>{" "}
          <p>TV với truyền hình cáp tiêu chuẩn</p>
        </div>
      );
      rdTienNghi.countTienNghi++;
    }

    if (chiTietPhong.heating) {
      rdTienNghi.tienNghi.push(
        <div className="col-6 d-flex py-2" key={3}>
          <i className="m-2">
            <AcUnit />
          </i>{" "}
          <p>Điều Hòa Nhiệt Độ</p>
        </div>
      );
      rdTienNghi.countTienNghi++;
    }

    if (chiTietPhong.indoorFireplace) {
      rdTienNghi.tienNghi.push(
        <div className="col-6 d-flex py-2" key={4}>
          <i className="m-2">
            <Hvac />
          </i>{" "}
          <p>Lò Sưởi trong nhà</p>
        </div>
      );
      rdTienNghi.countTienNghi++;
    }

    if (chiTietPhong.wifi) {
      rdTienNghi.tienNghi.push(
        <div className="col-6 d-flex py-2" key={5}>
          <i className="m-2">
            <WifiOutlined />
          </i>{" "}
          <p>Wifi</p>
        </div>
      );
      rdTienNghi.countTienNghi++;
    }

    if (chiTietPhong.elevator) {
      rdTienNghi.tienNghi.push(
        <div className="col-6 d-flex py-2" key={6}>
          <i className="m-2">
            <Elevator />
          </i>{" "}
          <p>Thang máy</p>
        </div>
      );
      rdTienNghi.countTienNghi++;
    }

    if (chiTietPhong.pool) {
      rdTienNghi.tienNghi.push(
        <div className="col-6 d-flex py-2" key={7}>
          <i className="fa fa-swimming-pool m-2"></i> <p>Bể bơi sạch đẹp</p>
        </div>
      );
      rdTienNghi.countTienNghi++;
    }

    if (chiTietPhong.hotTub) {
      rdTienNghi.tienNghi.push(
        <div className="col-6 d-flex py-2" key={8}>
          <i className="fa fa-hot-tub m-2"></i>{" "}
          <p>Có bồn nước nóng để thư giản</p>
        </div>
      );
      rdTienNghi.countTienNghi++;
    }

    if (chiTietPhong.dryer) {
      rdTienNghi.tienNghi.push(
        <div className="col-6 d-flex py-2" key={9}>
          <i className="fa fa-wind m-2"></i> <p>Có máy sấy để làm khô tóc</p>
        </div>
      );
      rdTienNghi.countTienNghi++;
    }

    if (chiTietPhong.gym) {
      rdTienNghi.tienNghi.push(
        <div className="col-6 d-flex py-2" key={10}>
          <i className="fa fa-dumbbell m-2"></i>{" "}
          <p>Có phòng tập hoặc khu tập gym</p>
        </div>
      );
      rdTienNghi.countTienNghi++;
    }

    return rdTienNghi;
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
            <span>${(chiTietPhong.price * countDate * 105) / 100}</span>
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

  const warning = () => {
    message.warning(
      <p className="text text-danger py-2">
        Bạn Chưa Thiết Lập Xong Ngày Đi Và Đến
      </p>,
      5
    );
  };

  return (
    <div className={width >= 1024 ? `container roomDetail` : " roomDetail"}>
      <div className="roomDetail_head">
        <div className="roomDetail_head_tittle pb-3">
          <h2>{chiTietPhong.name}</h2>
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
                className="btn_head m-1"
                style={{ borderRadius: "50%", height: "30px", width: "30px" }}
              >
                <i className="d-flex align-items-center justify-content-center">
                  <ShareAltOutlined />
                </i>
              </button>
              <button
                className="btn_head m-1"
                style={{ borderRadius: "50%", height: "30px", width: "30px" }}
              >
                <i className="d-flex align-items-center justify-content-center">
                  <HeartOutlined />
                </i>
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

      <div className="roomDetail_book row" ref={container}>
        <div className={width <= 1024 ? "col-12" : "col-6"}>
          <div className="roomDetail_book_detail" id="roomDetail_book_detail">
            <div className="roomDetail_book_detail_head py-3 border-top">
              <h5 className="h_located cursor py-1" onClick={showModal}>
                Chỗ Ở Đẹp Và Tiện Nghi Tại {locationId?.name},{" "}
                {locationId?.province}, {locationId?.country}
                {heightDiv}
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
                  <span>Cam kêt phòng sạch sẽ</span>
                </div>
              </div>
              <div className="d-flex py-2">
                <i className="m-2">
                  <TrophyOutlined />
                </i>
                <div>
                  <h6>Đặc quyền tốt</h6>
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
                {renderTienNghi()?.tienNghi.slice(0, add)}
                <div className="col-12 text-center p-2">
                  {renderTienNghi()?.countTienNghi > 6 && add !== 10 ? (
                    <button
                      onClick={() => {
                        setAdd(10);
                      }}
                      className="custom-btn btn_Add"
                    >
                      Hiển Thị Tất Cả Tiện Ích
                    </button>
                  ) : add === 10 ? (
                    <button
                      onClick={() => {
                        setAdd(6);
                      }}
                      className="custom-btn btn_Add"
                    >
                      Ẩn Bớt Tiện Ích
                    </button>
                  ) : (
                    ""
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={width <= 1024 ? "col-12" : "col-6"}>
          <div className={"roomDetail_book_booking bg-white py-4"}>
            <div ref={divScroll} className="sticky">
              <Form
                className="m-auto form_book"
                layout="vertical"
                size={
                  width <= 400 ? "small" : width <= 800 ? "default" : "large"
                }
              >
                {width >= 1024 ? (
                  <div className=" d-flex justify-content-between">
                    <span>
                      <span>${chiTietPhong.price}</span> / đêm
                    </span>
                    {locationId ? (
                      <div className="d-flex">
                        <StarOutlined style={{ color: "pink" }} />{" "}
                        <span style={{ color: "black" }}>
                          {locationId?.valueate}{" "}
                        </span>
                      </div>
                    ) : (
                      ""
                    )}
                  </div>
                ) : (
                  ""
                )}

                <div className="row">
                  <div className="col-12">
                    <Form.Item>
                      <h5 className="w-100 text-center p-3">
                        Ngày Đến Và Ngày Đi
                      </h5>
                      <RangePicker
                        className="w-100 text-center p2"
                        value={hackValue || value}
                        format="YYYY-MM-DD"
                        disabledDate={disableDate}
                        onCalendarChange={(val) => setDates(val)}
                        onChange={(val) => setValue(val)}
                        onOpenChange={onOpenChange}
                      />
                    </Form.Item>
                    <Form.Item label="Bạn Đi Bao Nhiêu Người">
                      <Select
                        onChange={(a) => {}}
                        defaultValue={{ value: "1" }}
                      >
                        <Select.Option value="1">1 Người</Select.Option>
                        <Select.Option value="2">2 Người</Select.Option>
                        <Select.Option value="3">3 Người</Select.Option>
                        <Select.Option value="4">4 Người</Select.Option>
                      </Select>
                    </Form.Item>
                  </div>
                  <div className="col-12 text-center  py-3">
                    <Button
                      onClick={() => {
                        if (value?.length === 2) {
                          localStorage.setItem(
                            "datPhong",
                            JSON.stringify({
                              roomId: props.match.params.id,
                              checkIn: moment(value[0]).format(),
                              checkOut: moment(value[1]).format(),
                            })
                          );

                          // dispatch(add_component(<Login />, "Login"));
                          history.push(`/cart/login`);
                        } else warning();
                      }}
                      className=" btn_submit"
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
      </div>

      <div className="roomdetail_map ">
        <h5 className="px-5 py-4">Vị Trí Của Bạn Là</h5>
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
            <h5 className="py-3">
              {dsDanhGia.length === 0
                ? "Hiện Tại Chưa Có Đánh Giá"
                : `Có ${dsDanhGia.length} đánh giá`}
            </h5>
          </div>
          <div className="row py-2">
            <div className={width < 768 ? "col-12" : "col-6"}>
              <div className="d-flex justify-content-between">
                <span className="w-50 p-1">Mức Độ Sạch Sẽ</span>
                <Progress
                  className="w-50"
                  strokeColor={{
                    from: "#e8798e",
                    to: " #f91942",
                  }}
                  percent={`${locationId ? locationId.valueate : 10}0`}
                  status="active"
                />
              </div>
              <div className="d-flex justify-content-between">
                <span className="w-50 p-1">Liên Lạc</span>
                <Progress
                  className="w-50"
                  strokeColor={{
                    from: "#e8798e",
                    to: " #f91942",
                  }}
                  percent={`${locationId ? locationId.valueate : 10}0`}
                  status="active"
                />
              </div>
              <div className="d-flex justify-content-between">
                <span className="w-50 p-1">Nhận Phòng</span>
                <Progress
                  className="w-50"
                  strokeColor={{
                    from: "#e8798e",
                    to: " #f91942",
                  }}
                  percent={`${locationId ? locationId.valueate : 10}0`}
                  status="active"
                />
              </div>
            </div>
            <div className={width < 768 ? "col-12" : "col-6"}>
              <div className="d-flex justify-content-between">
                <span className="w-50 p-1">Mức Độ Chính Xác</span>
                <Progress
                  className="w-50"
                  strokeColor={{
                    from: "#e8798e",
                    to: " #f91942",
                  }}
                  percent={`${locationId ? locationId.valueate : 10}0`}
                  status="active"
                />
              </div>
              <div className="d-flex justify-content-between">
                <span className="w-50 p-1">Vị Trí</span>
                <Progress
                  className="w-50"
                  strokeColor={{
                    from: "#e8798e",
                    to: " #f91942",
                  }}
                  percent={`${locationId ? locationId.valueate : 10}0`}
                  status="active"
                />
              </div>
              <div className="d-flex justify-content-between">
                <span className="w-50 p-1">Giá Trị</span>
                <Progress
                  className="w-50"
                  strokeColor={{
                    from: "#e8798e",
                    to: " #f91942",
                  }}
                  percent={`${locationId ? locationId.valueate : 10}0`}
                  status="active"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="roomDetail_reviews_comment py-4" id="comment">
          <div className="roomDetail_reviews_user_comment">
            <Comment
              avatar={<Avatar src={user.avatar} alt={user.name} />}
              content={
                <>
                  <Form.Item>
                    <TextArea
                      className="input_comment"
                      disabled={!idUser ? true : false}
                      showCount
                      placeholder={
                        !idUser
                          ? "Khi bạn đăng nhập thành công mới được đánh giá phòng này !"
                          : "Xin cho biết cảm nghĩ của bạn về phòng này"
                      }
                      maxLength={100}
                      rows={4}
                      onChange={(e) => {
                        handleChange(e);
                      }}
                    />
                  </Form.Item>
                  <Form.Item>
                    <Button
                      disabled={!idUser ? true : false}
                      loading={submitting}
                      onClick={handleSubmit}
                      className="btn_comment"
                    >
                      Add Comment
                    </Button>
                  </Form.Item>
                </>
              }
            />
          </div>
          <div className="row">
            {dsDanhGia?.length !== 0 ? renderDanhGia(more) : ""}
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
          ) : dsDanhGia?.length < more && dsDanhGia?.length > 6 ? (
            <div className="w-100 text-center p-2">
              <button
                onClick={() => {
                  setMore(6);
                }}
                className="custom-btn btn_Add"
              >
                Ẩn Bớt Đánh Giá
              </button>
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
      <Modal
        title="Nội dung bạn muốn sửa"
        centered
        visible={visible}
        onOk={async () => {
          await handleSubmit2();
          await setVisible(false);
        }}
        onCancel={() => setVisible(false)}
        okText="Comment !"
        cancelText="cancel !"
        width={width}
      >
        <Comment
          avatar={<Avatar src={user.avatar} alt={user.name} />}
          content={
            <>
              <Form.Item>
                <TextArea
                  className="input_comment"
                  disabled={!idUser ? true : false}
                  showCount
                  placeholder="Nhập nội dung bạn muốn sửa vào đây !"
                  maxLength={100}
                  rows={4}
                  onChange={(e) => {
                    handleChange2(e);
                  }}
                  defaultValue={value2}
                />
              </Form.Item>
            </>
          }
        />
      </Modal>
    </div>
  );
}

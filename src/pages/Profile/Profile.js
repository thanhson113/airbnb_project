/** @format */

import { Avatar, Image, Modal, Select, Tabs } from "antd";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  ChiTietNguoiDungAction,
  UploadAvaraNDAction,
} from "../../redux/Actions/NguoiDungAction";
import { formUp } from "../Profile/UpdateND";
import { Booking } from "../Profile/HistoryBooking";

import "../../assets/css/profile.css";
import { UserOutlined } from "@ant-design/icons";

const { TabPane } = Tabs;

export default function Profile() {
  const dispatch = useDispatch();
  const id = localStorage.getItem("id");
  const [imgSrc, setImgSrc] = useState(null);
  const [fileSrc, setFileSrc] = useState(null);
  const [upL, setUpl] = useState(false);

  const { user } = useSelector((state) => state.nguoiDungReducer);
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    if (id) dispatch(ChiTietNguoiDungAction(id));

    const handleWindowResize = () => {
      setWidth(window.innerWidth);
      // setHeight(window.innerHeight);
    };

    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  const handleChangeFile = (e) => {
    let file = e?.target.files[0];
    if (
      file?.type === "image/jpeg" ||
      file?.type === "image/png" ||
      file?.type === "image/jpg" ||
      file?.type === "image/gif"
    ) {
      let reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = (e) => {
        setImgSrc(e.target.result); //hinh base
        setFileSrc(file);
      };
      setUpl(true);
    }
  };
  const handleSubmitFile = () => {
    let formData = new FormData();
    formData.append("avatar", fileSrc, fileSrc.name);
    dispatch(UploadAvaraNDAction(formData));
  };

  return (
    <div className="profile overflow-hidden">
      <div className="profife_status">
        <div className="profife_status_avatar text-center">
          <div className="btn_avatar d-flex justify-content-end p-2">
            <label
              htmlFor="upload-photo"
              className="btn_avatar_button custom-btn  my-2 "
            >
              Thay Đổi Avatar
            </label>
            <input
              id="upload-photo"
              type="file"
              onChange={handleChangeFile}
              accept="image/jpeg, image/png, image/gif,image/jpg"
            />
          </div>
          {user.avatar?<Avatar
            size={100}
            src={
              <Image src={user?.avatar} style={{ height: 100, width: 100 }} />
            }
          />:<Avatar  size={100} icon={<UserOutlined />} />}
          
          <div className="profife_status_avatar_detail py-2 ">
            <h3 className="py-2">{user?.name}</h3>
            <div className="d-flex justify-content-center py-3">
              <div className="d-flex ">
                <span className="text text-secondary">Hội Viên :</span>
                <span className="ml-1"> Thân Thiết</span>
              </div>
              <div className="d-flex ml-3">
                <span className="text text-secondary">Đã Tham gia :</span>
                <span className="ml-1"> 1 Năm</span>
              </div>
            </div>
            <div className="d-flex justify-content-center py-1">
              <div className="d-flex">
                <span className="text text-secondary">Lượt like :</span>
                <span className="ml-1"> 6</span>
              </div>{" "}
              <div className="d-flex ml-3">
                <span className="text text-secondary">Số phòng cho thuê :</span>
                <span className="ml-1"> 0</span>
              </div>
            </div>
          </div>
          <Modal
            title={
              <h4 className="px-3">Bạn chắn chắn muốn đổi ảnh đại diện này</h4>
            }
            visible={upL}
            onOk={() => {
              handleSubmitFile();
              setUpl(false);
            }}
            okText="Vâng, chắc chắn"
            onCancel={() => setUpl(false)}
            cancelText="Để suy nghĩ lại"
            className="profile_modal"
            width={width < 500 ? 350 : width >= 500 && width <= 768 ? 450 : 600}
          >
            <Image
              style={{ maxWidth: "400px", maxHeight: "300px" }}
              src={imgSrc}
              alt="..."
            />
          </Modal>
        </div>

        <div className="profife_status_content">
          <Tabs defaultActiveKey="2" centered>
            <TabPane tab="Thông tin " key="1">
              <div className="profife_info">{formUp(id)}</div>
            </TabPane>
            <TabPane tab="Lịch Sử Booking" key="2">
              <div className="profile_booking">{Booking()}</div>
            </TabPane>
          </Tabs>
        </div>
      </div>
    </div>
  );
}

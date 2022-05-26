/** @format */

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { LayChiTietVeCuaNDAction } from "../../redux/Actions/VeAction";
import { Card, Image } from "antd";
import moment from "moment";
const { Meta } = Card;

function HistoryBooking() {
  const { user } = useSelector((state) => state.nguoiDungReducer);
  const { dsVeTheoND } = useSelector((state) => state.VeReducer);
  const dispatch = useDispatch();
  console.log(user);
  console.log(dsVeTheoND);
  console.log(dsVeTheoND[0]);

  const layDSVeNguoiDung = (user) => {
    return user.tickets?.map((ve) => dispatch(LayChiTietVeCuaNDAction(ve)));
  };
  useEffect(() => {
    layDSVeNguoiDung(user);
  }, [user]);

  const rederDanhSachVe = () => {
    return dsVeTheoND.map((ve, index) => {
      return (
        <div key={index} className="historyBooking_content_item">
          <Card
            cover={
              <Image
                alt={ve?.roomId.name}
                src={ve?.roomId.image}
              />
            }
          >
            <Meta
              title={ve?.roomId.name}
              style={{ textAlign: "center" }}
              // description={dsVeTheoND[0]?.roomId.description}
            />
            <div className="">
              <div className="d-flex justify-content-between py-1">
                <span>Ngày Đến: </span>{" "}
                <span>
                  {moment(ve?.checkIn).format("DD/MM/YYYY")}
                </span>
              </div>
              <div className="d-flex justify-content-between py-1">
                <span>Ngày Đi: </span>{" "}
                <span>
                  {moment(ve?.checkOut).format("DD/MM/YYYY")}
                </span>
              </div>
            </div>
          </Card>
        </div>
      );
    });
  };

  return (
    <div className="HistoryBooking">
      <div className="historyBooking_head text-center py-4">
        <h4>Danh sách vé bạn đặt</h4>
      </div>
      <div className="historyBooking_content">
       {rederDanhSachVe()}
      </div>
    </div>
  );
}
export const Booking = HistoryBooking;

import { history } from '../../App'
import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { layDSPhongThueTheoViTri } from '../../redux/Actions/PhongThueAction'
import { layDanhSachViTri } from '../../redux/Actions/ViTriActon'
import { Rate } from 'antd';
export default function RoomList(props) {
    const [state, setState] = useState({
        value: 3
    })
    const { dsPhongTheoViTri } = useSelector(state => state.phongThueReducer)
    const dispatch = useDispatch();
    useEffect(() => {
        const { id } = props.match.params
        dispatch(layDSPhongThueTheoViTri(id))
    }, [])
    const handleChange = value => {
        setState({ value });
    };
    const renderRoomlist = () => {
        if(dsPhongTheoViTri.length == 0) {
           return <h5>Hiện tại không có khách sạn cho địa điểm này</h5>
        }
        return dsPhongTheoViTri.map(phong => {
            
            return (
                <div className="col-lg-12 col-md-12 pl-0" key={phong._id}>
                    <div className="listing__container" data-marker-id={1}>
                        <div onClick={() => { history.push(`/roomdetail/${phong._id}`) }} className="listing__item row mb-3 " style={{cursor:'pointer',backgroundColor:'#f6f6f6'  }}>
                            {/* Image */}
                            <div className="listing__img col-12 col-md-3  pl-0">
                                <img src={phong.image} />
                            </div>
                            {/* Content */}
                            <div className="listing__content col-12 col-md-9 py-3">
                                <div className="listing__inner" style={{}}>
                                    <h3 className="pb-3">{phong.name}</h3>
                                    <span>{phong.locationId.province}, {phong.locationId.country}</span>
                                    <p>{phong.price.toLocaleString()} VND / Ngày</p>
                                    <p> {phong.guests} khách , {phong.bedRoom} phòng ngủ, {phong.bath} phòng tắm</p>
                                    <p>
                                        {phong.wifi ? 'Wifi- ' : '-'}
                                        {phong.elevator ? 'Thang máy- ' : '-'}
                                        {phong.hotTub ? 'Bồn nước nóng- ' : '-'}
                                        {phong.pool ? 'Hồ bơi- ' : '-'}
                                        {phong.gym ? 'Phòng gym ' : '-'}
                                    </p>

                                    {phong.valueate}

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        })
    }
    return (
        <>
            <div>
                <div id="titlebar" className="gradient">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <h2 className='pb-5'>Chỗ ở tại khu vực bản đồ đã chọn</h2><span></span>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Content
    ================================================== */}
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="row">
                                {/* Listing Item */}
                                {renderRoomlist()}

                            </div>
                        </div>
                    </div></div></div>


        </>
    )
}

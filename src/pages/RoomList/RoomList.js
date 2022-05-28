import {history} from '../../App'
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
        return dsPhongTheoViTri.map(phong => {
            return (
                <div className="col-lg-12 col-md-12" key={phong._id}>
                    <div className="listing-item-container list-layout" data-marker-id={1}>
                        <div onClick={() => {history.push(`/roomdetail/${phong._id}`)}} className="listing-item">
                            {/* Image */}
                            <div className="listing-item-image">
                                <img  src={phong.image} />
                            </div>
                            {/* Content */}
                            <div className="listing-item-content">
                                {/* <div className="listing-badge now-open">Now Open</div> */}
                                <div className="listing-item-inner">
                                    <h3>{phong.name}</h3>
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
                                    
                                    {phong.valueate }
                                       
                                </div>
                                <div className="listing-rate">
                                   
                                </div>
                                <span className="like-icon" />
                            </div>
                        </div>
                    </div>
                </div>
            )
        })
    }
    return (
        <div id="wrapper">
            {/* Content
  ================================================== */}
            <div className="fs-container">
                <div className="fs-inner-container content">
                    <div className="fs-content">
                        {/* Search */}
                        <section className="search">
                            <div className="row">
                                <div className="col-md-12">
                                    {/* Row With Forms */}
                                        <h3 className="text-center">Chỗ ở tại khu vực bản đồ đã chọn</h3>
                                </div>
                            </div>
                        </section>
                        {/* Search / End */}
                        <section className="listings-container margin-top-30">
                            {/* Listings */}
                            <div className="row fs-listings">
                                {/* Listing Item */}
                                {renderRoomlist()}
                            </div>
                            {/* Listings Container / End */}
                            {/* Pagination Container */}
                            <div className="row fs-listings">
                                <div className="col-md-12">
                                    {/* Pagination */}
                                    <div className="clearfix" />
                                    <div className="row">
                                        <div  className="col-md-12">
                                            {/* Pagination */}
                                            <div className="pagination-container margin-top-15 margin-bottom-40">
                                                <nav className="pagination">
                                                    <ul>
                                                        <li><a href="#" className="current-page">1</a></li>
                                                        <li><a href="#">2</a></li>
                                                        <li><a href="#">3</a></li>
                                                        <li><a href="#"><i className="sl sl-icon-arrow-right" /></a></li>
                                                    </ul>
                                                </nav>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="clearfix" />
                                    {/* Pagination / End */}
                                    {/* Copyrights */}
                                    <div className="copyrights margin-top-0">© 2021 Listeo. All Rights Reserved.</div>
                                </div>
                            </div>
                            {/* Pagination Container / End */}
                        </section>
                    </div>
                </div>
                <div className="fs-inner-container map-fixed">
                    {/* Map */}
                    <div id="map-container">
                        <div id="map" data-map-scroll="true">
                            {/* map goes here */}
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d61349.64667009347!2d108.1716864209382!3d16.04716590689819!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x314219c792252a13%3A0xfc14e3a044436487!2zxJDDoCBO4bq1bmcsIEjhuqNpIENow6J1LCDEkMOgIE7hurVuZywgVmnhu4d0IE5hbQ!5e0!3m2!1svi!2s!4v1652438428131!5m2!1svi!2s" style={{ border: 0, width: '100%', height: '100%' }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />

                        </div>
                    </div>
                </div>
            </div>

        </div>

    )
}

import history from '../../App'
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
                        <div onClick={() => history.push(`/roomdetail/${phong._id}`)} className="listing-item">
                            {/* Image */}
                            <div className="listing-item-image">
                                <img src={phong.image} />
                                <span className="tag">Eat &amp; Drink</span>
                            </div>
                            {/* Content */}
                            <div className="listing-item-content">
                                <div className="listing-badge now-open">Now Open</div>
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
                                        <i style={{color: 'orange'}} className="fa fa-star "></i>
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
                                    <div className="row with-forms">
                                        {/* Main Search Input */}
                                        <div className="col-fs-6">
                                            <div className="input-with-icon">
                                                <i className="sl sl-icon-magnifier" />
                                                <input type="text" placeholder="What are you looking for?" defaultValue />
                                            </div>
                                        </div>
                                        {/* Main Search Input */}
                                        <div className="col-fs-6">
                                            <div className="input-with-icon location">
                                                <div id="autocomplete-container" data-autocomplete-tip="type and hit enter">
                                                    <input id="autocomplete-input" type="text" placeholder="Location" />
                                                </div>
                                                <a href="#"><i className="fa fa-map-marker" /></a>
                                            </div>
                                        </div>
                                        {/* Filters */}
                                        <div className="col-fs-12">
                                            {/* Panel Dropdown / End */}
                                            <div className="panel-dropdown">
                                                <a href="#">Categories</a>
                                                <div className="panel-dropdown-content checkboxes categories">
                                                    {/* Checkboxes */}
                                                    <div className="row">
                                                        <div className="col-md-6">
                                                            <input id="check-1" type="checkbox" name="check" defaultChecked className="all" />
                                                            <label htmlFor="check-1">All Categories</label>
                                                            <input id="check-2" type="checkbox" name="check" />
                                                            <label htmlFor="check-2">Shops</label>
                                                            <input id="check-3" type="checkbox" name="check" />
                                                            <label htmlFor="check-3">Hotels</label>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <input id="check-4" type="checkbox" name="check" />
                                                            <label htmlFor="check-4">Eat &amp; Drink</label>
                                                            <input id="check-5" type="checkbox" name="check" />
                                                            <label htmlFor="check-5">Fitness</label>
                                                            <input id="check-6" type="checkbox" name="check" />
                                                            <label htmlFor="check-6">Events</label>
                                                        </div>
                                                    </div>
                                                    {/* Buttons */}
                                                    <div className="panel-buttons">
                                                        <button className="panel-cancel">Cancel</button>
                                                        <button className="panel-apply">Apply</button>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* Panel Dropdown / End */}
                                            {/* Panel Dropdown */}
                                            <div className="panel-dropdown wide">
                                                <a href="#">More Filters</a>
                                                <div className="panel-dropdown-content checkboxes">
                                                    {/* Checkboxes */}
                                                    <div className="row">
                                                        <div className="col-md-6">
                                                            <input id="check-a" type="checkbox" name="check" />
                                                            <label htmlFor="check-a">Elevator in building</label>
                                                            <input id="check-b" type="checkbox" name="check" />
                                                            <label htmlFor="check-b">Friendly workspace</label>
                                                            <input id="check-c" type="checkbox" name="check" />
                                                            <label htmlFor="check-c">Instant Book</label>
                                                            <input id="check-d" type="checkbox" name="check" />
                                                            <label htmlFor="check-d">Wireless Internet</label>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <input id="check-e" type="checkbox" name="check" />
                                                            <label htmlFor="check-e">Free parking on premises</label>
                                                            <input id="check-f" type="checkbox" name="check" />
                                                            <label htmlFor="check-f">Free parking on street</label>
                                                            <input id="check-g" type="checkbox" name="check" />
                                                            <label htmlFor="check-g">Smoking allowed</label>
                                                            <input id="check-h" type="checkbox" name="check" />
                                                            <label htmlFor="check-h">Events</label>
                                                        </div>
                                                    </div>
                                                    {/* Buttons */}
                                                    <div className="panel-buttons">
                                                        <button className="panel-cancel">Cancel</button>
                                                        <button className="panel-apply">Apply</button>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* Panel Dropdown / End */}
                                            {/* Panel Dropdown */}
                                            <div className="panel-dropdown">
                                                <a href="#">Distance Radius</a>
                                                <div className="panel-dropdown-content">
                                                    <input className="distance-radius" type="range" min={1} max={100} step={1} defaultValue={50} data-title="Radius around selected destination" />
                                                    <div className="panel-buttons">
                                                        <button className="panel-cancel">Disable</button>
                                                        <button className="panel-apply">Apply</button>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* Panel Dropdown / End */}
                                        </div>
                                        {/* Filters / End */}
                                    </div>
                                    {/* Row With Forms / End */}
                                </div>
                            </div>
                        </section>
                        {/* Search / End */}
                        <section className="listings-container margin-top-30">
                            {/* Sorting / Layout Switcher */}
                            <div className="row fs-switcher">
                                <div className="col-md-6">
                                    {/* Showing Results */}
                                    <p className="showing-results">14 Results Found </p>
                                </div>
                            </div>
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
                                        <div className="col-md-12">
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

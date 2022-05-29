import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { history } from '../../App'
import './home.css'
import { layDanhSachViTri_1 } from '../../redux/Actions/ViTriActon'
import imgPopular from '../../assets/images/popular-location-01.jpg'
import imgPopular2 from '../../assets/images/popular-location-02.jpg'
import imgPopular3 from '../../assets/images/popular-location-03.jpg'
import imgPopular4 from '../../assets/images/popular-location-03.jpg'
import imgBaNaHill from '../../assets/images/banahill.jpg'
import imgCauRong from '../../assets/images/caurong.jpg'
import imgHoiAn from '../../assets/images/hoian.jpg'
import imgHaLong from '../../assets/images/halong.jpg'
import imgNhaTrang from '../../assets/images/nhatran.jpg'
export default function Home() {
    const dispatch = useDispatch();
    const { danhSachViTri } = useSelector(state => state.viTriReducer)
    const [ketQua, setKetQua] = useState(false)
    const [keyWord, setKeyword] = useState('')

    const renderDSViTri = () => {
        return danhSachViTri.map((viTri, index) => {
            return (
                <li key={viTri._id} onClick={() => { history.push(`/roomlist/${viTri._id}`) }} style={{cursor:'pointer'}}>
                    <i className="fa fa-map-marker" />
                    <span>{viTri.name}</span>
                </li>
            )
        })
    }
    const handleInput = async (event) => {
        let value = event.target.value;
        setKeyword(value)
        dispatch(layDanhSachViTri_1(value))
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        // dispatch(layDanhSachViTri_1(keyWord))
    }
    return (
        <div id="wrapper">
            {/* Banner
================================================== */}
            <div className="main-search-container dark-overlay">
                <div className="main-search-inner">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <h2>Tìm các địa điểm tham quan</h2>
                                <h4>Khám phá các điểm tham quan, hoạt động được xếp hạng hàng đầu và hơn thế nữa</h4>
                                <form onSubmit={handleSubmit}>
                                    <div className="main-search-input">
                                        <div className="main-search-input-item location">
                                            <div id="autocomplete-container">
                                                <input id="autocomplete-input" type="text" placeholder="Địa điểm" onChange={handleInput} />
                                            </div>
                                            <a href="#"><i className="fa fa-map-marker" /></a>
                                            <ul className={`main-search-input-result `} style={{
                                                display: danhSachViTri.length > 0 && keyWord !== '' ? 'block' : 'none'
                                            }}>
                                                {renderDSViTri()}
                                            </ul>
                                        </div>

                                        <button className="button" type="submit">Tìm kiếm</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Video */}
                <div className="video-container" style={{
                    backgroundImage: `url(${imgBaNaHill})`, 
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    }}>
                    
                </div>
            </div>
            {/* Content
================================================== */}
            <div className="container">
                <div className="row">
                    <div className="col-md-12 my-5 text-center" >
                        <h2 className="headline centered margin-top-75">
                           Danh mục
                        </h2>
                    </div>
                </div>
            </div>
            {/* Category Boxes */}
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="categories-boxes-container margin-top-5 margin-bottom-30">
                            {/* Box */}
                            <a href="listings-list-with-sidebar.html" className="category-small-box">
                            <i class="fa fa-hamburger"></i>
                                <h4> Ăn uống</h4>
                                <span className="category-box-counter">12</span>
                            </a>
                            {/* Box */}
                            <a href="listings-list-with-sidebar.html" className="category-small-box">
                            <i class="fa fa-hotel"></i>
                                <h4>Khách sạn</h4>
                                <span className="category-box-counter">32</span>
                            </a>
                            {/* Box */}
                            <a href="listings-list-with-sidebar.html" className="category-small-box">
                            <i class="fa fa-shopping-bag"></i>
                                <h4>Cửa hàng</h4>
                                <span className="category-box-counter">11</span>
                            </a>
                            {/* Box */}
                            <a href="listings-list-with-sidebar.html" className="category-small-box">
                            <i class="fa fa-cocktail"></i>
                                <h4>Khám phá</h4>
                                <span className="category-box-counter">15</span>
                            </a>
                            {/* Box */}
                            <a href="listings-list-with-sidebar.html" className="category-small-box">
                            <i class="fa fa-guitar"></i>
                                <h4>Sự kiện</h4>
                                <span className="category-box-counter">21</span>
                            </a>
                            {/* Box */}
                            <a href="listings-list-with-sidebar.html" className="category-small-box">
                            <i class="fa fa-dumbbell"></i>
                                <h4>Fitness</h4>
                                <span className="category-box-counter">28</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            {/* Category Boxes / End */}
            {/* Fullwidth Section */}
            <section style={{padding:'100px 0'}} className="fullwidth margin-top-65 padding-top-75 padding-bottom-70" data-background-color="#f8f8f8">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-12 text-center pb-5">
                            <h2 className="headline centered margin-bottom-45 ">
                               Các địa điểm ghé thăm nhiều nhất
                            </h2>
                                <span style={{fontSize:'20px'}}>Khám phá các địa điểm được xếp hạng cao </span>
                        </div>
                        <div className="col-md-12">
                            <div className="row">
                                 {/* Listing Item */}
                            <div className="col-sm-12 col-md-6 col-lg-3">
                                <div className="fw-carousel-item">
                                    <a href="listings-single-page.html" className="listing-item-container compact">
                                        <div className="listing-item">
                                            <img src={imgCauRong} />
                                            <div className="listing-item-details">
                                                <ul>
                                                    <li>Thành phố đáng sống ở Việt Nam</li>
                                                </ul>
                                            </div>
                                            <div className="listing-item-content">
                                                <div className="numerical-rating mid" data-rating="9" />
                                                <h3>Đà Nẵng</h3>
                                                <span>Cầu Rồng</span>
                                            </div>
                                            <span className="like-icon" />
                                        </div>
                                    </a>
                                </div>
                            </div>
                            {/* Listing Item / End */}
                            {/* Listing Item */}
                            <div className="col-sm-12 col-md-6 col-lg-3">
                                <div className="fw-carousel-item">
                                    <a href="listings-single-page.html" className="listing-item-container compact">
                                        <div className="listing-item">
                                            <img src={imgHoiAn} />
                                            <div className="listing-item-details">
                                                <ul>
                                                    <li>Di tích văn hóa thế giới</li>
                                                </ul>
                                            </div>
                                            <div className="listing-item-content">
                                                <div className="numerical-rating high" data-rating={9.0} />
                                                <h3>Hội An</h3>
                                                <span>Phố cổ Hội An</span>
                                            </div>
                                            <span className="like-icon" />
                                        </div>
                                    </a>
                                </div>

                            </div>
                            {/* Listing Item / End */}
                            {/* Listing Item */}
                            <div className="col-sm-12 col-md-6 col-lg-3">
                                <div className="fw-carousel-item">
                                    <a href="listings-single-page.html" className="listing-item-container compact">
                                        <div className="listing-item">
                                            <img src={imgHaLong} />
                                            <div className="listing-item-details">
                                                <ul>
                                                    <li>Di sản thiên nhiên thế giới</li>
                                                </ul>
                                            </div>
                                            <div className="listing-item-content">
                                                <div className="numerical-rating low" data-rating={10.0} />
                                                <h3>Thành phố Hạ Long</h3>
                                                <span>Vịnh Hạ Long</span>
                                            </div>
                                            <span className="like-icon" />
                                        </div>
                                    </a>
                                </div>

                            </div>
                            {/* Listing Item / End */}
                            {/* Listing Item */}
                            <div className="col-sm-12 col-md-6 col-lg-3">
                                <div className="fw-carousel-item">
                                    <a href="listings-single-page.html" className="listing-item-container compact">
                                        <div className="listing-item">
                                            <img src={imgNhaTrang} />
                                            <div className="listing-item-details">
                                                <ul>
                                                    <li>Những bãi biển đẹp nhất hành tinh</li>
                                                </ul>
                                            </div>
                                            <div className="listing-item-content">
                                                <div className="numerical-rating high" data-rating={9.0} />
                                                <h3>Nha Trang</h3>
                                                <span>Biển Nha Trang</span>
                                            </div>
                                            <span className="like-icon" />
                                        </div>
                                    </a>
                                </div>

                            </div>
                            {/* Listing Item / End */}
                            {/* Listing Item */}
                            </div>

                        </div>
                    </div>
                </div>
                {/* Carousel / Start */}

                {/* Carousel / End */}
            </section>
            {/* Fullwidth Section / End */}
            {/* Container */}
            <div className="container">
                <div className="row">
                    <div className="col-md-12 text-center">
                        <h2 className="headline centered margin-bottom-35 margin-top-70 ">Các thành phố nổi tiếng
                        </h2>
                        <span style={{fontSize: '20px'}}>Danh sách các địa điểm nổi tiếng</span>
                    </div>
                    <div className="col-md-4">
                        {/* Image Box */}
                        <div className="img-div">
                            <img  className="img-box" style={{ backgroundImage: `url(${imgPopular})` }}>
                            </img>
                                <div className="img-box-content visible">
                                    <h4>New York </h4>
                                    <span>14 địa điểm</span>
                                </div>

                        </div>
                    </div>
                    <div className="col-md-8">
                        <div className="img-div">
                            <img  className="img-box" style={{ backgroundImage: `url(${imgPopular2})` }}>
                            </img>
                                <div className="img-box-content visible">
                                    <h4>Los Angeles </h4>
                                    <span>24 địa điểm</span>
                                </div>

                        </div>
                    </div>
                    <div className="col-md-8">
                        {/* Image Box */}
                        <div className="img-div">
                            <img  className="img-box" style={{ backgroundImage: `url(${imgPopular3})` }}>
                            </img>
                                <div className="img-box-content visible">
                                    <h4>San Francisco  </h4>
                                    <span>12 địa điểm</span>
                                </div>

                        </div>
                    </div>
                    <div className="col-md-4">
                        {/* Image Box */}
                        <div className="img-div">
                            <img  className="img-box" style={{ backgroundImage: `url(${imgPopular4})` }}>
                            </img>
                                <div className="img-box-content visible">
                                    <h4>Miami</h4>
                                    <span>9 địa điểm</span>
                                </div>

                        </div>
                    </div>
                </div>
            </div>
            
        </div>

    )
}

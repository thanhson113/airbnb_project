import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { history } from '../../App'
import './home.css'
import { layDanhSachViTri } from '../../redux/Actions/ViTriActon'
export default function Home() {
    const dispatch = useDispatch();
    const { danhSachViTri } = useSelector(state => state.viTriReducer)
    const [ketQua, setKetQua] = useState(false)
    const [keyWord, setKeyword] = useState('')

    const renderDSViTri = () => {
        return danhSachViTri.map((viTri, index) => {
            return (
                <li key={viTri._id} onClick={() => { history.push(`/roomlist/${viTri._id}`) }}>
                    <i className="fa fa-map-marker" />
                    <span>{viTri.name}</span>
                </li>
            )
        })
    }
    const handleInput = async (event) => {
        let value = event.target.value;
        setKeyword(value)
        dispatch(layDanhSachViTri(value))
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(layDanhSachViTri(keyWord))
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
                                <h2>Find Nearby Attractions</h2>
                                <h4>Expolore top-rated attractions, activities and more</h4>
                                <form onSubmit={handleSubmit}>
                                    <div className="main-search-input">
                                        <div className="main-search-input-item location">
                                            <div id="autocomplete-container">
                                                <input id="autocomplete-input" type="text" placeholder="Location" onChange={handleInput} />
                                            </div>
                                            <a href="#"><i className="fa fa-map-marker" /></a>
                                            <ul className={`main-search-input-result `} style={{
                                                display: danhSachViTri.length > 0 && keyWord !== '' ? 'block' : 'none'
                                            }}>
                                                {renderDSViTri()}
                                            </ul>
                                        </div>

                                        <button className="button" type="submit">Search</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Video */}
                <div className="video-container">
                    <video poster="images/main-search-video-poster.jpg" loop autoPlay muted>
                        <source src="images/main-search-video.mp4" type="video/mp4" />
                    </video>
                </div>
            </div>
            {/* Content
================================================== */}
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h3 className="headline centered margin-top-75">
                            Browse Categories
                        </h3>
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
                                <i className="im im-icon-Hamburger" />
                                <h4>Eat &amp; Drink</h4>
                                <span className="category-box-counter">12</span>
                            </a>
                            {/* Box */}
                            <a href="listings-list-with-sidebar.html" className="category-small-box">
                                <i className="im  im-icon-Sleeping" />
                                <h4>Hotels</h4>
                                <span className="category-box-counter">32</span>
                            </a>
                            {/* Box */}
                            <a href="listings-list-with-sidebar.html" className="category-small-box">
                                <i className="im im-icon-Shopping-Bag" />
                                <h4>Shops</h4>
                                <span className="category-box-counter">11</span>
                            </a>
                            {/* Box */}
                            <a href="listings-list-with-sidebar.html" className="category-small-box">
                                <i className="im im-icon-Cocktail" />
                                <h4>Nightlife</h4>
                                <span className="category-box-counter">15</span>
                            </a>
                            {/* Box */}
                            <a href="listings-list-with-sidebar.html" className="category-small-box">
                                <i className="im im-icon-Electric-Guitar" />
                                <h4>Events</h4>
                                <span className="category-box-counter">21</span>
                            </a>
                            {/* Box */}
                            <a href="listings-list-with-sidebar.html" className="category-small-box">
                                <i className="im im-icon-Dumbbell" />
                                <h4>Fitness</h4>
                                <span className="category-box-counter">28</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            {/* Category Boxes / End */}
            {/* Fullwidth Section */}
            <section className="fullwidth margin-top-65 padding-top-75 padding-bottom-70" data-background-color="#f8f8f8">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-12">
                            <h3 className="headline centered margin-bottom-45">
                                Most Visited Places
                                <span>Discover top-rated local businesses</span>
                            </h3>
                        </div>
                        <div className="col-md-12">
                            {/* Listing Item */}
                            <div className="col-md-3">
                                <div className="fw-carousel-item">
                                    <a href="listings-single-page.html" className="listing-item-container compact">
                                        <div className="listing-item">
                                            <img src="images/listing-item-01.jpg" />
                                            <div className="listing-badge now-open">Now Open</div>
                                            <div className="listing-item-content">
                                                <div className="numerical-rating mid" data-rating="3.5" />
                                                <h3>Tom's Restaurant</h3>
                                                <span>964 School Street, New York</span>
                                            </div>
                                            <span className="like-icon" />
                                        </div>
                                    </a>
                                </div>
                            </div>
                            {/* Listing Item / End */}
                            {/* Listing Item */}
                            <div className="col-md-3">
                                <div className="fw-carousel-item">
                                    <a href="listings-single-page.html" className="listing-item-container compact">
                                        <div className="listing-item">
                                            <img src="images/listing-item-02.jpg" />
                                            <div className="listing-item-details">
                                                <ul>
                                                    <li>Friday, August 10</li>
                                                </ul>
                                            </div>
                                            <div className="listing-item-content">
                                                <div className="numerical-rating high" data-rating={5.0} />
                                                <h3>Sticky Band</h3>
                                                <span>Bishop Avenue, New York</span>
                                            </div>
                                            <span className="like-icon" />
                                        </div>
                                    </a>
                                </div>

                            </div>
                            {/* Listing Item / End */}
                            {/* Listing Item */}
                            <div className="col-md-3">
                                <div className="fw-carousel-item">
                                    <a href="listings-single-page.html" className="listing-item-container compact">
                                        <div className="listing-item">
                                            <img src="images/listing-item-03.jpg" />
                                            <div className="listing-item-details">
                                                <ul>
                                                    <li>Starting from $59 per night</li>
                                                </ul>
                                            </div>
                                            <div className="listing-item-content">
                                                <div className="numerical-rating low" data-rating={2.0} />
                                                <h3>Hotel Govendor</h3>
                                                <span>778 Country Street, New York</span>
                                            </div>
                                            <span className="like-icon" />
                                        </div>
                                    </a>
                                </div>

                            </div>
                            {/* Listing Item / End */}
                            {/* Listing Item */}
                            <div className="col-md-3">
                                <div className="fw-carousel-item">
                                    <a href="listings-single-page.html" className="listing-item-container compact">
                                        <div className="listing-item">
                                            <img src="images/listing-item-04.jpg" />
                                            <div className="listing-badge now-open">Now Open</div>
                                            <div className="listing-item-content">
                                                <div className="numerical-rating high" data-rating={5.0} />
                                                <h3>Burger House</h3>
                                                <span>2726 Shinn Street, New York</span>
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
                {/* Carousel / Start */}

                {/* Carousel / End */}
            </section>
            {/* Fullwidth Section / End */}
            {/* Container */}
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h3 className="headline centered margin-bottom-35 margin-top-70">Popular Cities <span>Browse listings in popular places</span></h3>
                    </div>
                    <div className="col-md-4">
                        {/* Image Box */}
                        <div className="img-div">
                            <img  className="img-box" style={{ backgroundImage: 'url("images/popular-location-01.jpg")' }}>
                            </img>
                                <div className="img-box-content visible">
                                    <h4>New York </h4>
                                    <span>14 Listings</span>
                                </div>

                        </div>
                    </div>
                    <div className="col-md-8">
                        <div className="img-div">
                            <img  className="img-box" style={{ backgroundImage: 'url("images/popular-location-02.jpg")'}}>
                            </img>
                                <div className="img-box-content visible">
                                    <h4>Los Angeles </h4>
                                    <span>24 Listings</span>
                                </div>

                        </div>
                    </div>
                    <div className="col-md-8">
                        {/* Image Box */}
                        <div className="img-div">
                            <img  className="img-box" style={{ backgroundImage: 'url("images/popular-location-03.jpg")' }}>
                            </img>
                                <div className="img-box-content visible">
                                    <h4>San Francisco  </h4>
                                    <span>12 Listings</span>
                                </div>

                        </div>
                    </div>
                    <div className="col-md-4">
                        {/* Image Box */}
                        <div className="img-div">
                            <img  className="img-box" style={{ backgroundImage: 'url("images/popular-location-04.jpg")' }}>
                            </img>
                                <div className="img-box-content visible">
                                    <h4>Miami</h4>
                                    <span>9 Listings</span>
                                </div>

                        </div>
                    </div>
                </div>
            </div>
            {/* Container / End */}
            {/* Flip banner */}
            <a href="" className="flip-banner parallax margin-top-65" style={{backgroundImage:'url("images/slider-bg-02.jpg")'}} >
            <div className="parallax-overlay" style={{backgroundColor: 'rgb(249, 25, 66)', opacity: 0.85}}></div>
                <div className="flip-banner-content">
                    <h2 className="flip-visible">Expolore top-rated attractions nearby</h2>
                    <h2 className="flip-hidden">Browse Listings <i className="sl sl-icon-arrow-right" /></h2>
                </div>
            </a>
        </div>

    )
}

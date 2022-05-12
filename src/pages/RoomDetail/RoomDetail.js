import React from 'react'
import { NavLink } from 'react-router-dom'
export default function RoomDetail() {
  return (
    <div >
      {/* Header Container
================================================== */}
      {/* Gradient*/}
      <div className="single-listing-page-titlebar" />
      {/* Content
================================================== */}
      <div className="container">
        <div className="row sticky-wrapper">
          <div className="col-lg-8 col-md-8 padding-right-30">
            {/* Titlebar */}
            <div id="titlebar" className="listing-titlebar">
              <div className="listing-titlebar-title">
                <h2>Sunny and Modern Apartment<span className="listing-tag">Apartments</span></h2>
                <span>
                  <a href="#listing-location" className="listing-address">
                    <i className="fa fa-map-marker" />
                    2726 Shinn Street, New York
                  </a>
                </span>
                <div className="star-rating" data-rating={5}>
                  <div className="rating-counter"><a href="#listing-reviews">(31 reviews)</a></div>
                </div>
              </div>
            </div>
            {/* Listing Nav */}
            <div id="listing-nav" className="listing-nav-container">
              <ul className="listing-nav">
                <li><a href="#listing-overview" className="active">Overview</a></li>
                <li><a href="#listing-gallery">Gallery</a></li>
                <li><a href="#listing-location">Location</a></li>
                <li><a href="#listing-reviews">Reviews</a></li>
                <li><a href="#add-review">Add Review</a></li>
              </ul>
            </div>
            {/* Overview */}
            <div id="listing-overview" className="listing-section">
              {/* Apartment Description */}
              <ul className="apartment-details">
                <li>2 rooms</li>
                <li>1 bedroom</li>
                <li>1 bed</li>
                <li>1 bathroom</li>
              </ul>
              {/* Description */}
              <p>
                Ut euismod ultricies sollicitudin. Curabitur sed dapibus nulla. Nulla eget iaculis lectus. Mauris ac maximus neque. Nam in mauris quis libero sodales eleifend. Morbi varius, nulla sit amet rutrum elementum, est elit finibus tellus, ut tristique elit risus at metus.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas in pulvinar neque. Nulla finibus lobortis pulvinar. Donec a consectetur nulla. Nulla posuere sapien vitae lectus suscipit, et pulvinar nisi tincidunt. Aliquam erat volutpat. Curabitur convallis fringilla diam sed aliquam. Sed tempor iaculis massa faucibus feugiat. In fermentum facilisis massa, a consequat purus viverra.
              </p>
              {/* Listing Contacts */}
              <div className="listing-links-container">
                <ul className="listing-links contact-links">
                  <li><a href="tel:12-345-678" className="listing-links"><i className="fa fa-phone" /> +12 345 6578</a></li>
                  <li><a href="mailto:mail@example.com" className="listing-links"><i className="fa fa-envelope-o" /> mail@example.com</a>
                  </li>
                  <li><a href="#" target="_blank" className="listing-links"><i className="fa fa-link" /> www.example.com</a></li>
                </ul>
                <div className="clearfix" />
                <ul className="listing-links">
                  <li><a href="#" target="_blank" className="listing-links-fb"><i className="fa fa-facebook-square" /> Facebook</a></li>
                  <li><a href="#" target="_blank" className="listing-links-yt"><i className="fa fa-youtube-play" /> YouTube</a></li>
                  <li><a href="#" target="_blank" className="listing-links-ig"><i className="fa fa-instagram" /> Instagram</a></li>
                  <li><a href="#" target="_blank" className="listing-links-tt"><i className="fa fa-twitter" /> Twitter</a></li>
                </ul>
                <div className="clearfix" />
              </div>
              <div className="clearfix" />
              {/* Amenities */}
              <h3 className="listing-desc-headline">Amenities</h3>
              <ul className="listing-features checkboxes">
                <li>Elevator in building</li>
                <li>Friendly workspace</li>
                <li>Instant Book</li>
                <li>Wireless Internet</li>
                <li>Free parking on premises</li>
                <li>Free parking on street</li>
              </ul>
            </div>
            {/* Slider */}
            <div id="listing-gallery" className="listing-section">
              <h3 className="listing-desc-headline margin-top-70">Gallery</h3>
              <div className="listing-slider-small mfp-gallery-container margin-bottom-0">
                <a href="images/single-listing-02a.jpg" data-background-image="images/single-listing-02a.jpg" className="item mfp-gallery" title="Title 2" />
                <a href="images/single-listing-01a.jpg" data-background-image="images/single-listing-01a.jpg" className="item mfp-gallery" title="Title 1" />
                <a href="images/single-listing-03a.jpg" data-background-image="images/single-listing-03a.jpg" className="item mfp-gallery" title="Title 3" />
                <a href="images/single-listing-04a.jpg" data-background-image="images/single-listing-04a.jpg" className="item mfp-gallery" title="Title 3" />
              </div>
            </div>
            {/* Location */}
            <div id="listing-location" className="listing-section">
              <h3 className="listing-desc-headline margin-top-60 margin-bottom-30">Location</h3>
              <div id="singleListingMap-container">
                <div id="singleListingMap" data-latitude="40.70437865245596" data-longitude="-73.98674011230469" data-map-icon="im im-icon-Hamburger" />
                <a href="#" id="streetView">Street View</a>
              </div>
            </div>
            {/* Reviews */}
            <div id="listing-reviews" className="listing-section">
              <h3 className="listing-desc-headline margin-top-75 margin-bottom-20">Reviews <span>(12)</span></h3>
              {/* Rating Overview */}
              <div className="rating-overview">
                <div className="rating-overview-box">
                  <span className="rating-overview-box-total">4.7</span>
                  <span className="rating-overview-box-percent">out of 5.0</span>
                  <div className="star-rating" data-rating={5} />
                </div>
                <div className="rating-bars">
                  <div className="rating-bars-item">
                    <span className="rating-bars-name">Service <i className="tip" data-tip-content="Quality of customer service and attitude to work with you" /></span>
                    <span className="rating-bars-inner">
                      <span className="rating-bars-rating" data-rating="4.7">
                        <span className="rating-bars-rating-inner" />
                      </span>
                      <strong>4.7</strong>
                    </span>
                  </div>
                  <div className="rating-bars-item">
                    <span className="rating-bars-name">Value for Money <i className="tip" data-tip-content="Overall experience received for the amount spent" /></span>
                    <span className="rating-bars-inner">
                      <span className="rating-bars-rating" data-rating="3.8">
                        <span className="rating-bars-rating-inner" />
                      </span>
                      <strong>3.8</strong>
                    </span>
                  </div>
                  <div className="rating-bars-item">
                    <span className="rating-bars-name">Location <i className="tip" data-tip-content="Visibility, commute or nearby parking spots" /></span>
                    <span className="rating-bars-inner">
                      <span className="rating-bars-rating" data-rating="2.7">
                        <span className="rating-bars-rating-inner" />
                      </span>
                      <strong>2.7</strong>
                    </span>
                  </div>
                  <div className="rating-bars-item">
                    <span className="rating-bars-name">Cleanliness <i className="tip" data-tip-content="The physical condition of the business" /></span>
                    <span className="rating-bars-inner">
                      <span className="rating-bars-rating" data-rating={5.0}>
                        <span className="rating-bars-rating-inner" />
                      </span>
                      <strong>5.0</strong>
                    </span>
                  </div>
                </div>
              </div>
              {/* Rating Overview / End */}
              <div className="clearfix" />
              {/* Reviews */}
              <section className="comments listing-reviews">
                <ul>
                  <li>
                    <div className="avatar"><img src="http://www.gravatar.com/avatar/00000000000000000000000000000000?d=mm&s=70"  /></div>
                    <div className="comment-content"><div className="arrow-comment" />
                      <div className="comment-by">Kathy Brown <i className="tip" data-tip-content="Person who left this review actually was a customer" /> <span className="date">June 2019</span>
                        <div className="star-rating" data-rating={5} />
                      </div>
                      <p>Morbi velit eros, sagittis in facilisis non, rhoncus et erat. Nam posuere tristique sem, eu ultricies tortor imperdiet vitae. Curabitur lacinia neque non metus</p>
                      <a href="#" className="rate-review"><i className="sl sl-icon-like" /> Helpful Review <span>12</span></a>
                    </div>
                  </li>
                  <li>
                    <div className="avatar"><img src="http://www.gravatar.com/avatar/00000000000000000000000000000000?d=mm&s=70"  /> </div>
                    <div className="comment-content"><div className="arrow-comment" />
                      <div className="comment-by">John Doe<span className="date">May 2019</span>
                        <div className="star-rating" data-rating={4} />
                      </div>
                      <p>Commodo est luctus eget. Proin in nunc laoreet justo volutpat blandit enim. Sem felis, ullamcorper vel aliquam non, varius eget justo. Duis quis nunc tellus sollicitudin mauris.</p>
                      <a href="#" className="rate-review"><i className="sl sl-icon-like" /> Helpful Review <span>2</span></a>
                    </div>
                  </li>
                  <li>
                    <div className="avatar"><img src="http://www.gravatar.com/avatar/00000000000000000000000000000000?d=mm&s=70"  /> </div>
                    <div className="comment-content"><div className="arrow-comment" />
                      <div className="comment-by">John Doe<span className="date">May 2019</span>
                        <div className="star-rating" data-rating={5} />
                      </div>
                      <p>Commodo est luctus eget. Proin in nunc laoreet justo volutpat blandit enim. Sem felis, ullamcorper vel aliquam non, varius eget justo. Duis quis nunc tellus sollicitudin mauris.</p>
                      <a href="#" className="rate-review"><i className="sl sl-icon-like" /> Helpful Review</a>
                    </div>
                  </li>
                </ul>
              </section>
              {/* Pagination */}
              <div className="clearfix" />
              <div className="row">
                <div className="col-md-12">
                  {/* Pagination */}
                  <div className="pagination-container margin-top-30">
                    <nav className="pagination">
                      <ul>
                        <li><a href="#" className="current-page">1</a></li>
                        <li><a href="#">2</a></li>
                        <li><a href="#"><i className="sl sl-icon-arrow-right" /></a></li>
                      </ul>
                    </nav>
                  </div>
                </div>
              </div>
              <div className="clearfix" />
              {/* Pagination / End */}
            </div>
            {/* Add Review Box */}
            <div id="add-review" className="add-review-box">
              {/* Add Review */}
              <h3 className="listing-desc-headline margin-bottom-10">Add Review</h3>
              <p className="comment-notes">Your email address will not be published.</p>
              {/* Subratings Container */}
              <div className="sub-ratings-container">
                {/* Subrating #1 */}
                <div className="add-sub-rating">
                  <div className="sub-rating-title">Service <i className="tip" data-tip-content="Quality of customer service and attitude to work with you" /></div>
                  <div className="sub-rating-stars">
                    {/* Leave Rating */}
                    <div className="clearfix" />
                    <form className="leave-rating">
                      <input type="radio" name="rating" id="rating-1" defaultValue={1} />
                      <label htmlFor="rating-1" className="fa fa-star" />
                      <input type="radio" name="rating" id="rating-2" defaultValue={2} />
                      <label htmlFor="rating-2" className="fa fa-star" />
                      <input type="radio" name="rating" id="rating-3" defaultValue={3} />
                      <label htmlFor="rating-3" className="fa fa-star" />
                      <input type="radio" name="rating" id="rating-4" defaultValue={4} />
                      <label htmlFor="rating-4" className="fa fa-star" />
                      <input type="radio" name="rating" id="rating-5" defaultValue={5} />
                      <label htmlFor="rating-5" className="fa fa-star" />
                    </form>
                  </div>
                </div>
                {/* Subrating #2 */}
                <div className="add-sub-rating">
                  <div className="sub-rating-title">Value for Money <i className="tip" data-tip-content="Overall experience received for the amount spent" /></div>
                  <div className="sub-rating-stars">
                    {/* Leave Rating */}
                    <div className="clearfix" />
                    <form className="leave-rating">
                      <input type="radio" name="rating" id="rating-11" defaultValue={1} />
                      <label htmlFor="rating-11" className="fa fa-star" />
                      <input type="radio" name="rating" id="rating-12" defaultValue={2} />
                      <label htmlFor="rating-12" className="fa fa-star" />
                      <input type="radio" name="rating" id="rating-13" defaultValue={3} />
                      <label htmlFor="rating-13" className="fa fa-star" />
                      <input type="radio" name="rating" id="rating-14" defaultValue={4} />
                      <label htmlFor="rating-14" className="fa fa-star" />
                      <input type="radio" name="rating" id="rating-15" defaultValue={5} />
                      <label htmlFor="rating-15" className="fa fa-star" />
                    </form>
                  </div>
                </div>
                {/* Subrating #3 */}
                <div className="add-sub-rating">
                  <div className="sub-rating-title">Location <i className="tip" data-tip-content="Visibility, commute or nearby parking spots" /></div>
                  <div className="sub-rating-stars">
                    {/* Leave Rating */}
                    <div className="clearfix" />
                    <form className="leave-rating">
                      <input type="radio" name="rating" id="rating-21" defaultValue={1} />
                      <label htmlFor="rating-21" className="fa fa-star" />
                      <input type="radio" name="rating" id="rating-22" defaultValue={2} />
                      <label htmlFor="rating-22" className="fa fa-star" />
                      <input type="radio" name="rating" id="rating-23" defaultValue={3} />
                      <label htmlFor="rating-23" className="fa fa-star" />
                      <input type="radio" name="rating" id="rating-24" defaultValue={4} />
                      <label htmlFor="rating-24" className="fa fa-star" />
                      <input type="radio" name="rating" id="rating-25" defaultValue={5} />
                      <label htmlFor="rating-25" className="fa fa-star" />
                    </form>
                  </div>
                </div>
                {/* Subrating #4 */}
                <div className="add-sub-rating">
                  <div className="sub-rating-title">Cleanliness <i className="tip" data-tip-content="The physical condition of the business" /></div>
                  <div className="sub-rating-stars">
                    {/* Leave Rating */}
                    <div className="clearfix" />
                    <form className="leave-rating">
                      <input type="radio" name="rating" id="rating-31" defaultValue={1} />
                      <label htmlFor="rating-31" className="fa fa-star" />
                      <input type="radio" name="rating" id="rating-32" defaultValue={2} />
                      <label htmlFor="rating-32" className="fa fa-star" />
                      <input type="radio" name="rating" id="rating-33" defaultValue={3} />
                      <label htmlFor="rating-33" className="fa fa-star" />
                      <input type="radio" name="rating" id="rating-34" defaultValue={4} />
                      <label htmlFor="rating-34" className="fa fa-star" />
                      <input type="radio" name="rating" id="rating-35" defaultValue={5} />
                      <label htmlFor="rating-35" className="fa fa-star" />
                    </form>
                  </div>
                </div>
                {/* Uplaod Photos */}
                <div className="uploadButton margin-top-15">
                  <input className="uploadButton-input" type="file" name="attachments[]" accept="image/*, application/pdf" id="upload" multiple />
                  <label className="uploadButton-button ripple-effect" htmlFor="upload">Add Photos</label>
                  <span className="uploadButton-file-name" />
                </div>
                {/* Uplaod Photos / End */}
              </div>
              {/* Subratings Container / End */}
              {/* Review Comment */}
              <form id="add-comment" className="add-comment">
                <fieldset>
                  <div className="row">
                    <div className="col-md-6">
                      <label>Name:</label>
                      <input type="text" defaultValue />
                    </div>
                    <div className="col-md-6">
                      <label>Email:</label>
                      <input type="text" defaultValue />
                    </div>
                  </div>
                  <div>
                    <label>Review:</label>
                    <textarea cols={40} rows={3} defaultValue={""} />
                  </div>
                </fieldset>
                <button className="button">Submit Review</button>
                <div className="clearfix" />
              </form>
            </div>
            {/* Add Review Box / End */}
          </div>
          {/* Sidebar
		================================================== */}
          <div className="col-lg-4 col-md-4 margin-top-75 sticky">
            {/* Verified Badge */}
            <div className="verified-badge with-tip" data-tip-content="Listing has been verified and belongs the business owner or manager.">
              <i className="sl sl-icon-check" /> Verified Listing
            </div>
            {/* Book Now */}
            <div id="booking-widget-anchor" className="boxed-widget booking-widget margin-top-35">
              <h3><i className="fa fa-calendar-check-o " /> Booking</h3>
              <div className="row with-forms  margin-top-0">
                {/* Date Range Picker - docs: http://www.daterangepicker.com/ */}
                <div className="col-lg-12">
                  <input type="text" id="date-picker" placeholder="Date" readOnly="readonly" />
                </div>
                {/* Panel Dropdown */}
                <div className="col-lg-12">
                  <div className="panel-dropdown">
                    <a href="#">Guests <span className="qtyTotal" name="qtyTotal">1</span></a>
                    <div className="panel-dropdown-content">
                      {/* Quantity Buttons */}
                      <div className="qtyButtons">
                        <div className="qtyTitle">Adults</div>
                        <input type="text" name="qtyInput" defaultValue={1} />
                      </div>
                      <div className="qtyButtons">
                        <div className="qtyTitle">Childrens</div>
                        <input type="text" name="qtyInput" defaultValue={0} />
                      </div>
                    </div>
                  </div>
                </div>
                {/* Panel Dropdown / End */}
              </div>
              {/* Book Now */}
              <NavLink to="/booking" className="button book-now fullwidth margin-top-5">Request To Book</NavLink>
              {/* Estimated Cost */}
              {/* 				<div class="booking-estimated-cost">
					<strong>Total Cost</strong>
					<span>$49</span>
				</div> */}
            </div>
            {/* Book Now / End */}
            {/* Contact */}
            <div className="boxed-widget margin-top-35">
              <div className="hosted-by-title">
                <h4><span>Hosted by</span> <a href="pages-user-profile.html">Tom Perrin</a></h4>
                <a href="pages-user-profile.html" className="hosted-by-avatar"><img src="images/dashboard-avatar.jpg"  /></a>
              </div>
              <ul className="listing-details-sidebar">
                <li><i className="sl sl-icon-phone" /> (123) 123-456</li>
                {/* <li><i class="sl sl-icon-globe"></i> <a href="#">http://example.com</a></li> */}
                <li><i className="fa fa-envelope-o" /> <a href="#">tom@example.com</a></li>
              </ul>
              <ul className="listing-details-sidebar social-profiles">
                <li><a href="#" className="facebook-profile"><i className="fa fa-facebook-square" /> Facebook</a></li>
                <li><a href="#" className="twitter-profile"><i className="fa fa-twitter" /> Twitter</a></li>
                {/* <li><a href="#" class="gplus-profile"><i class="fa fa-google-plus"></i> Google Plus</a></li> */}
              </ul>
              {/* Reply to review popup */}
              <div id="small-dialog" className="zoom-anim-dialog mfp-hide">
                <div className="small-dialog-header">
                  <h3>Send Message</h3>
                </div>
                <div className="message-reply margin-top-0">
                  <textarea cols={40} rows={3} placeholder="Your message to Tom" defaultValue={""} />
                  <button className="button">Send Message</button>
                </div>
              </div>
              <a href="#small-dialog" className="send-message-to-owner button popup-with-zoom-anim"><i className="sl sl-icon-envelope-open" /> Send Message</a>
            </div>
            {/* Contact / End*/}
            {/* Share / Like */}
            <div className="listing-share margin-top-40 margin-bottom-40 no-border">
              <button className="like-button"><span className="like-icon" /> Bookmark this listing</button>
              <span>159 people bookmarked this place</span>
              {/* Share Buttons */}
              <ul className="share-buttons margin-top-40 margin-bottom-0">
                <li><a className="fb-share" href="#"><i className="fa fa-facebook" /> Share</a></li>
                <li><a className="twitter-share" href="#"><i className="fa fa-twitter" /> Tweet</a></li>
                <li><a className="gplus-share" href="#"><i className="fa fa-google-plus" /> Share</a></li>
                {/* <li><a class="pinterest-share" href="#"><i class="fa fa-pinterest-p"></i> Pin</a></li> */}
              </ul>
              <div className="clearfix" />
            </div>
          </div>
          {/* Sidebar / End */}
        </div>
      </div>
      {/* Footer
================================================== */}
      {/* Back To Top Button */}
      <div id="backtotop"><a href="#" /></div>
      {/* Booking Sticky Footer */}
      <div className="booking-sticky-footer">
        <div className="container">
          <div className="bsf-left">
            <h4>Starting from $29</h4>
            <div className="star-rating" data-rating={5}>
              <div className="rating-counter" />
            </div>
          </div>
          <div className="bsf-right">
            <a href="#booking-widget-anchor" className="button">Book Now</a>
          </div>
        </div>
      </div>
    </div>

  )
}

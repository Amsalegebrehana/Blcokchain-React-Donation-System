import React from 'react';

function Contact(props) {
    return (
        <div>
        <div>
  <section className="banner-area">
    <div className="container">
      <div className="row banner-content">
        <div className="col-lg-12 d-flex align-items-center justify-content-between">
          <div className="left-part">
            <h1>
              Contact Us
            </h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore
              magna aliqua.
            </p>
          </div>
          <div className="right-part">
            <a href="index.html">home</a>
            <span className="fa fa-caret-right" />
            <a href="/contact">contact</a>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* End banner Area */}
  {/* Start contact-page Area */}
  <section className="contact-page-area section-gap">
    <div className="container">
      <div className="row">
        <div className="map-wrap" style={{width: '100%', height: 445}} id="map" />
        <div className="col-lg-4 d-flex flex-column address-wrap">
          <div className="single-contact-address d-flex flex-row">
            <div className="icon">
              <span className="lnr lnr-home" />
            </div>
            <div className="contact-details">
              <h5>Dhaka, Bangladesh</h5>
              <p>56/8, West Panthapath</p>
            </div>
          </div>
          <div className="single-contact-address d-flex flex-row">
            <div className="icon">
              <span className="lnr lnr-phone-handset" />
            </div>
            <div className="contact-details">
              <h5>00 (880) 9865 562</h5>
              <p>Mon to Fri 9am to 6 pm</p>
            </div>
          </div>
          <div className="single-contact-address d-flex flex-row">
            <div className="icon">
              <span className="lnr lnr-envelope" />
            </div>
            <div className="contact-details">
              <h5>support@codethemes.com</h5>
              <p>Send us your query anytime!</p>
            </div>
          </div>
        </div>
        <div className="col-lg-8">
          <form className="form-area " id="myForm" action="mail.php" method="post">
            <div className="row">
              <div className="col-lg-6 form-group">
                <input name="name" placeholder="Enter your name" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Enter your name'" className="common-input mb-20 form-control" required type="text" />
                <input name="email" placeholder="Enter email address" pattern="[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{1,63}$" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Enter email address'" className="common-input mb-20 form-control" required type="email" />
                <input name="subject" placeholder="Enter your subject" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Enter your subject'" className="common-input mb-20 form-control" required type="text" />
              </div>
              <div className="col-lg-6 form-group">
                <textarea className="common-textarea form-control" name="message" placeholder="Messege" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Messege'" required defaultValue={""} />
              </div>
              <div className="col-lg-12 d-flex justify-content-between">
                <div className="alert-msg" style={{textAlign: 'left'}} />
                <button className="primary-btn" style={{float: 'right'}}>Send Message</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</div>


        </div>
    );
}

export default Contact;
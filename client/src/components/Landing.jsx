import React from 'react';

function Landing(props) {
    return (
        <div className=''>
            	<section className="home-banner-area">
  <div className="container">
    <div className="row fullscreen d-flex align-items-center justify-content-between ">
      <div className="home-banner-content col-lg-6 col-md-6 mt-5">
        <h1 className='mt-5 pt-4'>
          Help those <br /> in need 
        </h1>
        {/* <h3>{this.props.content}</h3> */}
        <p>With a gift through Us, you can help the needed. You can help 
          provide shelter to internally displaced families. You can help build the image of Ethiopia. This all starts with you!</p>
        <div className="download-button d-flex flex-row justify-content-start">
          <div className="buttons flex-row d-flex">
            <i className="fa fa-help" aria-hidden="true" />
            <div className="desc">
              <a href="/charities">
                <p>
                  <span>Donate</span> <br />
                  Here
                </p>
              </a>
            </div>
          </div>
          <div className="buttons dark flex-row d-flex">
            <i className="fa fa-donate" aria-hidden="true" />
            <div className="desc">
              <a href="/charity">
                <p>
                  <span>Charity</span> <br />
                  in need
                </p>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="banner-img col-lg-4 col-md-6">
        <img className="img-fluid" src="img/banner-img.jpg" alt />
      </div>
    </div>
  </div>
</section>

	{/* End banner Area */}
{/* Start fact Area */}
<section className="fact-area">
  <div className="container">
    <div className="fact-box">
      <div className="row align-items-center">
        <div className="col single-fact">
          <h2>2</h2>
          <p>Charities</p>
        </div>
        <div className="col single-fact">
          <h2>0</h2>
          <p>Times Donated</p>
        </div>
        <div className="col single-fact">
          <h2>5</h2>
          <p>Daily Visitors</p>
        </div>
        <div className="col single-fact">
          <h2>0.02%</h2>
          <p>Donation  Rate</p>
        </div>
        <div className="col single-fact">
          <h2>1K+</h2>
          <p>Total donation needed </p>
        </div>
      </div>
    </div>
  </div>
</section>

        </div>
    );
}

export default Landing;
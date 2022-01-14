import React from 'react';

function Charities(props) {
        const  charities=[
        {
            id: 1,
            name : "Charity One",
            date : "2021-12-12",
            amountReceived : 24,

        },
        {
            id: 1,
            name : "Charity Two",
            date : "2021-12-12",
            amountReceived : 56,

        }

    ];
    return (
        <div>
            <div>
  <section className="banner-area">
    <div className="container">
      <div className="row banner-content">
        <div className="col-lg-12 d-flex align-items-center justify-content-between">
          <div className="left-part">
            <h1>
              Charities
            </h1>
            <p>
              Help Now For a Better Tomorrow
              <br />	Your people are counting on you once again. Support them, give them hope.
            </p>
          </div>
          <div className="right-part">
            <a href="index.html">home</a>
            <span className="fa fa-caret-right" />
            <a href="elements.html">elements</a>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* End banner Area */}
  {/* Start Sample Area */}
  <div className="whole-wrap">
    <div className="container">
  
          
   
      <div className="section-top-border">
        <h3 className="mb-30">Charities</h3>
        <div className="progress-table-wrap">
          <div className="progress-table">
            <div className="table-head">
              <div className="serial">#</div>
              <div className="country">Charties</div>
              <div className="visit">Amount Recived</div>
              <div className="percentage">Percentage</div>
            </div>

            {charities.map((chartiy, index) => {
                return<> 
               <a href="/donate">
                <div className="table-row">
                <div className="serial">0{index+1}</div>
                <div className="country"> {chartiy.name}</div>
                <div className="visit">{chartiy.amountReceived}</div>
                <div className="percentage">
                  <div className="progress">
                    <div className={`progress-bar color-${index+1}`} role="progressbar" style={{width: `${Math.random()*100}%`}} aria-valuenow={20} aria-valuemin={0} aria-valuemax={100} />
                  </div>
                </div>
              </div>
              </a>
              </>
            })}

       
    
          </div>
        </div>
      </div>
      
						
    </div>
  </div>
</div>

        </div>
    );
}

export default Charities;
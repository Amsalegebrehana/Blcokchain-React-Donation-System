import React, {useState} from 'react';
import {Button, Form, FloatingLabel} from 'react-bootstrap'
import {  useNavigate } from "react-router-dom";

function Donate(props) {
    // how to add the amount recieved on the existing one
    // const donors = [
    //     {name:this.value.name,
    //     date:this.value.date,
    //     amountReceived: this.value.amountReceived
    // }

    const navigate = useNavigate();
    
    const [donatorName, setdonatorName] = useState('');
    const [donatorAmount, setdonatorAmount] = useState('0');


    const changeNameHandler = (e) => {
        setdonatorName(e.currentTarget.value);
    }
    
    const changeAmountHandler = (e) => {
        setdonatorAmount(e.currentTarget.value);
    }
    
    const submitForm = (e) => {
        e.preventDefault();

        if(donatorName.trim() === '') {
        return alert('Name is required!');
        }

    
        if(donatorAmount.trim() === '0') {
        return alert('Amount is required!');
        }
    
        const donator= {
          name: donatorName,
        amountDonated: donatorAmount,
        }
    
        console.log(donator);


        
        navigate(`/charities?${donatorAmount}`);
            
    }
 
    // ]
    return (
            //   <div className="container mt-5 p-5 ms-5 me-5">
            
           <section className="contact-page-area section-gap">
               <h2>Donate to HC</h2>
  <div className="container">
   
      {/* <div className="map-wrap" style={{width: '100%', height: 15}} id="map" /> */}
      {/* <div className="col-lg-8 ml-5"> */}
          <div className="row flex m-5">
              <div className="col-6">
                  <p>Help those children all the five principles to help 
                     take interest in national affairs and also create attachment so as to enable them 
                     to attain their part as a citizen.  Besides, it helps to establish tools that would link 
                     more effectively remittances with the development of local communities involving the 
                     diaspora in this effort. Through Eyezon, we empower nonprofit organizations to unlock 
                     the generosity of their supporters and help them advance what they stand for. 
</p>
        <form className="form-area w-75 " id="myForm"  onSubmit={submitForm}>
            <div className="form-group">
              <input name="name" placeholder="Enter your name" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Enter your name'" className="common-input mb-20 form-control" required type="text" value={donatorName} onChange={changeNameHandler}/>
              <input name="number" placeholder="Enter Amount to Donate"  onfocus="this.placeholder = ''" onblur="this.placeholder = 'Enter amount to Donate'" className="common-input mb-20 form-control" required type="number" value={donatorAmount} onChange={changeAmountHandler} />
              <div className="alert-msg" style={{textAlign: 'left'}} />
              <button className="primary-btn" style={{float: 'left'}}>Donate</button>
           
            </div>
            </form> 
            </div>
            
           
              <div className="col-6 form-group">
                <img src="img/banner-img.jpg" width="60%" height="90%" alt="" />
              {/* <textarea className="common-textarea form-control" name="message" placeholder="Messege" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Messege'" required defaultValue={""} /> */}
            </div>
    
          </div>
      </div>
 
  {/* </div> */}
</section>



    );
}

export default Donate;
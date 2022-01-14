
import React, {useState} from 'react';
import {Button, Form, FloatingLabel} from 'react-bootstrap'
import {  useNavigate } from "react-router-dom";

function Charity(props) {
    

    const navigate = useNavigate();
    
    const [charityName, setcharityName] = useState('');
    const [RecievedAmount, setRecievedAmount] = useState('0');
    const [description , setDescription] = useState('');


    const changeNameHandler = (e) => {
        setcharityName(e.currentTarget.value);
    }
    
    const changeAmountHandler = (e) => {
        setRecievedAmount(e.currentTarget.value);
    }
    const changeDescriptionHandler = (e) =>{
      setDescription(e.currentTarget.value);
    }
    const submitForm = (e) => {
        e.preventDefault();

        if(charityName.trim() === '') {
        return alert('Name is required!');
        }

    
        if(RecievedAmount.trim() === '0') {
        return alert('Amount is required!');
        }
    
        const donator= {
          name: charityName,
        amountDonated: RecievedAmount,
        description:description
        }
    
        console.log(donator);

        
        navigate('/');
            
    }
 
 

 
    // ]
    return (
            //   <div className="container mt-5 p-5 ms-5 me-5">
            //     <div className="row">
    
            //     </div>
            // <Form onSubmit={submitForm}>
            
            // <Form.Group className="mb-3" controlId="donatorNameInput">
            //     <FloatingLabel
            //     controlId="floatingNameInput"
            //     label="Name"
            //     className="mb-3"
            // >
            //     <Form.Control type="text" placeholder="Bob"  value={donatorName} 
            //     onChange={changeNameHandler} required />
            // </FloatingLabel>
            // </Form.Group>

            // <Form.Group className="mb-3" controlId="donatorAmountInput">
            //     <FloatingLabel
            //     controlId="floatingAmountInput"
            //     label="Amount to Donate"
            //     className="mb-3"
            // >
            //     <Form.Control type="number"  min={0} value={donatorAmount} 
            //     onChange={changeAmountHandler} required />
            // </FloatingLabel>
            // </Form.Group>

           
            // <Button className="submit-button" variant="success" value="submit" type="submit">Donate</Button>
            // </Form>

            // </div>
           <section className="contact-page-area section-gap">
               <h2>Register as a charity</h2>
  <div className="container">
   
      {/* <div className="map-wrap" style={{width: '100%', height: 15}} id="map" /> */}
      {/* <div className="col-lg-8 ml-5"> */}
          <div className="row flex m-5">
              <div className="col-6">
                  <p>It helps to establish tools that would link 
                     more effectively remittances with the development of local communities involving the 
                     diaspora in this effort. Through Eyezon, we empower nonprofit organizations to unlock 
                     the generosity of their supporters and help them advance what they stand for. 

</p>
        <form className="form-area w-75 " id="myForm"  onSubmit={submitForm}>
            <div className="form-group">
              <input name="name" placeholder="Enter your name" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Enter your name'" className="common-input mb-20 form-control" required type="text" value={charityName} onChange={changeNameHandler}/>
              <input name="number" placeholder="Enter Amount to Donate"  onfocus="this.placeholder = ''" onblur="this.placeholder = 'Enter amount to Donate'" className="common-input mb-20 form-control" required type="date" value={RecievedAmount} onChange={changeAmountHandler} />
              <textarea className="common-textarea form-control" name="message" placeholder="Description" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Messege'" required defaultValue={""} value={description} onChange={changeDescriptionHandler}/>

              <div className="alert-msg" style={{textAlign: 'left'}} />
              <button className="primary-btn mt-4" style={{float: 'left'}}>Register</button>
           
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


export default Charity;
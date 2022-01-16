

import {Button, Form, FloatingLabel} from 'react-bootstrap'
import {  useNavigate } from "react-router-dom";
import React, { useEffect, useState } from 'react';
import getWeb3 from '../getWeb3';
import Donation from "../contracts/Donation.json";

function Charity(props) {
   
  
  // const [charities, setCharities] = useState([]);
  
  const navigate = useNavigate();
  
  const [account, setAccount] = useState();
  const [chartiesList, setCharitiesList] = useState();
    const [charityName, setcharityName] = useState('');
    const [date, setdateAmount] = useState('');
    const [description , setDescription] = useState('');

    // var Cname="";
    // var Cdescription="";
    // var Cdate="";


    const changeNameHandler = (e) => {
        setcharityName(e.currentTarget.value);
    }
    
    const changedateHandler = (e) => {
      setdateAmount(e.currentTarget.value);
    }
    const changeDescriptionHandler = (e) =>{
      setDescription(e.currentTarget.value);
    }
      
    //  const App =  useEffect(()=>{
      const loaded=async function load() {try {
        const web3 = await getWeb3();
  
        // Use web3 to get the user's accounts.
        const accounts = await web3.eth.getAccounts();
        setAccount(accounts[0])
        console.log(accounts);
  
        // Get the contract instance.
        const networkId = await web3.eth.net.getId();
        const deployedNetwork = Donation.networks[networkId];
        const instance = new web3.eth.Contract(
          Donation.abi,
          deployedNetwork && deployedNetwork.address,
        );
        const chartiesList = new web3.eth.Contract(Donation.abi,
          deployedNetwork && deployedNetwork.address,);
          setCharitiesList(chartiesList);
          
          // const counter = await chartiesList.methods.charityCount().call();
          // for (var i = 0; i < counter; i++){
          //   const charities = await chartiesList.methods.getCharity(i).call();
          //   setCharities((charities) =>)
          // }
        console.log(">>> ");
        // Set web3, accounts, and contract to the state, and then proceed with an
        // example of interacting with the contract's methods.
        this.setState({ web3, accounts, contract: instance });
        const charities = await chartiesList.methods.addCharity("charityName","description","date").send({from:account});
        setCharitiesList(charities);
        
        const chari = await chartiesList.methods.getCharities().call();
        console.log("inside" + chari);
        
        
      } catch (error) {
        // Catch any errors for any of the above operations.
        alert(
          `Failed to load web3, accounts, or contract. Check console for details.`,
        );
        console.error(error);
      } 
    }
    // load();
    // },[]);
      
   
    
    const submitForm = (e) => {
        e.preventDefault();

        if(charityName.trim() === '') {
        return alert('Name is required!');
        }

    
        if(date.trim() === '') {
        return alert('Amount is required!');
        }
    


         const donator= {
          name: charityName,
        date: date,
        description:description
        }

        
        loaded();

        console.log(donator);
      //  addtoCharity(donator.name,donator.description,donator.date);
      //   function addcharity(charityName, date, description){
      //     charityName = charityName;
      //     setcharityName(charityName)
      //    date = date;
      //    setdateAmount(date)
      //      description = description;
      //      setDescription(description)


      //   }
       
      //  console.log(addcharity().name);
        
        // console.log(donator);

        
        navigate('/charities?0');
            
    }
    
    // async function addtoCharity(name, description, date){
    //   var chartiesList = await load();
    //   console.log("here: ", chartiesList);
    //   const charities = await chartiesList.methods.addCharity(name,description,"10/10/10").call();
    //   setCharities(charities);
        
    //   const chari = await chartiesList.methods.getCharities().call();
    //   console.log("inside" + chari);

    // }

  
    
 
    // ]
    return (
            
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
              <input name="number" placeholder="Enter Amount to Donate"  onfocus="this.placeholder = ''" onblur="this.placeholder = 'Enter amount to Donate'" className="common-input mb-20 form-control" required type="date" value={date} onChange={changedateHandler} />
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
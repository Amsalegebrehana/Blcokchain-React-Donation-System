import React, { useEffect, useState } from 'react';
import getWeb3 from '../getWeb3';
import Donation from "../contracts/Donation.json";

function Charities(props) {
  console.log("locai",window.location.search.substring(1,3))
  // state = { storageValue: 0, web3: null, accounts: null, contract: null };
   const [account, setAccount] = useState();
   const [chartiesList, setCharitiesList] = useState();

   const [charities, setCharities] = useState([]);
  //  useEffect(() => {
  useEffect  (  () =>  {
   async function load() {try {
      const web3 = await getWeb3();

      // Use web3 to get the user's accounts.
      const accounts = await web3.eth.getAccounts();
      const account=accounts[1];
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
        setCharities(chartiesList);
        const counter = await chartiesList.methods.charityCount().call();
        // for (var i = 0; i < counter; i++){
        //   const charities = await chartiesList.methods.getCharity(i).call();
        //   setCharities((charities) =>)
        // }
      console.log(">>> ");
      // Set web3, accounts, and contract to the state, and then proceed with an
      // example of interacting with the contract's methods.
      this.setState({ web3, accounts, contract: instance });
      const charitiesAdd = await chartiesList.methods.addCharity("name","dec","date").send({from:account});
      const charities = await chartiesList.methods.getCharties().call();
      setCharities(charities);
      console.log(charities);
      console.log("here");
    } catch (error) {
      // Catch any errors for any of the above operations.
      alert(
        `Failed to load web3, accounts, or contract. Check console for details.`,
      );
      console.error(error);
    } }
    load();
  },[]);

        const  ch=[
        {
            id: 1,
            name : "Food Relief",
            date : "2021-12-12",
            amountReceived : 0

        },
        {
            id: 2,
            name : "HC",
            date : "2022-1-15",
            amountReceived :  0 + parseInt((window.location.search.substring(1,3))),

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
           
            {ch.map((chartiy, index) => {
                return<> 
               <a href={`/donate?${index}`}>
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
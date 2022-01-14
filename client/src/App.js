import React, { Component } from "react";
import SimpleStorageContract from "./contracts/SimpleStorage.json";
import Donation from "./contracts/Donation.json";
import getWeb3 from "./getWeb3";
import Navbar from './components/Navbar';
import Landing from './components/Landing';
import { BrowserRouter, Route, Routes, Switch } from "react-router-dom";
import Charities from './components/Charities';
import Footer from './components/Footer';
import Contact from './components/Contact';
import Donate from './components/Donate';
import Charity from './components/Charity';


import "./App.css";

class App extends Component {
  state = { storageValue: 0, web3: null, accounts: null, contract: null };

  componentDidMount = async () => {
    try {
      // Get network provider and web3 instance.
      const web3 = await getWeb3();

      // Use web3 to get the user's accounts.
      const accounts = await web3.eth.getAccounts();
      console.log(accounts);

      // Get the contract instance.
      const networkId = await web3.eth.net.getId();
      const deployedNetwork = Donation.networks[networkId];
      const instance = new web3.eth.Contract(
        Donation.abi,
        deployedNetwork && deployedNetwork.address,
      );
      console.log(">>> " + this.state);
      // Set web3, accounts, and contract to the state, and then proceed with an
      // example of interacting with the contract's methods.
      this.setState({ web3, accounts, contract: instance });
    } catch (error) {
      // Catch any errors for any of the above operations.
      alert(
        `Failed to load web3, accounts, or contract. Check console for details.`,
      );
      console.error(error);
    }
  };

  // runExample = async () => {
  //   const { accounts, contract } = this.state;

  //   // Stores a given value, 5 by default.
  //   await contract.methods.set(5).send({ from: accounts[0] });

  //   // Get the value from the contract to prove it worked.
  //   const response = await contract.methods.get().call();

  //   // Update state with the result.
  //   this.setState({ storageValue: response });
  // };

  render() {
    if (!this.state.web3) {
      return <div>Loading Web3, accounts, and contract...</div>;
    }
    return (
      <div className="App">
        {/* <h1>Good to Go!</h1>
        <p>Your Truffle Box is installed and ready.</p>
        <h2>Smart Contract Example</h2>
        <p>
          If your contracts compiled and migrated successfully, below will show
          a stored value of 5 (by default).
        </p>
        <p>
          Try changing the value stored on <strong>line 42</strong> of App.js.
        </p>
        <div>The stored value is: {this.state.storageValue}</div> */}
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route exact path="/" element={<Landing />} />
           <Route exact path="/home" element={<Landing />} />
          <Route exact path="/charities" element={<Charities />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/donate" element={<Donate />} />
          <Route exact path="/charity" element={<Charity />} />
          

       
        </Routes>
        <Footer/>
      </BrowserRouter>
      </div>
    );
  }
}

export default App;

import logo from './logo.svg';
import './App.css';
import {useAddress, useContract, useMetamask} from '@thirdweb-dev/react';

function App() {

  const connectWithMetamask = useMetamask();
  const address = useAddress();
  const { contract } = useContract("0x563cba4716F1B3eEC12c7CaC9963E178084939Ee", "edition-drop")

  const claimNft = async() => {
    try {
      const tx = await contract.claimTo(address, 0, 1); //address, tokenID, quantity
      console.log(tx)
    } catch (error) {
      console.log("Error occured", error)
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {address ? address : <button onClick={connectWithMetamask}>Connect</button>}
        {address && <button onClick={claimNft}> Claim Nft </button>}
      </header>
    </div>
  );
}

export default App;

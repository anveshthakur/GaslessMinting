import logo from './logo.svg';
import './App.css';
import {useAddress, useContract, useMetamask} from '@thirdweb-dev/react';

function App() {

  const connectWithMetamask = useMetamask();
  const address = useAddress();
  const { contract } = useContract(process.env.REACT_APP_CONTRACT_ADDRESS, "nft-drop")

  const claimNft = async() => {
    try {
      const tx = await contract.claimTo(address, 1); //address,  quantity
      console.log(tx[0].receipt.blockHash)
      console.log(tx[0].receipt.transactionHash);
    } catch (error) {
      console.trace(error)
    }
  }

  const balanceOf = async() => {
    try {
      const tx = await contract.balanceOf(address);
      console.log(tx.toNumber());
    }catch(error){
      console.log(error)
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {address ? address : <button onClick={connectWithMetamask}>Connect</button>}
        {address && <button onClick={claimNft}> Claim Nft </button>}
        {address && <button onClick={balanceOf}> See Balance </button>}
      </header>
    </div>
  );
}

export default App;

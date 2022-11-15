import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ThirdwebProvider, ChainId } from '@thirdweb-dev/react';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThirdwebProvider 
      sdkOptions={{
        gasless: {
          openzeppelin: {
            relayerUrl: "https://api.defender.openzeppelin.com/autotasks/f3798597-723a-44fe-8f40-043e1eb75349/runs/webhook/7b81b430-242d-44b1-89ca-abd60d2e1577/Lm3LGxQ5WMyh8dA4QWxp36"
          }
        }
      }}
      desiredChainId={ChainId.Mumbai}
    >
    <App />
    </ThirdwebProvider>  
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

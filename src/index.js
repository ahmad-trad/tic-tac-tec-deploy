import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Modalcontext } from './contextApi/Modalcontext';
import { Gamecontext } from './contextApi/Gamecontext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Modalcontext>
      <Gamecontext>
        <App />
      </Gamecontext>
    </Modalcontext>
  </React.StrictMode>);


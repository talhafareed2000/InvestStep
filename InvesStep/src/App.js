import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import AllCoins from './pages/AllCoins'; //imports coinList page
import CoinPage from './pages/CoinPage'; //imports coinPage 
//import Header from './compoments/Header';
import "./App.css";



const App = () => {
  return (
    <div className="App">
      
      <BrowserRouter>
        
        <Route exact path ="/" component={AllCoins}/>
        <Route path ="/coins/:id" component={CoinPage}/>
      </BrowserRouter>
      
      
        
    </div>
  );

};

export default App;


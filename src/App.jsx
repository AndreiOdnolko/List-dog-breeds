import React from 'react';
import { HashRouter, Route } from 'react-router-dom';

import './App.css';
import ListOfDogs from './Components/ListOfDogs';
import Menu from './Components/Menu';
import DogPage from './Components/DogPage';
import PhotoSubBreed from './Components/PhotoSubBreed';


const App = () => (
  <HashRouter>
    <div className="wrapper-page">
      <header className="header-group">
        <Route path="/" component={Menu} />
      </header>
      <Route exact path="/listOfDogs" component={ListOfDogs} />
      <Route path="/listOfDogs/:key" component={DogPage} />
      <Route path="/listOfDogs/:key/:sub" component={PhotoSubBreed} />
    </div>
  </HashRouter>
);

export default App;

import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../Image/logo.png';

const MenuComponent = () => (
  <div className="wrapper_menu">
    <img src={logo} className="logo" alt="img" />
    <Link to="/listOfDogs" className="title_name">list Of Dogs</Link>
  </div>
);
export default MenuComponent;

import React from 'react';
// import logo from './logo.svg';
import './Nav.css';
import { Link } from 'react-router-dom';

class Nav extends React.Component {
  // constructor(props) {
  //   super(props);
  // }
  render() {
    return (

      <nav className="navigation">
        <ul>
          <Link to="/">
            <li>Главная</li>
          </Link>
          <Link to="/about">
            {/* <li><a className="nav_link" href="#">Пункты Обмена</a></li> */}
            <li>О нас</li>
          </Link>
          <Link to="/shop">

            <li>Клиенты</li>
          </Link>
        </ul>
      </nav>

    );
  }
}

export default Nav;

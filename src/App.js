import React from 'react';
import './App.css';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Header from './header/Header';
import Footer from './footer/Footer';
import Nav from './Nav/Nav';
import Rate from './rate/Rate';
import About from './about/About';
import Shop from './shop/Shop';

class App extends React.Component {
  // constructor(props) {
  //   super(props);
  // }
  render() {
    return (
      <div className="site">
        <Header />
        <div className="container">
          <Router>
            <Nav />
            <Switch>
              <Route exact path="/" component={Rate}></Route>
              <Route exact path="/about" component={About}></Route>
              <Route exact path="/shop" exact component={Shop}></Route>
            </Switch>
          </Router>



          {/* <div className="cookie_info">
            <div className="site-content">
              <div className="well">На нашем сайте мы используем cookie длф сбора информации технического характера.
              В частности, для персонифицированой работы сайта мы обрабатываем
              IP-адрес региона вашего местоположения<button className="btn btn-primary btn-sm">OK</button>
              </div>
            </div>
          </div> */}

        </div >

        <Footer />
      </div >
    );
  }
}

export default App;

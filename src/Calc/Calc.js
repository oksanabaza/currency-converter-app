import React from 'react';
// import logo from './logo.svg';
import './Calc.css';


class Calc extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      result: 0
    }
  }

  static getDerivedStateFromProps(props, state) {
    return { rate: props.rate };
  }

  calcRate = (e) => {
    e.preventDefault();
    console.log('work');
    let elements = e.target.elements;
    console.log(elements['type-currency'].value);
    console.log(elements['count-currency'].value);
    let countCurrency = elements['count-currency'].value;
    let typeCurrency = elements['type-currency'].value;
    this.setState({ result: (countCurrency / this.state.rate[typeCurrency]).toFixed(2) })
  }

  render() {
    return (
      <div className="Calculator">
        <h3>Калькулятор обмена</h3>
        <div className="block">
          <div>Я хочу</div>

          <div>
            <form onSubmit={this.calcRate}>
              <input type="number" defaultValue="0" name="count-currency" />
              <select name="type-currency" id="">
                {Object.keys(this.props.rate).map((keyName, i) => (

                  <option key={keyName} value={keyName}>{keyName}</option>
                ))}
              </select>
              <input type="submit" defaultValue="calc" />
            </form>
          </div>

        </div>
        <div>
          <h4>Результат</h4>
          <ul className="calc-res">
            <li>{this.state.result}EUR</li>

          </ul>
        </div>
      </div>
    );
  }
}

export default Calc;

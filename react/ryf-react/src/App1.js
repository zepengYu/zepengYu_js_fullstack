import React, { Component } from 'react';
import './App.css';


class App extends Component {
  render() {
    const names = ['Alice', 'Emily', 'Jack']
    return (
      <div className="App">
      <HelloMessage name="John"/>
        <ul>
          {
            names.map((name, index) => {
              return(
                <div key={index}>Hello,{name}</div>
              )
            })
          }
        </ul>
      </div>
    );
  }
}

export default App;

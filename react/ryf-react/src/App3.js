import React, { Component } from 'react';
import './App.css';

class NoteList extends Component {
    // 不要写没用的constructor，写了没用会报错
    // constructor(props){
    //     super(props)
    // }
    render () {
        return (
            <ol>
                { this.props.children.map((child,index) => <li key={index}>{child}</li>) }
            </ol>
        )
    }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <NoteList>
            <span>hello</span>
            <span>World</span>
        </NoteList>
      </div>
    );
  }
}

export default App;

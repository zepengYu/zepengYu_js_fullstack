import React, { Component } from 'react';
import './App.css';

// 让组件的文字渐隐渐变， opacity 改变 1000 0 -> 1
class Hello extends Component {
    state = {
        opacity: 1.0
    }
    componentDidMount () {
        setInterval(() => {
            let opacity = this.state.opacity
            opacity -= .5
            if(opacity < 0.1) {
                opacity = 1
            }
            this.setState({
                opacity: opacity
            })
        },1000)
    }
    render () {
        return (
            <div style={{opacity: this.state.opacity}}>
                Hello, {this.props.name}
            </div>
        )
    }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <Hello name="World"/>
      </div>
    );
  }
}

export default App;

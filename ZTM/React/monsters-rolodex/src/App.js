import logo from './logo.svg';
import './App.css';
import { Component } from 'react';


class App extends Component {
  constructor() {
    super();

    this.state = {
      name: {firstName: 'Pedro',
             lastName: 'Silva'
            },
      company: 'Nenhuma'
    }
  }



  render(){
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>Hi {this.state.name.firstName} {this.state.name.lastName}, I work at {this.state.company}</p>
          <button onClick={ () => {
            this.setState({name: {firstName: 'Xerife', lastName: 'DaMoita'}
            })
           }}> Change Name </button>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
    }
  }


export default App;

import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
// import 'antd/dist/antd.css';  
import Header from './Component/Header/Header';
import CardZone from './Component/CardsZone/CardZone';

class App extends Component {
  render() {
    return (
      <div className="App">
          <Header/>
          <CardZone/>     
      </div>
    );
  }
}

export default App;








// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <h1 className="App-title">Welcome to React</h1>
//         </header>
//         <p className="App-intro">
//           To get started, edit <code>src/App.js</code> and save to reload.
//         </p>
//       </div>
//     );
//   }
// }

// export default App;
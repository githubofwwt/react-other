import React, { Component } from 'react';
//import CSSModules from 'react-css-modules';
import 'normalize.css' ;
import styles from './App.less';
//import './App.css'
import Main from './routers'
class App extends Component {
  render() {
    return (
      <div className={styles.App}>
        <Main />
      </div>
    );
  }
}

//export default CSSModules(App, styles);
export default App;

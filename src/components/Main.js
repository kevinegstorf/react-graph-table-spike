require('normalize.css');
require('styles/App.css');

import React from 'react';

import TableComponent from './TableComponent';
import GraphComponent from './GraphComponent';
import GameFilterComponent from './GameFilterComponent';

let yeomanImage = require('../images/yeoman.png');

class AppComponent extends React.Component {
  constructor() {
    super();
    this.state = require('../sample_data/lifecycle_analysis')
  }

  render() {
    return (
      <div className="index">
        <img src={yeomanImage} alt="Yeoman Generator" />
        <GameFilterComponent />
        <GraphComponent />
        <TableComponent />
        <div className="notice">Please edit <code>src/components/Main.js</code> to get started!</div>
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;

'use strict';

import React from 'react';

require('styles//Filter.sass');

class GamerFilterComponent extends React.Component {
  render() {
    return (
      <div className="game-filter-component">
        <select>
          <option value="Wild Panda">Wild Panda</option>
          <option value="Bier Haus">Bier Haus</option>
          <option value="Super Monopoly Money Boardwalk">Super Monopoly Money Boardwalk</option>
        </select>
      </div>
    );
  }
}

GamerFilterComponent.displayName = 'Select Game';

export default GamerFilterComponent;

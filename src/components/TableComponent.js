'use strict';

import React from 'react';

require('styles//Table.sass');

class TableComponent extends React.Component {
  render() {
    return (
      <div className="table-component">
        <table>
          <tr>
            <th>Animal Name</th>
            <th>Smith</th>
          </tr>
          <tr>
            <td>Eve</td>
            <td>Jackson</td>
            <td>94</td>
          </tr>
        </table>
      </div>
    );
  }
}

TableComponent.displayName = 'TableComponent';

// Uncomment properties you need
// TableComponent.propTypes = {};
// TableComponent.defaultProps = {};

export default TableComponent;

import React from 'react';
import MyContext from './MyContext';

class UsesConsumer extends React.Component {

  render() {
    return (
      <MyContext.Consumer>
        {(value) => (
          <div>UsesConsumer: {value.count}, {value.touchedBy}</div>
        )}
      </MyContext.Consumer>
    )
  }
}

export default UsesConsumer;
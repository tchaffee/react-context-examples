import React from 'react';
import MyContext from './MyContext';
import WrapperWithContext from './WrapperWithContext'

class UsesConsumerWrapped extends React.Component {

  render() {
    return (
      <MyContext.Consumer>
        {(value) =>
          <div>UsesConsumerWrapped: {value.count}, {value.touchedBy}</div>
        }
      </MyContext.Consumer>
    )
  }
}

export default WrapperWithContext(UsesConsumerWrapped)
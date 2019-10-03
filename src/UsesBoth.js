import React from 'react';
import MyContext from './MyContext';
import UsesContextType from './UsesContextType';

class UsesConsumer extends React.Component {

  render() {
    return (
      <MyContext.Consumer>
        {(value) => (
          <UsesContextType label='UsesBoth' />
        )}
      </MyContext.Consumer>
    )
  }
}

export default UsesConsumer;
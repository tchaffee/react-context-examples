import React, { Component } from 'react';
import MyContext from './MyContext';


export default function WrapperWithContextType (WrappedComponent) {
  const rtnClass = class extends Component {

    componentDidMount () {
      setInterval(() => this.context.updateCount('WrapperWithContext'), 4000)
    }

    render() {
      return (
        <>
          <br />
          <div>WrapperWithContext</div>
          <WrappedComponent />
        </>
      )
    }
  }
  
  rtnClass.contextType = MyContext;
  
  return rtnClass
}
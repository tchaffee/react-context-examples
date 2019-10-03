import React from 'react';
import MyContext from './MyContext';
import WrapperWithContext from './WrapperWithContext'

class UsesContextTypeWrapped extends React.Component {

  componentDidMount () {
    setInterval(() => this.context.updateCount('UsesContextTypeWrapped'), 6000)
  }

  render() {
    let ctx = this.context;
    const { label = 'UsesContextTypeWrapped' } = this.props
    return <div>{label}: {ctx.count}, {ctx.touchedBy}</div>
  }
}

UsesContextTypeWrapped.contextType = MyContext;

export default WrapperWithContext(UsesContextTypeWrapped)
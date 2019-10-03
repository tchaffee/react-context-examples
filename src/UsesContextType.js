import React from 'react';
import MyContext from './MyContext';

class UsesContextType extends React.Component {

  componentDidMount () {
    setInterval(() => this.context.updateCount('UsesContextType'), 2500)
  }

  render() {
    let ctx = this.context;
    const { label = 'UsesContextType' } = this.props
    return <div>{label}: {ctx.count}, {ctx.touchedBy}</div>
  }
}

UsesContextType.contextType = MyContext;

export default UsesContextType;
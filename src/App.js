import React from 'react'
import MyContext from './MyContext'
import UsesContextType from './UsesContextType'
import UsesConsumer from './UsesConsumer'
import UsesBoth from './UsesBoth'
import UsesContextTypeWrapped from './UsesContextTypeWrapped'
import UsesConsumerWrapped from './UsesConsumerWrapped'


class App extends React.Component {
  
  constructor(props) {
    super(props)
    
    this.updateCount = (touchedBy) => {
      const count = this.state.count + 1
      this.setState({
        count,
        touchedBy
      })
    }

    this.state = {
      count: 10,
      touchedBy: 'no one',
      updateCount: this.updateCount
    }
  }

  render() {
    return (
      <MyContext.Provider value={this.state}>
        <UsesConsumer />
        <UsesContextType />
        <UsesBoth />
        <UsesContextTypeWrapped />
        <UsesConsumerWrapped />
        
      </MyContext.Provider>
    )
  }
}

export default App;

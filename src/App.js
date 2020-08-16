import React from 'react';

class Item extends React.Component {
  render() {
    return (
      <li>Her name is, {this.props.name}
        <button onClick={this.props.remove(this.props.id)}>Remove</button>
      </li>
    )
  }
}
class App extends React.Component {
    state = {
      items: [
        {id: 1, name: 'Naw Naw'},
        {id: 2, name: 'Naw Aye'},
      ]
    }

    add = () => {
      let id = this.state.items.length + 1
      let name = this.inputMore.current.value
      this.setState({
        items: [
          ...this.state.items,
          {id, name}
        ]
      })
      this.inputMore.current.value = null
    }

    remove = id => () => { // Higher order function ကိုသုံးထားတာပါ
      this.setState({
        items: this.state.items.filter( n => id !== n.id)
      })
    }
    inputMore = React.createRef();

    render() {
        return (
            <div>
                <h1>Hello World</h1>
                <ul>
                    {
                      this.state.items.map( i => {
                        return (
                          <Item name={i.name} key={i.id} remove={this.remove} id={i.id} />
                        )
                      })
                    }
                </ul>
                <input type="text" ref={this.inputMore}></input>
                <button onClick={this.add}>Add</button>
            </div>
        )
    }
}

export default App;
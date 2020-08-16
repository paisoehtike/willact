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

export default Item
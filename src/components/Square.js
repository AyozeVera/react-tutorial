import React from 'react';
import '../index.css';

export default class Square extends React.Component {
  // Cause this component dont controll its own value,
  // it's called CONTROLLED COMPONENT
  render() {
    return (
      <button className="square" onClick={() => this.props.onClick()}>
        {this.props.value}
      </button>
    );
  }
}

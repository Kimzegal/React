import {Component} from 'react';
import PropTypes from 'prop-types';

class MyComponent extends Component{
  static defaultProps = {
    name: "김제갈"
  };
  static propTypes = {
    name: PropTypes.string.isRequired
  };
  render() {
    return (    <div>
      Hello <b>{thisprops.name}</b>
      children is {props.children}
    </div>);
  }
}

export default MyComponent;

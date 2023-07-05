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
      Hello <b>{this.props.name}</b>
      children is {this.props.children}
    </div>);
  }
}

export default MyComponent;

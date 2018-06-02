import React, { Component } from 'react';
import PropTypes from 'prop-types';

// TODO: this will be a grommet component and we will use palmEnd variable
const PALM_END = 480;
class Responsive extends Component {
  static propTypes = {
    onChange: PropTypes.func.isRequired,
  }

  constructor() {
    super();
    this.check = this.check.bind(this);
  }

  componentDidMount() {
    window.addEventListener('resize', this.check);
    this.check();
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.check);
  }

  check() {
    const { onChange } = this.props;
    onChange(window.innerWidth <= PALM_END);
  }

  render() {
    const { children } = this.props;
    return (
      <div>
        {children}
      </div>
    );
  }
}

export default Responsive;

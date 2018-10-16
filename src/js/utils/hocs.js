import React, { Component } from 'react';

import { Responsive } from '../components/responsive';

export const withSmall = (WrappedComponent) => {
  class ResponsiveComponent extends Component {
    state = {
      small: false,
    }

    render() {
      const { small } = this.state;
      return (
        <Responsive onChange={isSmall => this.setState({ small: isSmall })}>
          <WrappedComponent small={small} {...this.props} />
        </Responsive>
      );
    }
  }

  return ResponsiveComponent;
};

export default { withSmall };

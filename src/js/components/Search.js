import React, { Component } from 'react';

import { Box, TextInput } from 'grommet';

import { Search } from 'grommet-icons';

const baseBorderStyle = {
  color: 'light-4',
};

const baseBoxStyle = {
  style: {
    padding: '3px 24px',
  },
};

const focusBorderStyle = {
  color: 'brand',
  size: 'medium',
};

const focusBoxStyle = {
  style: {
    padding: '1px 22px',
  },
};

function searchToObject(search) {
  const params = {};
  if (search) {
    search
      .slice(1)
      .split('&')
      .forEach(param => {
        const [name, value] = param.split('=');
        params[name] = decodeURIComponent(value);
      });
  }
  return params;
}

function serialize(obj) {
  const serializedStr = Object.keys(obj)
    .map(k => `${encodeURIComponent(k)}=${encodeURIComponent(obj[k])}`)
    .join('&');
  if (serializedStr === '') {
    return '';
  }
  return `?${serializedStr}`;
}

class SearchComponent extends Component {
  inputRef = React.createRef();

  constructor(props, context) {
    super(props, context);

    this.state = {
      borderStyle: baseBorderStyle,
      boxStyle: baseBoxStyle,
      value: props.value || '',
    };
  }

  componentDidMount() {
    const { onChange } = this.props;
    const value = searchToObject(window.location.search).s;
    if (value) {
      this.setState({ value }); // eslint-disable-line
      if (onChange) {
        onChange({ target: { value } });
      }
    }
  }

  updateLocation = () => {
    const { value } = this.state;
    // throttle when user is typing
    clearTimeout(this.searchTimer);
    this.searchTimer = setTimeout(() => {
      const query = searchToObject(window.location.search);
      query.s = encodeURIComponent(value);
      if (query.s === '') {
        delete query.s;
      }
      window.history.replaceState(
        query,
        '',
        `${window.location.pathname}${serialize(query)}`,
      );
    }, 200);
  };

  onChange = (event, ...args) => {
    const { onChange } = this.props;
    this.setState({ value: event.target.value }, this.updateLocation);
    if (onChange) {
      onChange(event, ...args);
    }
  };

  render() {
    const { borderStyle, boxStyle, value } = this.state;
    return (
      <Box
        direction="row"
        width="large"
        align="center"
        alignContent="stretch"
        round="medium"
        border={{ size: 'small', ...borderStyle }}
        pad={{ horizontal: 'medium' }}
        onFocus={() =>
          this.setState({
            borderStyle: focusBorderStyle,
            boxStyle: focusBoxStyle,
          })
        }
        onBlur={() =>
          this.setState({
            borderStyle: baseBorderStyle,
            boxStyle: baseBoxStyle,
          })
        }
        {...boxStyle}
      >
        <Search color="brand" />
        <TextInput
          plain
          type="search"
          {...this.props}
          value={value}
          onChange={this.onChange}
        />
      </Box>
    );
  }
}

export default SearchComponent;

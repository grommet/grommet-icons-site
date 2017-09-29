import React, { Component } from 'react';
import { findDOMNode } from 'react-dom';

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
    search.slice(1).split('&').forEach((param) => {
      const [name, value] = param.split('=');
      params[name] = decodeURIComponent(value);
    });
  }
  return params;
}

function serialize(obj) {
  const serializedStr = Object.keys(obj).map(
    k => `${encodeURIComponent(k)}=${encodeURIComponent(obj[k])}`
  ).join('&');
  if (serializedStr === '') {
    return '';
  }
  return `?${serializedStr}`;
}

class SearchComponent extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      borderStyle: baseBorderStyle,
      boxStyle: baseBoxStyle,
      value: props.value || '',
    };
  }

  componentDidMount() {
    const value = searchToObject(window.location.search).s;
    if (value) {
      /* eslint-disable react/no-did-mount-set-state */
      this.setState({ value }, () => {
        this.fireChange();
      });
      /* eslint-enable react/no-did-mount-set-state */
    }
  }

  updateSearchLocation() {
    const { value } = this.state;

    const query = searchToObject(window.location.search);
    query.s = encodeURIComponent(value);
    if (query.s === '') {
      delete query.s;
    }
    // throttle when user is typing
    clearTimeout(this.searchTimer);
    this.searchTimer = setTimeout(() => {
      window.history.replaceState(query, '', `${window.location.pathname}${serialize(query)}`);
    }, 200);
  }

  fireChange() {
    const { onInput } = this.props;
    if (onInput) {
      let event;
      try {
        event = new Event('change', {
          'bubbles': true,
          'cancelable': true,
        });
      } catch (e) {
        // IE11 workaround.
        event = document.createEvent('Event');
        event.initEvent('change', true, true);
      }
      // We use dispatchEvent to have the browser fill out the event fully.
      findDOMNode(this.inputRef).querySelector('input').dispatchEvent(event);
      // Manually dispatched events aren't delivered by React, so we notify too.
      onInput(event);
    }
  }

  render() {
    const { borderStyle, boxStyle, value } = this.state;
    const { onInput } = this.props;
    return (
      <Box
        basis='large'
        direction='row'
        align='center'
        alignContent='stretch'
        round='medium'
        border={{ size: 'small', ...borderStyle }}
        pad={{ horizontal: 'medium' }}
        onFocus={() => this.setState({ borderStyle: focusBorderStyle, boxStyle: focusBoxStyle })}
        onBlur={() => this.setState({ borderStyle: baseBorderStyle, boxStyle: baseBoxStyle })}
        {...boxStyle}
      >
        <Search color='brand' />
        <TextInput
          ref={(ref) => {
            this.inputRef = ref;
          }}
          plain={true}
          type='search'
          {...this.props}
          value={value}
          onInput={(event, ...args) => {
            this.setState({ value: event.target.value }, () => this.updateSearchLocation());
            if (onInput) {
              onInput(event, ...args);
            }
          }}
        />
      </Box>
    );
  }
}

export default SearchComponent;

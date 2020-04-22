import React, { useState } from 'react';

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

const SearchComponent = ({ onChange, placeholder, value }) => {
  const [focus, setFocus] = useState();

  return (
    <Box
      direction="row"
      width="large"
      align="center"
      alignContent="stretch"
      round="medium"
      border={{ size: 'small', ...(focus ? focusBorderStyle : baseBorderStyle) }}
      pad={{ horizontal: 'medium' }}
      onFocus={() => setFocus(true)}
      onBlur={() => setFocus(false)}
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...(focus ? focusBoxStyle : baseBoxStyle)}
    >
      <Search color="brand" />
      <TextInput
        plain
        type="search"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </Box>
  );
}

export default SearchComponent;

import React from 'react';

import { Box, Button, Heading } from 'grommet';

import { Github } from 'grommet-icons';

const Header = () => (
  <Box align='start' tag='header' pad={{ vertical: 'medium' }}>
    <Box pad={{ horizontal: 'medium' }}>
      <Heading level={1} margin='none'>icons</Heading>
      <Heading level={1} margin='none'>grommet</Heading>
    </Box>
    <Box pad={{ vertical: 'small', horizontal: 'small' }}>
      <Button
        a11yTitle='See Grommet icons github'
        target='_blank'
        href='https://github.com/grommet/grommet-icons'
        icon={<Github />}
      />
    </Box>
  </Box>
);

export default Header;

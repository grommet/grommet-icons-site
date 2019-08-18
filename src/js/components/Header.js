import React from 'react';

import { Box, Button, Heading } from 'grommet';

import { Github } from 'grommet-icons';

const Header = () => (
  <Box tag="header" justify="between" align="start" direction="row">
    <Box pad="medium">
      <Heading level={2} margin="none">
        icons
      </Heading>
      <Heading level={2} margin="none">
        grommet
      </Heading>
    </Box>
    <Box pad={{ vertical: 'medium', horizontal: 'small' }}>
      <Button
        a11yTitle="Go to grommet-icons on GitHub"
        target="_blank"
        href="https://github.com/grommet/grommet-icons"
        icon={<Github size="large" />}
      />
    </Box>
  </Box>
);

export default Header;

import React from 'react';

import { Box, Text } from 'grommet';

const HeaderFooter = () => (
  <Box tag="footer" align="center" pad={{ horizontal: 'small' }}>
    <Box pad={{ vertical: 'large' }}>
      <Box
        round="large"
        background={{ color: 'dark-1', opacity: 'strong' }}
        pad={{ horizontal: 'large', vertical: 'small' }}
      >
        <Text
          textAlign="center"
          size="large"
          style={{ fontFamily: 'monospace' }}
        >
          <strong>npm install grommet-icons</strong>
        </Text>
      </Box>
    </Box>
  </Box>
);

export default HeaderFooter;

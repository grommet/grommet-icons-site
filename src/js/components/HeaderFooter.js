import React from 'react';
import styled from 'styled-components';

import { Box, Text } from 'grommet';

const WrapPre = styled.pre`
  white-space: pre-wrap;
  word-wrap: break-word;
  text-align: center;
`;

const HeaderFooter = () => (
  <Box tag='footer' align='center' pad={{ horizontal: 'small' }}>
    <Box pad={{ vertical: 'large' }}>
      <Box
        border={{ radius: 'xlarge' }}
        background={{ color: 'dark-1', opacity: 'strong' }}
        pad={{ horizontal: 'large' }}
      >
        <WrapPre>
          <code>
            <Text textAlign='center' size='large'>
              <strong>npm install grommet-icons</strong>
            </Text>
          </code>
        </WrapPre>
      </Box>
    </Box>
  </Box>
);

export default HeaderFooter;

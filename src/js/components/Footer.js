import React from 'react';

import {
  Box, Button, ResponsiveContext, Text,
} from 'grommet';

import {
  Github, Grommet, Slack, Twitter,
} from 'grommet-icons';

export default () => (
  <ResponsiveContext.Consumer>
    {responsive => (
      <Box
        tag='footer'
        pad='medium'
        justify={responsive !== 'small' && 'between'}
        border={{ color: 'light-4', side: 'top', size: 'medium' }}
        direction='row-responsive'
        gap='medium'
      >
        <Box align={responsive === 'small' ? 'center' : 'start'}>
          <Text>Works best with</Text>
          <Box pad={{ vertical: 'small' }}>
            <Button
              primary
              href='https://v2.grommet.io'
              target='_blank'
              icon={<Grommet />}
              label='grommet'
            />
          </Box>
          <Text textAlign={responsive === 'small' ? 'center' : undefined}>
            Documentation licensed under CC BY 4.0
          </Text>
        </Box>
        <Box
          justify='end'
          align={responsive === 'small' ? 'center' : 'end'}
          margin={{ vertical: 'small' }}
        >
          <Box direction='row'>
            <Button
              a11yTitle='Join Grommet Slack'
              plain
              icon={<Slack color='plain' />}
              target='_blank'
              href='http://slackin.grommet.io'
            />
            <Button
              a11yTitle='See Grommet Github'
              plain
              icon={<Github color='plain' />}
              target='_blank'
              href='https://github.com/grommet/grommet'
            />
            <Button
              a11yTitle='See Grommet Twitter'
              plain
              icon={<Twitter color='plain' />}
              target='_blank'
              href='https://twitter.com/grommetux'
            />
          </Box>
          <Text textAlign={responsive === 'small' ? 'center' : undefined}>
            © 2017 Hewlett Packard Enterprise Development LP.
          </Text>
        </Box>
      </Box>
    )}
  </ResponsiveContext.Consumer>
);

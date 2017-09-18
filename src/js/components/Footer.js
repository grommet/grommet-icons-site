import React, { Component } from 'react';

import { Box, Button, Text } from 'grommet';

import { Github, GrommetOutline, Slack, Twitter } from 'grommet-icons';

import { withSmall } from '../utils/hocs';

class Footer extends Component {
  render() {
    const { small } = this.props;
    return (
      <Box justify='center' direction='row'>
        <Box
          basis='xlarge'
          tag='footer'
          pad={{ vertical: 'medium', horizontal: 'small' }}
          justify='between'
          border={{ color: 'light-4', side: 'top', size: 'medium' }}
          direction='row'
          responsive={true}
        >
          <Box>
            <Text>Works best with</Text>
            <Box align='start' pad={{ vertical: 'small' }}>
              <Button
                primary={true}
                icon={<GrommetOutline />}
                label='Grommet'
                href='http://grommet.io'
                target='_blank'
              />
            </Box>
            <Text>
              Documentation licensed under CC BY 4.0
            </Text>
          </Box>
          <Box justify={small ? 'start' : 'end'} margin={{ vertical: 'small' }}>
            <Box justify={small ? 'start' : 'end'} direction='row'>
              <Button
                a11yTitle='Join Grommet Slack'
                plain={true}
                icon={<Slack color='plain' />}
                target='_blank'
                href='http://slackin.grommet.io'
              />
              <Button
                a11yTitle='See Grommet Github'
                plain={true}
                icon={<Github color='plain' />}
                target='_blank'
                href='https://github.com/grommet/grommet'
              />
              <Button
                a11yTitle='See Grommet Twitter'
                plain={true}
                icon={<Twitter color='plain' />}
                target='_blank'
                href='https://twitter.com/grommetux'
              />
            </Box>
            <Text textAlign={small ? 'start' : 'end'}>
              © 2017 Hewlett Packard Enterprise Development LP.
            </Text>
          </Box>
        </Box>
      </Box>
    );
  }
}

export default withSmall(Footer);

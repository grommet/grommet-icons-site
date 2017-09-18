import React from 'react';

import { Heading, Box } from 'grommet';

import { Import, JSXComponent } from './Code';

const IconExample = ({ name, icon }) => {
  const Component = icon;
  return (
    <Box responsive={true} justify='center' direction='row' pad='large' margin={{ top: 'small' }}>
      <Box
        basis='xlarge'
        direction='row'
        responsive={true}
        pad={{ top: 'medium' }}
      >
        <Box responsive={true} basis='1/2'>
          <Heading margin='none' level={2}>How do I use them?</Heading>
          <Heading level={4} style={{ maxWidth: '576px' }}>
            It’s easy! Once you’ve added the Node package you’ll have access to hundreds of
            icons that you can easily customize.
          </Heading>
          <Box margin={{ bottom: 'small' }}>
            <Import component={name} />
          </Box>
          <Box margin={{ bottom: 'small' }}>
            <JSXComponent
              name={name}
              props={{
                color: 'plain',
                size: 'xlarge',
              }}
            />
          </Box>
          <Box margin={{ bottom: 'small' }}>
            <JSXComponent
              name={name}
              props={{
                size: 'large',
              }}
            />
          </Box>
          <Box margin={{ bottom: 'small' }}>
            <JSXComponent
              name={name}
              props={{
                color: 'brand',
              }}
            />
          </Box>
          <Box margin={{ bottom: 'small' }}>
            <JSXComponent name={name} />
          </Box>
        </Box>
        <Box
          align='start'
          justify='center'
          direction='row'
          responsive={true}
          wrap={true}
          basis='1/2'
        >
          <Box
            align='center'
            margin='small'
            pad='large'
            background='light-1'
            border={{ radius: 'large' }}
          >
            <Component color='plain' size='xlarge' />
          </Box>
          <Box align='start' direction='row'>
            <Box align='start'>
              <Box margin='small' pad='medium' background='light-1' border={{ radius: 'large' }}>
                <Component size='large' />
              </Box>
              <Box margin='small' pad='small' background='light-1' border={{ radius: 'large' }}>
                <Component color='brand' />
              </Box>
            </Box>
            <Box align='start'>
              <Box margin='small' pad='small' background='light-1' border={{ radius: 'large' }}>
                <Component />
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default IconExample;

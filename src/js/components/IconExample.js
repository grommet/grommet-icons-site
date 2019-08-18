import React from 'react';
import PropTypes from 'prop-types';

import { Heading, Box } from 'grommet';

import { Import, JSXComponent } from './Code';

const IconExample = ({ name, icon }) => {
  const Component = icon;
  return (
    <Box
      responsive
      justify="center"
      direction="row"
      pad="large"
      margin={{ top: 'small' }}
    >
      <Box basis="xlarge" direction="row" responsive pad={{ top: 'small' }}>
        <Box responsive basis="1/2">
          <Heading margin="none" level={2}>
            How do I use them?
          </Heading>
          <Heading level={4} style={{ maxWidth: '576px' }}>
            It’s easy! Once you’ve added the Node package you’ll have access to
            hundreds of icons that you can easily customize.
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
          align="start"
          justify="center"
          direction="row"
          responsive
          wrap
          basis="1/2"
        >
          <Box
            round="medium"
            align="center"
            margin="small"
            pad="large"
            background="light-1"
          >
            <Component color="plain" size="xlarge" className="fade-icon" />
          </Box>
          <Box align="start" direction="row">
            <Box align="start">
              <Box
                margin="small"
                pad="medium"
                background="light-1"
                round="medium"
              >
                <Component size="large" className="fade-icon" />
              </Box>
              <Box
                margin="small"
                pad="small"
                background="light-1"
                round="small"
              >
                <Component color="brand" className="fade-icon" />
              </Box>
            </Box>
            <Box align="start">
              <Box
                margin="small"
                pad="small"
                background="light-1"
                round="small"
              >
                <Component className="fade-icon" />
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

IconExample.propTypes = {
  name: PropTypes.string.isRequired,
  icon: PropTypes.func.isRequired,
};

export default IconExample;

import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { Text } from 'grommet';

const StyledPre = styled.pre`
  font-size: 16px;
  margin: 0;
  white-space: pre-wrap;
  word-wrap: break-word;
`;

export const Import = ({ component }) => (
  <StyledPre>
    <code>
      <Text>import</Text>
      <Text>{' { '}</Text>
      <Text color='accent-1'>{`${component}`}</Text>
      <Text>{' } '}</Text>
      <Text>from </Text>
      <Text color='accent-2'>{'\'grommet-icons\''}</Text>
      <Text>;</Text>
    </code>
  </StyledPre>
);

Import.propTypes = {
  component: PropTypes.node.isRequired,
};

export const JSXComponent = ({ name, props = {} }) => {
  const propsNode = Object.keys(props).map(prop => (
    <Fragment key={prop}>
      <Text color='accent-2'>{` ${prop}`}</Text>
      <Text>{'=\''}</Text>
      <Text>{props[prop]}</Text>
      <Text>{'\''}</Text>
    </Fragment>
  ));
  return (
    <StyledPre>
      <code>
        <Text>{'<'}</Text>
        <Text color='accent-1'>{name}</Text>
        {propsNode}
        <Text>{' /> '}</Text>
      </code>
    </StyledPre>
  );
};

JSXComponent.propTypes = {
  name: PropTypes.string.isRequired,
  props: PropTypes.shape({}),
};

JSXComponent.defaultProps = {
  props: undefined,
};

export default { Import };

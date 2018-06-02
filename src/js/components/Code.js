import React from 'react';
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
      <Text color='dark-1'>import</Text>
      <Text color='dark-1'>{' { '}</Text>
      <Text color='accent-1'>{`${component}`}</Text>
      <Text color='dark-1'>{' } '}</Text>
      <Text color='dark-1'>from </Text>
      <Text color='accent-2'>{'\'grommet-icons\''}</Text>
      <Text color='dark-1'>;</Text>
    </code>
  </StyledPre>
);

export const JSXComponent = ({ name, props = {} }) => {
  const propsNode = Object.keys(props).map((prop, index) => (
    [
      <Text color='accent-2' key={`propName_${index}`}>{` ${prop}`}</Text>,
      <Text color='dark-1' key={`propOperator_${index}`}>{'=\''}</Text>,
      <Text color='neutral-2' key={`propValue_${index}`}>{props[prop]}</Text>,
      <Text color='dark-1' key={`propQuote_${index}`}>{'\''}</Text>,
    ]
  ));
  return (
    <StyledPre>
      <code>
        <Text color='dark-1'>{'<'}</Text>
        <Text color='accent-1'>{name}</Text>
        {propsNode}
        <Text color='dark-1'>{' /> '}</Text>
      </code>
    </StyledPre>
  );
};

export default { Import };

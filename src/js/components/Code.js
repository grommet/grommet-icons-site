import React from 'react';
import styled from 'styled-components';

const StyledCode = styled.span`
  color: #333333;
`;

const StyledComponent = styled.span`
  color: #00CCEB;
`;

const StyledProp = styled.span`
  color: #FF7D28;
`;

const StyledPropValue = styled.span`
color: #DC2878;
`;

const StyledPre = styled.pre`
  font-size: 16px;
  margin: 0;
  white-space: pre-wrap;
  word-wrap: break-word;
`;

export const Import = ({ component }) => (
  <StyledPre>
    <code>
      <StyledCode>{'import'}</StyledCode>
      <StyledCode>{' { '}</StyledCode>
      <StyledComponent>{` ${component} `}</StyledComponent>
      <StyledCode>{' } '}</StyledCode>
      <StyledCode>{' from '}</StyledCode>
      <StyledProp>{' \'grommet-icons\''}</StyledProp>
      <StyledCode>{';'}</StyledCode>
    </code>
  </StyledPre>
);

export const JSXComponent = ({ name, props = {} }) => {
  const propsNode = Object.keys(props).map((prop, index) => (
    [
      <StyledProp key={`propName_${index}`}>{` ${prop}`}</StyledProp>,
      <StyledCode key={`propOperator_${index}`}>{'=\''}</StyledCode>,
      <StyledPropValue key={`propValue_${index}`}>{props[prop]}</StyledPropValue>,
      <StyledCode key={`propQuote_${index}`}>{'\''}</StyledCode>,
    ]
  ));
  return (
    <StyledPre>
      <code>
        <StyledCode>{'<'}</StyledCode>
        <StyledComponent>{name}</StyledComponent>
        {propsNode}
        <StyledCode>{' /> '}</StyledCode>
      </code>
    </StyledPre>
  );
  
};

export default { Import };

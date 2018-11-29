import React from 'react';
import styled from '../themes/styled-components';

interface Props {
  width?: string;
  padding?: string;
  flexDirection?:
    | 'row'
    | 'row-reverse'
    | 'column'
    | 'column-reverse'
    | 'initial'
    | 'inherit';
}

const Card: React.SFC<Props> = ({
  children,
  width,
  padding,
  flexDirection,
}) => (
  <Wrapper width={width} padding={padding} flexDirection={flexDirection}>
    {children}
  </Wrapper>
);

const Wrapper = styled<Props, 'div'>('div')`
  background-color: ${(props) => props.theme.primary};
  border-radius: 0;
  flex: 1;
  display: flex;
  flex-direction: ${(props) =>
    props.flexDirection ? props.flexDirection : 'column'};
  overflow: auto;
  padding: ${(props) => (props.padding ? props.padding : 0)};
  width: ${(props) => (props.width ? props.width : 'auto')};
`;

export default Card;

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';


const RootDiv = styled.div`
  width: 500px;
  height:50px;
  position: relative;
  border: 1px solid;
  text-align: center;
  background: #FFF0F0;
  &:before {
    position: absolute;
    left: 0;
    top: 0;
    content: "A";
  }
`;

const Grandson = styled.span`
  background: red;
`;


class CssCenter2 extends Component {
  render() {
    return (
      <RootDiv>
        <Grandson>
          B This is span tag
        </Grandson>
      </RootDiv>
    );
  }
}

export default CssCenter2;
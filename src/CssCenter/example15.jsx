import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';


const RootDiv = styled.div`
  width: 500px;
  height: 100px;
  position: relative;
  border: 1px solid;
  background: #FFF0F0;
  &:before {
    position: absolute;
    left: 0;
    top: 0;
    content: "A";
  }
  &:after {
    content: "";
    height: 100%;
    vertical-align: middle;
    display: inline-block;
  }
`;

const Son = styled.p`
  vertical-align: middle;
  display: inline-block;
  background: red;
`;


class CssVCenter8 extends Component {
  render() {
    return (
      <RootDiv>
        <Son>
         B This is div tag
        </Son>
      </RootDiv>
    );
  }
}

export default CssVCenter8;
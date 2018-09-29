import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';


const RootDiv = styled.div`
  width: 500px;
  height:50px;
  position: relative;
  border: 1px solid;
  background: #FFF0F0;
  &:before {
    position: absolute;
    left: 0;
    top: 0;
    content: "A";
  }
`;

const Son = styled.div`
  background: red;
  position: absolute;
  left: 180px;
  width: 140px;
`;


class CssCenter4 extends Component {
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

export default CssCenter4;
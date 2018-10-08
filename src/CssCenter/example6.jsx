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
  left: 50%;
  transform: translateX(-50%);
  width: 140px;
`;


class CssCenter6 extends Component {
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

export default CssCenter6;
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
`;

const Son = styled.span`
  background: red;
  line-height: 100px;
`;


class CssVCenter7 extends Component {
  render() {
    return (
      <RootDiv>
        <Son>
          B This is span tag
        </Son>
      </RootDiv>
    );
  }
}

export default CssVCenter7;
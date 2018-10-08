import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';


const RootDiv = styled.div`
  width: 500px;
  height:150px;
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
  top: 50px;
  height:50px;
  width: 200px;
`;


class CssVCenter3 extends Component {
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

export default CssVCenter3;
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';


const RootDiv = styled.div`
  position: relative;
  width: 500px;
  height:100px;
  border: 1px solid;
  background: #FFF0F0;
  &:before {
    position: absolute;
    left: 0;
    top: 0;
    content: "A";
  }
`;

const SonDiv = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  width: 320px;
  height: 50px;
  background: red;
  margin: auto 0;
`;


class CssVCenter2 extends Component {
  render() {
    return (
      <RootDiv>
        <SonDiv>
            B This is div tag
        </SonDiv>
      </RootDiv>
    );
  }
}

export default CssVCenter2;
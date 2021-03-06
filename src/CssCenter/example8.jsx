import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';


const RootDiv = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  width: 500px;
  height:150px;
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
  width: 320px;
  height: 100px;
  position: relative;
  background: #0CB6F0;
  display: flex;
  align-items: center;
  &:before {
    position: absolute;
    left: 0;
    top: 0;
    content: "B";
  }
`;

const Grandson = styled.span`
  background: red;
`;


class CssVCenter1 extends Component {
  render() {
    return (
      <RootDiv>
        <SonDiv>
          <Grandson>
            C This is span tag
          </Grandson>
        </SonDiv>
      </RootDiv>
    );
  }
}

export default CssVCenter1;
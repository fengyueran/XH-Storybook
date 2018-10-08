import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';


const RootDiv = styled.div`
  position: relative;
  width: 500px;
  height:50px;
  border: 1px solid;
  background: #FFF0F0;
  &:before {
    position: absolute;
    left: 0;
    top: 0;
    content: "A";
  }
`;

const Son = styled.ul`
  background: red;
  height: 40px;
  width: fit-content;
  margin: 0 auto;
  padding-left: 0;
  &:before {
    position: absolute;
    left: 100;
    top: 0;
    content: "B";
  }
`;

const Li = styled.li`
  float: left;
  margin : 15px 15px;
`;

class CssHCenter7 extends Component {
  render() {
    return (
      <RootDiv>
        <Son>
          <Li><a href="/">Meat</a></Li>
          <Li><a href="/">Fruits</a></Li>
          <Li><a href="/">Vegetables</a></Li>
        </Son>
      </RootDiv>
    );
  }
}

export default CssHCenter7;
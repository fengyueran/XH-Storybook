import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const RootDiv = styled.div`
  position: relative;
  background: #FFF0F0;
  width: 500px;
  height:100px;
`;

const Table = styled.table`
  width: 500px;
  height:100px;
  border: 1px solid;
  background: #FFF0F0;
`;

const Td = styled.td`
  width: 100%;
  background: #0CB6F0;
`;

const Th = styled.th`
  background: red;
  width: 200px;
  height: 70px;
  vertical-align: middle;
`;

const Son = styled.div`
  height: 30px;
  background: #B0C9F0;
`;

const Text = styled.span`
  position: absolute;
  top: 5px;
  left: 8px;
`;

const PseudoTable = styled.div`
  display: table;
  padding: 2px;
  border: 1px solid;
  width: 500px;
  height:100px;
  background: #0CB6F0;
`;

const PseudoCell = styled.div`
  display: table-cell;
  vertical-align: middle;
  height: 70px;
  width: 200px;
  background:red;
`;

const DDiv = styled.div`
  height: 30px;
  width: 200px;
  background:#B0C9F0;
`;

class CssVCenter6 extends Component {
  render() {
    return (
      <RootDiv>
        <Table>
          <Td>
            <Th>
              <Son>B</Son>
            </Th>
          </Td>
        </Table>
        <Text>
          A
        </Text>
      </RootDiv>
    );
  }
}

export default CssVCenter6;
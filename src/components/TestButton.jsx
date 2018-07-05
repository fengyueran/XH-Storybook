import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TestButton extends Component {
  render() {
    const { background, onClick } = this.props;
    return (
      <button onClick={onClick} style={{ width: 100, height: 30, background }} />
    );
  }
}

TestButton.propTypes = {
  onClick: PropTypes.func,
  background: PropTypes.string,
};

export default TestButton;
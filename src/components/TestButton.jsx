import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TestButton extends Component {
  render() {
    const { background, opacity, onClick } = this.props;
    return (
      <button onClick={onClick} style={{ width: 100, height: 30, background, opacity }} />
    );
  }
}

TestButton.propTypes = {
  onClick: PropTypes.func,
  opacity: PropTypes.number,
  background: PropTypes.string,
};

export default TestButton;
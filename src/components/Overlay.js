import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './../css/Overlay.css';

class Overlay extends Component {
  render() {
    return (
      <div className='overlay' 
           style={{ display: `${this.props.display ? 'block' : 'none'}` }}
           onClick={this.props.unselect}>
           {this.props.photo && <img src={this.props.photo}/>}
      </div>
    );
  }
}

Overlay.propTypes = {

};

export default Overlay;
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './../css/Overlay.css';

class Overlay extends Component {
  render() {
    const { display, src, unselect } = this.props
    return (
      <div className='overlay' 
           style={{ display: `${display ? 'block' : 'none'}` }}
           onClick={unselect}>
        <img src={src} alt={this.props.description && this.props.description._content}/>
        <div className='overlayTitle'>Title: {this.props.title && this.props.title._content ? this.props.title._content : 'N/A'}</div>
        <div className='overlayOwner'>Author: {this.props.owner && this.props.owner.realname ? this.props.owner.realname : 'N/A'}</div>
        <div className='overlayInfo'>{this.props.description && this.props.description._content}</div>
        <div className='overlayDate'>Date: {this.props.dates && this.props.dates.taken ? this.props.dates.taken : 'N/A'}</div>
      </div>
    )
  }
}

Overlay.propTypes = {
  display: PropTypes.bool,
  photo: PropTypes.object,
  src: PropTypes.string,
  unselect: PropTypes.func,
};

export default Overlay;
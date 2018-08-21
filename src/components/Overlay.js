import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './../css/Overlay.css';

class Overlay extends Component {
  render() {
    const { photo, display, src, unselect } = this.props
    const { owner, title, description, dates } = photo && photo
    return (
      <div className='overlay' 
           style={{ display: `${display ? 'block' : 'none'}` }}
           onClick={unselect}>
        <img src={src} alt={description && description._content}/>
        <div className='overlayTitle'>Title: {title && title._content ? title._content : 'N/A'}</div>
        <div className='overlayOwner'>Author: {owner && owner.realname ? owner.realname : 'N/A'}</div>
        <div className='overlayInfo'>{description && description._content}</div>
        <div className='overlayDate'>Date: {dates && dates.taken ? dates.taken : 'N/A'}</div>
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
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Photos extends Component {
  render() {
    return (
      <div className='photoContainer'>
        {this.props.photos && this.props.photos.map(photo => {
          const src = `https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`
          return (
            <div key={photo.id}>
                <img src={src} alt={photo.title}/>
                {/* <p>{photo.title}</p> */}
            </div>
          )
        })}
      </div>
    );
  }
}

Photos.propTypes = {
  photos : PropTypes.array,
};

export default Photos;
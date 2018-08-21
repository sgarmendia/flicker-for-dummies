import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './../css/Photos.css';

class Photos extends Component {
  render() {
    return (
      <div className='photoContainer'>
        {this.props.photos && this.props.photos.map((photo,i) => {
          const src = `https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`
          return (
            <div key={photo.id} className='imgContainer'>
                <img src={src} alt={photo.title}
                     onClick={this.props.selected}
                     id={photo.id}
                />
                <div className='photoInfo' onClick={()=>this.props.getPhoto(photo.id)}>{photo.title}</div> 
            </div>
          )
        })}
      </div>
    );
  }
}

Photos.propTypes = {
  photos: PropTypes.array,
  selected: PropTypes.func,
  getPhoto: PropTypes.func,
};

export default Photos;
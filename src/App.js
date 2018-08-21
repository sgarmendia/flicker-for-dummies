import React, { Component } from 'react';
import FlickrApi from './Api/FlickrApi'
import Photos from './components/Photos';
import Header from './components/Header';
import Overlay from './components/Overlay';

class App extends Component {
  constructor(props) {
    super(props);
      this.state = {
        photos: {},
        photoData: {},
        overlay: false,
        error: null,
      }
  }

  componentDidMount() {
    this.getPhotos('landscape')
  }

  getPhotos = async tag => {
    try {
      const photos = await FlickrApi.fetchPhotos(tag)
      this.setState({ photos })
    } catch (error) {
      this.setState({ error });
    }
  }

  getPhoto = id => {
    try {
      return FlickrApi.fetchPhotoData(id)
    } catch (error) {
      this.setState({ error });
    }
  }

  getFlickrPage = async id => {
    this.setState({ photoData: await this.getPhoto(id) },() => {
      const flickrpage = this.state.photoData.urls.url[0]._content.toString()
      window.open(flickrpage)
    })
  }
  
  handleSearch = e => {
    const search = e.target.value
    clearTimeout(this.delayed)
    this.delayed = setTimeout(() => {
      if(!search) return
      this.getPhotos(search)
    }, 1000)
  }

  handleClickPhoto = async e => {
    const src = e.target.src
    this.setState({ photoData: await this.getPhoto(e.target.id) },() => {
    this.setState({ overlay: true, src })
    })
  }

  handleHidePhoto = () => {
    this.setState({ overlay: false, src: undefined, photoData: {} })
  }

  render() {
    return (
      <div className='container'>
        <Header search={this.handleSearch} />
        {this.state.error
          ? <h2>Oops, something went wrong!</h2>
          : <Photos 
              photos={this.state.photos.photo}
              selected={this.handleClickPhoto}
              getPhoto={this.getFlickrPage}
            />
        }
        <Overlay 
          photo={this.state.photoData}
          display={this.state.overlay}
          unselect={this.handleHidePhoto}
          src={this.state.src}
        />
      </div>
    )
  }
}

export default App;

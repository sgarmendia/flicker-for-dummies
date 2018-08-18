import React, { Component } from 'react';
import Photos from './components/Photos';
import Header from './components/Header';

class App extends Component {
  constructor(props) {
    super(props);
      this.state = {
        photos: [],
        err: null,
      }
  }

  componentDidMount() {
    //const url = `https://api.flickr.com/services/rest/?method=flickr.photos.getRecent&api_key=${process.env.REACT_APP_API_KEY}&format=json&nojsoncallback=1`
    this.fetchPhotos('landscape')
  }

  fetchPhotos = tag => {
    //const url = `https://api.flickr.com/services/rest/?method=flickr.photos.getRecent&api_key=${process.env.REACT_APP_API_KEY}&format=json&nojsoncallback=1`
    const url = `https://api.flickr.com/services/rest/?method=flickr.photos.search&tags=${tag}&api_key=${process.env.REACT_APP_API_KEY}&format=json&nojsoncallback=1&per_page=50&page=1`
    fetch(url)
      .then(res => res.json())
      .then(({ photos }) => this.setState({ photos }))
      .catch(err => this.setState({ err }))
  }
  
  handleSearch = e => {
    const search = e.target.value
    clearTimeout(this.delayed)
    this.delayed = setTimeout(() => {
      if(!search) return
      this.fetchPhotos(search)
    }, 1000)
  }

  render() {
    return (
      <div className='container'>
        <Header search={this.handleSearch} />
        {this.state.err
          ? <h2>Oops, something went wrong!</h2>
          : <Photos photos={this.state.photos && this.state.photos.photo} />}
      </div>
    )
  }
}

export default App;

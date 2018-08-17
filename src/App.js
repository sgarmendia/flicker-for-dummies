import React, { Component } from 'react';
import Photos from './components/Photos';
import Header from './components/Header';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
      this.state = {
        photos: [],
        err: null,
      }
  }

  componentDidMount() {
    const url = `https://api.flickr.com/services/rest/?method=flickr.photos.getRecent&api_key=${process.env.REACT_APP_API_KEY}&format=json&nojsoncallback=1`
    fetch(url)
      .then(res => res.json())
      .then(({ photos }) => this.setState({ photos }))
      .catch(err => this.setState({ err }))
  }
  
  
  render() {
    return (
      <div className="App">
        <Header />
        {this.state.err
          ? <h2>Oops, something went wrong!</h2>
          : <Photos photos={this.state.photos && this.state.photos.photo} />}
      </div>
    )
  }
}

export default App;

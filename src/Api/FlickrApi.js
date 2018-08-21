function flickrAPI() {

  function fetchPhotos(tag) {
    //const url = `https://api.flickr.com/services/rest/?method=flickr.photos.getRecent&api_key=${process.env.REACT_APP_API_KEY}&format=json&nojsoncallback=1`
    const url = `https://api.flickr.com/services/rest/?method=flickr.photos.search&tags=${tag}&api_key=${process.env.REACT_APP_API_KEY}&format=json&nojsoncallback=1&per_page=50&page=1`
    return new Promise ((resolve,reject) => {
      fetch(url)
        .then(res => res.json())
        .then(({ photos }) => resolve(photos))
        .catch(err => reject(err))
    })
  }

  function fetchPhotoData(id) {
    const url = `https://api.flickr.com/services/rest/?method=flickr.photos.getInfo&api_key=${process.env.REACT_APP_API_KEY}&photo_id=${id}&format=json&nojsoncallback=1`
    return new Promise ((resolve,reject) => {
      fetch(url)
        .then(res => res.json())
        .then(({ photo }) => resolve(photo))
        .catch(err => reject(err))
    })
  }

  function fetchUser(id) {
    const url = `https://api.flickr.com/services/rest/?method=flickr.people.getInfo&api_key=${process.env.REACT_APP_API_KEY}&user_id=${id}&format=json&auth_token=${process.env.REACT_APP_AUTH_TOKEN}&api_sig=${process.env.REACT_APP_API_SIG}`
    return new Promise ((resolve,reject) => {
      fetch(url)
        .then(res => res.json())
        .then(user => resolve(user))
        .catch(err => reject(err))
    })
  }

  return {
    fetchPhotos,
    fetchPhotoData,
    fetchUser,
  }
}

export default flickrAPI()
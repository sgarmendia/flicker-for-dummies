import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Header extends Component {


  render() {
    return (
      <div className="App-header">
        <input className='searchBox' placeholder='Enter search term'></input>
      </div>
    );
  }
}

Header.propTypes = {

};

export default Header;
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import moduleName from './../css/Header.css';

class Header extends Component {
  render() {
    return (
      <div className='header'>
        <input className='searchBox' 
               type='search'
               autofocus='autofocus'
               placeholder='Explore the world...'
               onChange={this.props.search}
        />
      </div>
    );
  }
}

Header.propTypes = {

};

export default Header;
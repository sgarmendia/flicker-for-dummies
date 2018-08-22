import React from 'react';
import ReactDOM from 'react-dom';
import Photos from '../Photos';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Photos />, div);
  ReactDOM.unmountComponentAtNode(div);
});


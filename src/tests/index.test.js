import React from 'react';
import ReactDOM from 'react-dom';
import App from  '../App';
import AppProvider from '../contexts/AppContext';

jest.mock('react-dom', () => ({ render: jest.fn() }));

describe('index.js', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    div.id = 'root';
    document.body.appendChild(div);
    require('../index.js');
    expect(ReactDOM.render).toHaveBeenCalledWith(
      <React.StrictMode>
        <AppProvider>
          <App />
        </AppProvider>
      </React.StrictMode>,
     div
    );
  });
});

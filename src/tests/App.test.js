import React from 'react';
import { render } from '@testing-library/react';
import App from '../App';
import AppProvider from '../contexts/AppContext';

describe('<App />', () => {
  it('should render without crashing', () => {
    const { getByText } = render(<AppProvider>
      <App />
    </AppProvider>);
    expect(getByText(/Contact/i)).toBeTruthy();
  })
});
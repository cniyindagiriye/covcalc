import React from 'react';
import { render } from '@testing-library/react';
import Continents from '../../components/Continents';
import AppProvider from '../../contexts/AppContext';

describe('<App />', () => {
  it('should render without crashing', () => {
    const { getByText } = render(<AppProvider>
      <Continents />
    </AppProvider>);
    expect(getByText(/continents/i)).toBeTruthy();
  })
});
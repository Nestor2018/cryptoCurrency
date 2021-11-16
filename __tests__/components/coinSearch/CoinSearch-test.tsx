import React from 'react';
import {render, act} from '@testing-library/react-native';

import CoinSearch from '../../../src/components/coinSearch/CoinSearch.tsx';

let component;

describe('<CoinSearch/>', () => {
  beforeEach(() => {
    component = render(<CoinSearch />);
  });

  it('Renderiza correctamente', () => {
    expect(component.getByTestId('coinSearch')).toBeDefined();
    expect(component.getByTestId('input')).toBeDefined();
    act(() => {
      component.getByTestId('input').props.onChangeText('coin');
    });
  });
});

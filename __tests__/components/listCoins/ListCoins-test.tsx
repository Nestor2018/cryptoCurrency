import React from 'react';
import {render, act, waitFor} from '@testing-library/react-native';

import ListCoins from '../../../src/components/listCoins/ListCoins';

let component;

describe('<ListCoins/>', () => {
  beforeEach(() => {
    component = render(<ListCoins />);
  });
  it('Renderiza correctamente', () => {
    expect(component.getByTestId('listCoins')).toBeDefined();
  });
});

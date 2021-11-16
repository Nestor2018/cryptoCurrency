import React from 'react';
import {render, act, waitFor} from '@testing-library/react-native';

import CoinItem from '../../../src/components/listCoins/CoinItem.tsx';
import {coinMock} from '../../../__mocks__/coin.ts';

let component;

describe('<CoinSearch/>', () => {
  beforeEach(() => {
    component = render(<CoinItem coin={coinMock} />);
  });

  it('Renderiza correctamente', () => {
    expect(component.getByTestId('coinItem')).toBeDefined();
  });
});

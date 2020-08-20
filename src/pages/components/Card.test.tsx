import React from 'react';
import { shallow } from 'enzyme';

import menuData from '../../services/menu-data.json';
import Card from './Card';

const menu = menuData['16295'];

describe('Card component tests', () => {
  const wrapper = shallow(<Card data={menu} />);

  it('should render Card properly', () => {
    expect(wrapper.find('.card')).toHaveLength(1);
  })

  it('should have link to product landing page', () => {
    expect(wrapper.find('Link').prop('to')).toEqual(`/product/${menu.itemId}`);
  });

  it('should image and <CardDetails />', () => {
    expect(wrapper.find('img')).toHaveLength(1);
    expect(wrapper.find('img').prop('src')).toEqual(menu.imageUrl);
    expect(wrapper.find('CardDetails')).toHaveLength(1);
  });
});

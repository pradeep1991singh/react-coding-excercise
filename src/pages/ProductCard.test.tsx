import React from 'react';
import { shallow } from 'enzyme';

import menuData from '../services/menu-data.json'
import ProductCard from './ProductCard';

const menu = menuData['16295'];

describe('ProductCard component tests', ()=> {
  const handleChangeMock = jest.fn();
  const wrapper = shallow(<ProductCard data={menu} handleChange={handleChangeMock}/>);

  it('should have page title', ()=> {
    expect(wrapper.find('.page-title')).toHaveLength(1);
    expect(wrapper.find('.page-title').text()).toEqual(menu.name);
  });

  it('should have card list and render properly', ()=> {
    expect(wrapper.find('.card')).toHaveLength(1);
  });

  it('should hit callback when available value changes', ()=> {
    const event = {
      preventDefault() {},
      target: { value: 'false', name: 'available' }
    };
    wrapper.find('[name="available"]').simulate('change', event);
    expect(handleChangeMock).toBeCalledTimes(1);
    expect(handleChangeMock).toBeCalledWith(menu.itemId, 'available', 'false');
  });

  it('should hit callback when price value changes', ()=> {
    const event = {
      preventDefault() {},
      target: { value: 150, name: 'price' }
    };
    wrapper.find('[name="price"]').simulate('change', event);
    expect(handleChangeMock).toBeCalledWith(menu.itemId, 'price', 150);
  });
});

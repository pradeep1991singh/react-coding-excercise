import React from 'react';
import { shallow } from 'enzyme';

import menuData from '../services/menu-data.json'
import Home from './Home';

describe('Home component tests', ()=> {
  const menuCount = Object.keys(menuData).length
  const wrapper = shallow(<Home menu={menuData} />);

  it('should have page title', ()=> {
    expect(wrapper.find('.page-title')).toHaveLength(1);
    expect(wrapper.find('.page-title').text()).toEqual('Home');
  });

  it('should have card list and render properly', ()=> {
    expect(wrapper.find('.card-list')).toHaveLength(1);
    expect(wrapper.find('Card')).toHaveLength(menuCount);
  });
});

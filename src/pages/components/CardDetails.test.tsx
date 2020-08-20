import React from 'react';
import { shallow } from 'enzyme';

import menuData from '../../services/menu-data.json'
import CardDetails from './CardDetails';

const menu = menuData['16295'];

describe('CardDetails component tests', () => {
  const wrapper = shallow(<CardDetails data={menu} />);

  it('should render CardDetails properly', () => {
    expect(wrapper.find('.card-details')).toHaveLength(1);
  })

  it('should have category, description, available, price and matches values', ()=> {
    const category = wrapper.find('.category');
    expect(category).toHaveLength(1);
    let isExist = category.text().indexOf(menu.category) > -1
    expect(isExist).toBeTruthy();

    const description =  wrapper.find('.description')
    expect(description).toHaveLength(1);
    isExist = description.text().indexOf(menu.description) > -1
    expect(isExist).toBeTruthy();

    const available =  wrapper.find('.available')
    expect(available).toHaveLength(1);
    isExist = available.text().toString().indexOf(menu.available.toString()) > -1
    expect(isExist).toBeTruthy();

    const price =  wrapper.find('.price')
    expect(price).toHaveLength(1);
    isExist = price.text().toString().indexOf(menu.price.toString()) > -1
    expect(isExist).toBeTruthy();
  });
});

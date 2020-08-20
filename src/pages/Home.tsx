import React from 'react';

import { IMenuData } from '../typings';
import Card from './components/Card'

const Home = (props: any) => {
  let menu: IMenuData = props.menu;
  const menuList = Object.keys(menu).map(id => (
    <div key={id}>
      <Card data={menu[id]} />
    </div>
  ))

  return (
    <div className="page-container">
      <h1 className="page-title" data-testid="page-title">Home</h1>
      <div className="card-list">
        {menuList}
      </div>
    </div>
  );
};

export default Home;

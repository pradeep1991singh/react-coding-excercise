import React, {Component} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import menuData from './services/menu-data.json';
import { IMenuData } from './typings';

import Home from './pages/Home'
import ProductCard from './pages/ProductCard'
import './App.css';

const NoMatch = () => <h1>404 Not Found</h1>

interface IAppState {
  menu: IMenuData;
}

class App extends Component<any, IAppState> {
  constructor(props: any) {
    super(props);
    this.state = {
      menu: menuData,
    };
  }

  handleChange = (itemId: string, fieldName: string, fieldNewValue: string) => {
    let { menu } = this.state;
    if (menu[itemId] && menu[itemId][fieldName]) {
      menu[itemId][fieldName] = fieldNewValue;
      this.setState({ menu });
      console.log("Full Menu: ", menu);
    }
  }

  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/">
            <Home menu={this.state.menu} />
          </Route>
          <Route
            exact
            path="/product/:id"
            render={routeProps => {
              const singleMenu = this.state.menu[routeProps.match.params.id]
              return singleMenu
                ? <ProductCard data={singleMenu} handleChange={this.handleChange} />
                : <NoMatch />
            }}
          ></Route>
          <Route component={NoMatch} />
        </Switch>
      </Router>
    );
  }
}

export default App;

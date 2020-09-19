import React, { Component } from 'react'

import Route from './route'
import routers from './route/router'
import {BrowserRouter, NavLink} from 'react-router-dom';

export default class main extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <NavLink to="/home">go home</NavLink>
          <NavLink to="/detail">go detail</NavLink>
        </div>
        <div>
          <Route router = { routers } />
        </div>
      </BrowserRouter>
      
    )
  }
}

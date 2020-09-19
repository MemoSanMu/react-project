import React, { Component } from 'react'

import Route from '../../route'

import { NavLink } from 'react-router-dom';


export default class Home extends Component {
    render() {
        const { router } = this.props
        return (
            <div>
                <NavLink to="/home/subPage">go subpage</NavLink>
                this is homg
                <Route router = { router } />
            </div>
        )
    }
}

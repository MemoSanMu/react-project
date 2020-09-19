import Routers from './router';

import React from 'react';

import RouterView from './routerView';

class Route extends React.Component {
    render(){
        const {router}= this.props;
        return <RouterView router={router?router:Routers}></RouterView>
    }
}
export default Route;

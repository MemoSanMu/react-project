import {Switch,Route} from 'react-router-dom';

import React from 'react';

class Maps extends React.Component{
    render(){
        const {router} = this.props;
        return <Switch>
            {
                router.length && router.map(item=>{
                    return<Route key={item.id} path={item.path} component={()=>{
                        const Component = item.component;
                        const Children = item.children === undefined ? [] : item.children; 
                        return <Component router={Children}></Component>
                    }}></Route>
                })
            }
        </Switch>
    }
}

export default Maps;

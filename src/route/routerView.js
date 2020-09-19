import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

class RouterView extends React.Component {
    render() {
        let { router } = this.props,
        isRedirect = router && router.length && router.filter(val => val.redirect),
        RouteRedirect = isRedirect && isRedirect.length && isRedirect.map(val => <Redirect from = {val.path} key={val} to={val.redirect} />);
        return (
            <Switch>
                {
                    router && router.map((v, i) => {
                        return v.component && <Route path={v.path} key={i} render = {(api) => {
                            return <v.component router = { v.children } { ...api }></v.component>
                        }} />
                    }).concat(RouteRedirect)
                }
            </Switch>
        )
    }
}

export default RouterView;
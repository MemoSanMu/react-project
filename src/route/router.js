import HomePage from '../container/home';

import Detail from '../container/detail';

import SubPage from '../container/home/subpage'

const Routers = [
    {
        "path":"/home",
        "id":"001",
        "component":HomePage,
        "name":"home",
        children:[
            {
                "path":"/home/subpage",
                "id":"001001",
                "component":SubPage,
                "name":"SubPage"
            }
        ]
    },
    {
        "path":"/detail",
        "id":"002",
        "component":Detail,
        "name":"detail"
    },
    {
        path: '/',
        redirect: '/home'
    }
]

export default Routers;
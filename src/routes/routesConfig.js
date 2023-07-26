import Cart from '../pages/Cart';

import Shop from '../pages/Shop';

const routesConfig = [
    {
        path: '/*', 
        element: <Shop></Shop>
    },
    {
        path: '/shop',
        element: <Shop></Shop>
    },
    {
        path: '/cart',
        element: <Cart></Cart>
    },
];

export default routesConfig
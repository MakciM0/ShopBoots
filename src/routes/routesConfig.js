import Cart from '../pages/Cart';
import ItemPage from '../pages/ItemPage';
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
        path: '/shop/:name',
        element: <ItemPage></ItemPage>
    },
    {
        path: '/cart',
        element: <Cart></Cart>
    },
];

export default routesConfig
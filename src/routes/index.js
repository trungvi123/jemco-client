import routes from '../config/routeConfig';
import {
    Home,
    Cart,
    Catalog,
    Product,
    Checkouts,
    Search,
    AddProduct,
    Admin,
    ProductManagement,
    Login,
    ReturnGoods,
    ReturnMoney,
    Insurance,
    Contact,
    About,
    Register
} from '../pages';

export const publicRoute = [
    { path: routes.home, element: <Home></Home> },
    { path: routes.cart, element: <Cart></Cart> },
    { path: routes.catalog, element: <Catalog></Catalog> },
    { path: routes.product, element: <Product></Product> },
    { path: routes.checkouts, element: <Checkouts></Checkouts> },
    { path: routes.search, element: <Search></Search> },
    { path: routes.login, element: <Login></Login> },
    { path: routes.adminLogin, element: <Login></Login> },
    { path: routes.register, element: <Register></Register> },
    { path: routes.returnGoods, element: <ReturnGoods></ReturnGoods> },
    { path: routes.returnMoney, element: <ReturnMoney></ReturnMoney> },
    { path: routes.insurance, element: <Insurance></Insurance> },
    { path: routes.contact, element: <Contact></Contact> },
    { path: routes.about, element: <About></About> },


];

export const privateRoute = [
    { path: routes.addProduct, element: <AddProduct></AddProduct> },
    { path: routes.admin, element: <Admin></Admin> },
    { path: routes.productManagement, element: <ProductManagement></ProductManagement> },
];

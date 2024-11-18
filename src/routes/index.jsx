import { createRootRoute, createRoute, createRouter, Outlet } from '@tanstack/react-router';
import { Header, Footer } from '../components';
import { Home, CartShopping, Register, ProductDetail } from '../pages';

const rootRoute = createRootRoute({
    component:() => (
        <div className="font-sans flex h-full w-full flex-col">
            <Header />
            <main className='min-h-screen flex flex-grow p-4 justify-center'>
                <Outlet /> 
            </main>
            <Footer />
        </div>
    )
});

const homeRoute = createRoute({
    getParentRoute: () => rootRoute,
    path:"/",
    component:Home
});

const cartRoute = createRoute({
    getParentRoute:() => rootRoute,
    path:"/cart",
    component:CartShopping
});

const registerRoute = createRoute({
    getParentRoute:() => rootRoute,
    path:"/register",
    component:Register
});

const productDetailRoute = createRoute({
    getParentRoute:() => rootRoute,
    path:"/product-detail",
    component:ProductDetail
});

const routeTree = rootRoute.addChildren([homeRoute, cartRoute, registerRoute, productDetailRoute]);

export const router = createRouter({ routeTree });

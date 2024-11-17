import { createRootRoute, createRoute, createRouter, Outlet } from '@tanstack/react-router';
import { Header, Footer } from '../components';
import {Home} from '../pages';

const rootRoute = createRootRoute({
    component:() => (
        <div className="font-sans flex h-full w-full flex-col">
            <Header />
            <main className='min-h-full flex flex-grow p-4 justify-center'>
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

const routeTree = rootRoute.addChildren([homeRoute]);

export const router = createRouter({ routeTree });

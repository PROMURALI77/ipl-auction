import { createBrowserRouter } from 'react-router-dom';
import NotFound from './other/NotFound';
import Home from './home/Home';
export const routes = createBrowserRouter([
    {
        path: '*',
        element: <NotFound />,
    },
    {
        path : '/',
        element : <Home />
    }
]);

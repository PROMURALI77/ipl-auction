import { createBrowserRouter } from 'react-router-dom';
export const routes = createBrowserRouter([
    {
        path: '*',
        element: (
            <div className='text-3xl text-red-500'>404 page not found</div>
        ),
    },
]);

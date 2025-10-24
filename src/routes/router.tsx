import { createBrowserRouter } from 'react-router-dom';
import PublicLayout from 'src/layouts/public';
import { ErrorBoundary } from './ErrorBoundary';
import Dashboard from '../pages/dashboard';
import Quiz from '@pages/quiz';

const router = createBrowserRouter([
    {
        path: '/',
        element: <PublicLayout />,
        errorElement: <ErrorBoundary />,
        children: [
            {
                index: true,
                element: <Dashboard />,
            },
            {
                path: '/quiz',
                element: <Quiz />,
            },
        ],
    },
    {},
]);

export default router;

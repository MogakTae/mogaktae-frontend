import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import RootLayout from './pages/Root';

import ErrorPage from './pages/Error';
import MainPage from './pages/MainPage';
import GithubPage from './pages/GithubPage';

const router = createBrowserRouter([
    {
        path: '/',
        element: <RootLayout />,
        errorElement: <ErrorPage />,
        children: [
            { index: true, element: <MainPage /> },
            {
                path: 'github',
                element: <GithubPage />,
            },
        ],
    },
]);

function App() {
    return <RouterProvider router={router} />;
}
export default App;

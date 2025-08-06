import { createBrowserRouter } from 'react-router-dom';
import RootPage from '../pages/Root';
import ErrorPage from '../pages/Error';
import MainPage from '../pages/MainPage';
import Greeting from '../pages/Greeting';
import CreateGroupPage from '../pages/CreateGroupPage';
import GithubPage from '../pages/GithubPage';
import GitHubLoginCallback from '../pages/GithubLoginCallback';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <RootPage />,
        errorElement: <ErrorPage />,
        children: [
            {
                index: true,
                element: <MainPage />,
            },
            {
                path: 'main',
                element: <GitHubLoginCallback />,
            },
            {
                path: 'github',
                element: <GithubPage />,
            },
            {
                path: 'create',
                element: <CreateGroupPage />,
            },
            {
                path: 'greeting',
                element: <Greeting />,
            },
        ],
    },
]);

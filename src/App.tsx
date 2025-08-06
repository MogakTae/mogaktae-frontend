import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import RootLayout from './pages/Root';

import ErrorPage from './pages/Error';
import MainPage from './pages/MainPage';
import GithubPage from './pages/GithubPage';
import Greeting from './pages/Greeting';
import CreateGroupPage from './pages/CreateGroupPage';
import ChallengeResultPage from './pages/ChallengeResultPage';

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
            {
                path: 'create',
                element: <CreateGroupPage />,
            },
            {
                path: 'greeting',
                element: <Greeting />,
            },
            {
                path: 'challenge-result', 
                element: <ChallengeResultPage />,
            },
        ],
    },
]);

function App() {
    return <RouterProvider router={router} />;
}
export default App;
import { createBrowserRouter } from "react-router-dom";
import Layout from "./pages/Layout";
import ErrorPage from "./pages/ErrorPage";
import HomePage from "./pages/HomePage";
import ProjectDashboard from "./pages/ProjectDashboard";
import UserDashboard from "./pages/UserDashboard";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout/>,
        errorElement: <ErrorPage/>,
        children: [
            {index: true, element: <HomePage/>},
            {path: '/projects', element: <ProjectDashboard />},
            {path: '/users', element: <UserDashboard />},
            {path: '/analytics', element: <div className="text-center py-12 text-gray-600">Analytics page coming soon...</div>},
            {path: '/settings', element: <div className="text-center py-12 text-gray-600">Settings page coming soon...</div>},
        ]
    }
])

export default router;
import React, { Suspense } from "react"
import { createBrowserRouter, RouterProvider, Navigate, Outlet } from "react-router-dom"
import { RouteObject } from "react-router"
import { useAuth } from "../provider/authProvider"
import { Spin } from "antd"

const SuspenseComponent = (Component: React.ComponentType) => (props: object) => {
  return (
    <Suspense fallback={<Spin />}>
      <Component {...props} />
    </Suspense>
  )
}
const Login = SuspenseComponent(React.lazy(() => import("@/pages/User/Login")))
const Home = SuspenseComponent(React.lazy(() => import("@/pages/Home")))
const About = SuspenseComponent(React.lazy(() => import("@/pages/About")))
const Canvas = SuspenseComponent(React.lazy(() => import("@/pages/Canvas")))

const Routes = () => {
  const { token } = useAuth()

  const AuthLogin = () => {
    if (token) {
      return <Navigate to="/" replace />
    }
    return <Login />
  }

  const PermissionRouter = () => {
    if (!token) {
      return <Navigate to="/login" replace />
    }

    return <Outlet />
  }

  const router: RouteObject[] = [
    {
      path: "/",
      element: <PermissionRouter />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/canvas",
          element: <Canvas />,
        },
      ],
    },
    {
      path: "/login",
      element: <AuthLogin />,
    },
  ]

  const route = createBrowserRouter(router)

  return <RouterProvider router={route} />
}

export default Routes

// File: client/components/ProtectedRoute.tsx

import { useAuth0 } from '@auth0/auth0-react'
import { Navigate } from 'react-router-dom'

export default function ProtectedRoute({ children }: { children: JSX.Element }) {
  const { isAuthenticated, isLoading } = useAuth0()

  if (isLoading) {
    return <p>Loading...</p>
  }

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />
  }

  return children
}

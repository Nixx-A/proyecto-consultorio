import { Navigate } from 'react-router-dom'
import { useAuth } from '../Context/authContext'
import { DnaSpinner } from './Spinner'

export default function ProtectedRoute ({ children }) {
  const { user, loading } = useAuth()

  if (loading) return <DnaSpinner />
  if (!user) return <Navigate to={'/login'} />

  return <>{children}</>
}

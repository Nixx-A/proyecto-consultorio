import { Routes, Route, useLocation } from 'react-router-dom'
import { Home } from './pages/Home'
import { Login } from './pages/Login'
import { Register } from './pages/Register'
import { Patients } from './pages/Patients'
import { AuthProvider } from './Context/authContext'
import { PatientHistory } from './pages/PatientHistory'
import ProtectedRoute from './Components/auth/ProtectedRoute'

function App () {
  return (
    <main className='h-screen w-screen a'>
      <AuthProvider>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='patients' element={
            <ProtectedRoute >
              <Patients />
            </ProtectedRoute>
          } />
          <Route path='patients/:id' element={<PatientHistory />} />
        </Routes>
      </AuthProvider>
    </main>
  )
}

export default App

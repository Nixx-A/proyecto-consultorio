/* eslint-disable no-sequences */
import { createContext, useContext, useEffect, useState } from 'react'
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth'
import { auth } from '../firebase'
import { useNavigate } from 'react-router-dom'

export const authContext = createContext()

export const useAuth = () => {
  const context = useContext(authContext)
  if (!context) throw new Error('There is not auth provider')
  return context
}

export function AuthProvider ({ children }) {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)
  const navigate = useNavigate()

  const signup = async (email, password) => {
    await createUserWithEmailAndPassword(auth, email, password)
    console.log(email, password)
    console.log('exito!')
  }

  const login = async (email, password) => await signInWithEmailAndPassword(auth, email, password)

  const logout = async () => {
    try {
      await signOut(auth)
      navigate('/')
    } catch (error) {
      console.error(error)
    }
  }
  const loginWithGoogle = () => {
    const googleProider = new GoogleAuthProvider()
    return signInWithPopup(auth, googleProider)
  }

  const resetPassword = (email) => {
    sendPasswordResetEmail(auth, email)
  }

  useEffect(() => {
    const unsuscribe = onAuthStateChanged(auth, currentUser => {
      setUser(currentUser)
      setLoading(false)
    })
    return () => unsuscribe()
  }, [])

  return (
    <authContext.Provider value={{ user, loading, signup, login, loginWithGoogle, resetPassword, logout }}>
      {children}
    </authContext.Provider>
  )
}

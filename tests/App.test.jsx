import React from 'react'
import { render, screen, waitFor } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { AuthProvider } from '../Context/authContext'
import { Home } from '../pages/Home'
import { vi } from 'vitest'

// I dont know how to make it work :(
vi.mock('../Context/authContext', () => ({
  useAuth: vi.fn()
}))

describe('Home', () => {
  test('renders login and register links when user is not authenticated', async () => {
    const mockUseAuth = vi.fn(() => ({
      user: null,
      loading: false
    }))
    AuthProvider.useAuth.mockImplementation(mockUseAuth)

    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    )

    const loginLink = screen.getByRole('link', { name: /iniciar sesión/i })
    expect(loginLink).toBeInTheDocument()

    const registerLink = screen.getByRole('link', { name: /registrarse/i })
    expect(registerLink).toBeInTheDocument()
  })

  test('redirects to patients page when user is authenticated', async () => {
    // Mock the useAuth hook to return an authenticated user and loading as false
    const mockUseAuth = vi.fn(() => ({
      user: { accessToken: 'mockAccessToken' },
      loading: false
    }))
    AuthProvider.useAuth.mockImplementation(mockUseAuth)

    const mockNavigate = vi.fn()
    jest.mock('react-router-dom', () => ({
      ...jest.requireActual('react-router-dom'),
      useNavigate: () => mockNavigate
    }))

    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    )

    await waitFor(() => {
      expect(mockNavigate).toHaveBeenCalledWith('patients')
    })
  })
})

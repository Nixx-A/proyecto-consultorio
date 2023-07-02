import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../Context/authContext'
import { useEffect, useState } from 'react'
import { BsFillArrowLeftCircleFill } from 'react-icons/bs'
import { Alert } from '../Components/auth/Alert'

/* eslint-disable react/no-unescaped-entities */
export function Login () {
  const { login, loginWithGoogle, resetPassword } = useAuth()
  const navigate = useNavigate()

  const [error, seterror] = useState(null)
  const [btnDisabled, setBtnDisabled] = useState(true)
  const [user, setUser] = useState({
    email: '',
    password: ''
  })

  const handleSubmit = async (e) => {
    e.preventDefault()
    seterror('')
    try {
      await login(user.email, user.password)
      navigate('/patients')
    } catch (e) {
      seterror(e.message)
    }
  }

  const handleChange = ({ target: { name, value } }) => {
    setUser({ ...user, [name]: value })
  }

  useEffect(() => {
    if (user.email === '' || user.password === '') {
      setBtnDisabled(true)
    } else {
      setBtnDisabled(false)
    }
  }, [user])

  const handleResetPassword = async () => {
    if (!user.email) return seterror('Please enter your email')
    try {
      await resetPassword(user.email)
      seterror('We sent you an email with the link to reset your password')
    } catch (e) {
      throw new Error(e)
    }
  }

  const handleGoogleSignin = async () => {
    try {
      await loginWithGoogle()
      navigate('/patients')
    } catch (e) {
      seterror(e.message)
    }
  }

  return (
    <section className="flex h-screen justify-center items-center">
      <div className='w-5/6 lg:w-2/6'>
        {error && <Alert message={error} />}
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-2" onSubmit={handleSubmit}>
          <Link to={'/'}><BsFillArrowLeftCircleFill className='mb-2 w-5 h-5 cursor-pointer' /></Link>
          <h2 className=' font-semibold text-xl mb-2'>Iniciar Sesion</h2>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm  mb-1" htmlFor="email">Correo</label>
            <input className="shadow appearance-none border dounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-none" type="email" onChange={handleChange} name="email" placeholder="youremail@company.ltd" />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm  mb-1" htmlFor="password">Contraseña</label>
            <input className="shadow appearance-none border dounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-none" type="password" onChange={handleChange} name="password" id="password" placeholder="******" />
          </div>

          <div className="flex items-center justify-between">
            <button name='login-btn' className={btnDisabled ? 'bg-gray-300 text-white cursor-not-allowed px-2 py-1 rounded-md text-sm md:text-base ' : 'rounded-md bg-blue-500 hover:bg-blue-700 duration-200 focus:outline-none text-white focus:shadow-outline px-2 py-1 text-sm md:text-base '} disabled={btnDisabled}>Iniciar sesion</button>
            <a className="inline-block align-baseline font-bold text-xs lg:text-sm text-blue-500 hover:text-blue-800 duration-100" href="#" onClick={handleResetPassword}>Olvidaste tu contraseña?</a>
          </div>
        </form>

        {/*  <p className="text-small text-black flex justify-between">No tenes cuenta?<Link className="font-semibold" to={'/register'}>Registrar</Link></p> */}

        <div onClick={handleGoogleSignin} className='flex items-center justify-center gap-2 text-black bg-slate-50 hover:bg-slate-200 duration-200 shadow-md rounded cursor-pointer border-2 border-gray-300 py-2 px-4 w-full'>
          <img className='w-4 inline' src='/google.png' />
          <button className="inline">Iniciar sesion con Google</button>
        </div>
      </div>
    </section>
  )
}

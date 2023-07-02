import { useEffect, useState } from 'react'
import { BsFillArrowLeftCircleFill } from 'react-icons/bs'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../Context/authContext'
import { Alert } from '../Components/auth/Alert'

export function Register () {
  const { signup } = useAuth()
  const navigate = useNavigate()

  const [btnDisabled, setBtnDisabled] = useState(true)
  const [error, seterror] = useState(null)
  const [user, setUser] = useState({
    email: '',
    password: ''
  })

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

  const handleSubmit = async (e) => {
    e.preventDefault()
    seterror('')
    try {
      await signup(user.email, user.password)
      navigate('/patients')
    } catch (e) {
      seterror(e.message)
      // if (e.code === 'auth/internal-error') seterror('Invalid email')
      // if (e.code === 'auth/weak-password') seterror('Password too weak')
    }
  }

  return (
    <section className="flex h-5/6 justify-center items-center">
      <div className='w-5/6 lg:w-2/6'>
        {error && <Alert message={error} />}
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-2" onSubmit={handleSubmit}>
          <Link to={'/'}><BsFillArrowLeftCircleFill className='mb-2 cursor-pointer  w-5 h-5' /></Link>
          <h2 className=' font-semibold text-xl mb-2'>Registrarse</h2>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm mb-2" htmlFor="email">Correo</label>
            <input className="shadow appearance-none border dounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-none" type="email" onChange={handleChange} name="email" placeholder="youremail@company.ltd" />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm mb-2" htmlFor="password">Contraseña</label>
            <input className="shadow appearance-none border dounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-none" type="password" onChange={handleChange} name="password" id="password" placeholder="******" />
          </div>

          <div className="flex items-center justify-between">
            <button name='register-btn' className={btnDisabled ? 'bg-gray-300 text-white cursor-not-allowed px-2 py-1 rounded-md text-sm md:text-base ' : 'rounded-md bg-blue-500 hover:bg-blue-700 duration-200 focus:outline-none text-white focus:shadow-outline px-2 py-1 text-sm md:text-base '} disabled={btnDisabled}>Registrarse</button>

          </div>
        </form>

      </div>
    </section >
  )
}

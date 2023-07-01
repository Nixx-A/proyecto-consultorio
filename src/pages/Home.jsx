/* eslint-disable no-unused-expressions */
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../Context/authContext'
import { DnaSpinner } from '../Components/Spinner'

export function Home () {
  const { user, loading } = useAuth()
  const navigate = useNavigate()

  if (loading) return <DnaSpinner />
  if (user?.accessToken) {
    navigate('patients')
  } else {
    null
  }

  // console.log(user)
  return (
    <>
      <section className='flex h-5/6 justify-center items-center'>
        <div className='flex flex-col items-center bg-white px-7 py-10 rounded shadow-md'>
          <img className='w-32 h-32' src='/cuidado-dental.png' alt='' />

          <div className='flex gap-2 mt-6'>
            <Link
              to={'/login'}
              className='px-2 py-1 rounded-md bg-blue-500 text-white hover:bg-blue-700 duration-200 '>
              Iniciar Sesion
            </Link>
            <p className='text-lg font-thin'>o</p>
            <Link
              to={'/register'}
              className='px-2 py-1 rounded-md bg-blue-500 text-white hover:bg-blue-700 duration-200 '>
              Registrarse
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

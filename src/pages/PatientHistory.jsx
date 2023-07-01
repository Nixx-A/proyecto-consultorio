import { AiOutlinePlus } from 'react-icons/ai'
import { Link, useParams } from 'react-router-dom'
import { BsFillArrowLeftCircleFill } from 'react-icons/bs'
import Consult from '../Components/Consult'
import { useState } from 'react'
import { useAuth } from '../Context/authContext'
import { savePatientConsult } from '../firebase'
import { useDeleteConsult } from '../hooks/useDeleteConsult'
import { useGetPatientConsults } from '../hooks/useGetPatientConsults'
import { RingSpinner } from '../Components/Spinner'
import { AddConsultModal } from '../Components/AddConsultModal'

export function PatientHistory () {
  const { id } = useParams()
  const { user } = useAuth()

  const [consultOpen, setConsultOpen] = useState(false)

  const { consults, isLoading, error } = useGetPatientConsults(user?.email, id)
  const handleDeleteConsult = useDeleteConsult(user?.email, id)

  if (error) return <p>Hubo un error, intenta mas tarde</p>

  const handleSubmit = async e => {
    e.preventDefault()
    const fields = Object.fromEntries(new FormData(e.target))

    await savePatientConsult(user.email, id, fields)
    setConsultOpen(false)
    e.target.reset()
  }

  return (
    <section className='flex items-center justify-center w-screen h-screen'>
      <div className=' bg-[aliceblue] rounded w-[97%] h-[95%] overflow-hidden'>
        <div className='flex justify-between mb-10'>
          <Link to={'/patients'}>
            <BsFillArrowLeftCircleFill className='m-1 w-6 h-6 p-0.5 cursor-pointer' />
          </Link>
          <h1 className='text-center text-2xl '>Historial Clinico </h1>
          <p>{ }</p>
        </div>
        <div className='flex justify-center items-start flex-col gap-1'>
          <div className='flex justify-center item flex-col'>
            <button
              className='inline-flex text-xs items-center bg-blue-500 ml-4 mb-2 text-white hover:bg-blue-700 duration-150 rounded px-2 py-1'
              onClick={() => setConsultOpen(true)}>
              Añadir Consulta
              <AiOutlinePlus className=' w-4 h-4 p-[0.8px] relative top-[1px] inline' />
            </button>
          </div>
        </div>
        <div className='w-[98%] m-auto bg-gray-200 h-full overflow-y-scroll pb-32'>
          <ul className=''>
            <Consult
              setConsultOpen={setConsultOpen}
              listOfConsults={consults}
              onDeleteConsult={handleDeleteConsult.handleDeleteConsult}
            />
            {isLoading && <RingSpinner />}
          </ul>
        </div>
      </div>
      <AddConsultModal
        consultOpen={consultOpen}
        handleSubmit={handleSubmit}
        setConsultOpen={setConsultOpen}
      />
    </section>
  )
}

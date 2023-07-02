/* eslint-disable multiline-ternary */
import { useAuth } from '../Context/authContext'
import { AiFillCloseCircle, AiOutlinePlus } from 'react-icons/ai'
import { saveUser } from '../firebase'
import { DnaSpinner, RingSpinner } from '../Components/Spinner'
import { ListOfPatients } from '../Components/Patient/ListOfPatients'
import { useDialog } from '../hooks/useDialog'
import { usePatients } from '../hooks/usePatient'

export function Patients () {
  const { user, loading, logout } = useAuth()
  const { patientsList, loadingGetPatient } = usePatients(user.email)
  const { openDialog, closeDialog } = useDialog()

  if (loading) return <DnaSpinner />

  const handleSubmit = (e) => {
    e.preventDefault()
    const query = new FormData(e.target).get('query')
    saveUser(user.email, query)
    closeDialog()
    e.target.reset()
  }

  return (
    <>
      <section className='flex items-center justify-center w-screen h-screen'>
        <div className=' bg-[aliceblue] rounded w-[97%] h-[95%] overflow-hidden'>
          <p
            onClick={() => logout()}
            className='m-1 w-32 absolute left-0 md:left-7 font-semibold cursor-pointer hover:text-gray-400 duration-100'>
            Cerrar sesion
          </p>
          <h1 className='text-3xl text-center mb-16'>Pacientes</h1>
          <div className='flex justify-center items-start flex-col gap-1'>
            <div className='flex justify-center item flex-col'>
              <button
                className='inline-flex text-xs items-center bg-blue-500 ml-4 mb-2 text-white hover:bg-blue-700 duration-150 rounded px-2 py-1'
                onClick={openDialog}>
                Agregar Paciente
                <AiOutlinePlus className=' w-4 h-4 p-[0.8px] relative top-[1px] inline' />
              </button>
            </div>
          </div>
          <div className='w-[98%] m-auto bg-gray-200 h-full overflow-y-scroll pb-32'>
            {loadingGetPatient && <RingSpinner />}
            <ul className=''>
              {patientsList ? (
                <ListOfPatients patients={patientsList} />
              ) : (
                <RingSpinner />
              )}
            </ul>
          </div>
        </div>
        <dialog
          className='absolute m-auto w-3/4 h-1/6 md:w-2/6 rounded-md'
          id='add-patient-dialog'>
          <AiFillCloseCircle
            onClick={closeDialog}
            className='absolute right-0 m-2 w-6 h-6 cursor-pointer'
          />
          <div className='flex flex-col justify-center items-center h-[80%]'>
            <label
              className='pr-20 mb-0.5 text-xs font-semibold'
              htmlFor='patient'>
              Nombre del paciente
            </label>
            <form onSubmit={handleSubmit}>
              <input
                className='border border-black p-1 rounded'
                name='query'
                type='text'
                placeholder='Vanesa'
              />
            </form>
          </div>
        </dialog>
      </section>
    </>
  )
}

/* i did this component modal but i didn't like it
<Modal isOpen={modalOpen} onClose={closeModal} title={'Mi modal'}>
<AiFillCloseCircle onClick={closeModal} className='absolute right-0 m-2 w-6 h-6 cursor-pointer' />
<div className='flex flex-col justify-center items-center h-[80%]'>
  <label className='pr-20 mb-0.5 text-xs font-semibold' htmlFor="patient">Nombre del paciente</label>
  <form onSubmit={handleSubmit}>
    <input className='border border-black p-1 rounded' name='query' type="text" placeholder='Juan Castro' />
  </form>
</div>
</Modal> */

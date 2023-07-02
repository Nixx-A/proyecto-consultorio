import { MdCancel } from 'react-icons/md'
import Modal from '../Modal'
import Teeth from './Teeth'

export function AddConsultModal ({ consultOpen, setConsultOpen, handleSubmit }) {
  return (
    <Modal
      isOpen={consultOpen}
      styles={'w-[95%] h-[95%] rounded-md shadow-2xl  modal-dialog'}>
      <button className='absolute top-0 left-0 m-1' onClick={() => setConsultOpen(false)}>
        <MdCancel className='w-6 h-6' />
      </button>
      <form
        className='overflow-x-hidden overflow-y-scroll h-full'
        onSubmit={handleSubmit}>
        <div className='flex flex-col overflow-hidden mb-10'>
          <label htmlFor='consultName'>Tipo de consulta</label>
          <input
            className='border-2 mb-2 border-black'
            type='text'
            name='consultName'
            required
          />

          <label htmlFor='domicile'>Domicilio</label>
          <input
            className='border-2 mb-2 border-black'
            type='text'
            name='domicile'
          />

          <label htmlFor='phone'>Telefono</label>
          <input
            className='border-2 mb-2 border-black'
            type='number'
            name='phone'
          />

          <label htmlFor='afiliate'>N° de afiliado</label>
          <input
            className='border-2 mb-2 border-black'
            type='number'
            name='afiliate'
          />

          <label htmlFor='document'>DNI - L.C - L.E</label>
          <input
            className='border-2 mb-2 border-black'
            type='text'
            name='document'
          />

          <label htmlFor='birth'>Fecha de nacimiento</label>
          <input
            className='border-2 mb-2 border-black'
            type='date'
            name='birth'
          />

          <label htmlFor='permanent'>Total de permanentes</label>
          <input
            className='border-2 mb-2 border-black'
            type='number'
            name='permanent'
          />

          <label htmlFor='temporary'>Total de temporarios</label>
          <input
            className='border-2 mb-2 border-black'
            type='number'
            name='temporary'
          />

          <label htmlFor='date'>Fecha</label>
          <input
            className='border-2 mb-2 border-black'
            type='date'
            name='date'
            required
          />
        </div>

        <Teeth setFormData={null}/>

        <div className='flex flex-col items-center'>
          <label htmlFor='observations'>Observaciones</label>
          <textarea
            className='bg-red-100 w-full'
            name='observations'
            cols='20'
            rows='4'></textarea>
        </div>

        <button className='rounded bg-black hover:bg-gray-600 duration-150 px-2 py-1 text-white m-1' type='submit'>Añadir</button>
      </form>
    </Modal>

  )
}

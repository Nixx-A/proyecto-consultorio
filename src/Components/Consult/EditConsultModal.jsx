import { useEffect, useState } from 'react'
import { MdCancel, MdEdit } from 'react-icons/md'
import Modal from '../Modal'
import { useParams } from 'react-router-dom'
import { useAuth } from '../../Context/authContext'
import { updateConsult } from '../../firebase'

export default function EditConsultModal ({ openEditModal, setOpenEditModal, editingConsult }) {
  const { id } = useParams()
  const { user } = useAuth()
  const [formData, setFormData] = useState(editingConsult)
  const [isViewMode, setisViewMode] = useState(true)

  useEffect(() => {
    setFormData(editingConsult)
  }, [editingConsult])

  const handleSubmit = e => {
    e.preventDefault()
    console.log(formData)
    updateConsult(user.email, id, editingConsult.id, formData)
    setOpenEditModal(false)
    setisViewMode(true)
  }

  const handleChange = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <Modal
      isOpen={openEditModal}
      styles={'w-[95%] h-[95%] rounded-md shadow-2xl  modal-dialog'}>
      <button
        className='absolute top-0 left-0 m-1'
        onClick={() => setOpenEditModal(false)}>
        <MdCancel className='w-6 h-6' />
      </button>
      <form
        className='overflow-x-hidden overflow-y-scroll h-full'
        onSubmit={handleSubmit}>
        <div className='flex flex-col overflow-hidden mb-10'>
          <label htmlFor='consultName'>Tipo de consulta</label>
          <input
            className='border-2 mb-2 border-black disabled:bg-gray-400 '
            type='text'
            name='consultName'
            required
            disabled={isViewMode}
            onChange={handleChange}
            value={formData?.consultName || ''}
          />

          <label htmlFor='domicile'>Domicilio</label>
          <input
            className='border-2 mb-2 border-black disabled:bg-gray-400 '
            type='text'
            name='domicile'
            disabled={isViewMode}
            value={formData?.domicile || ''}
            onChange={handleChange}
          />

          <label htmlFor='phone'>Telefono</label>
          <input
            className='border-2 mb-2 border-black disabled:bg-gray-400 '
            type='number'
            name='phone'
            disabled={isViewMode}
            value={formData?.phone || ''}
            onChange={handleChange}
          />

          <label htmlFor='afiliate'>N° de afiliado</label>
          <input
            className='border-2 mb-2 border-black disabled:bg-gray-400 '
            type='number'
            name='afiliate'
            value={formData?.afiliate || ''}
            disabled={isViewMode}
            onChange={handleChange}
          />

          <label htmlFor='document'>DNI - L.C - L.E</label>
          <input
            className='border-2 mb-2 border-black disabled:bg-gray-400 '
            type='text'
            name='document'
            disabled={isViewMode}
            value={formData?.document || ''}
            onChange={handleChange}
          />

          <label htmlFor='birth'>Fecha de nacimiento</label>
          <input
            className='border-2 mb-2 border-black disabled:bg-gray-400 '
            type='date'
            name='birth'
            disabled={isViewMode}
            value={formData?.birth || ''}
            onChange={handleChange}
          />

          <label htmlFor='permanent'>Total de permanentes</label>
          <input
            className='border-2 mb-2 border-black disabled:bg-gray-400 '
            type='number'
            name='permanent'
            disabled={isViewMode}
            value={formData?.permanent || ''}
            onChange={handleChange}
          />

          <label htmlFor='temporary'>Total de temporarios</label>
          <input
            className='border-2 mb-2 border-black disabled:bg-gray-400 '
            type='number'
            name='temporary'
            disabled={isViewMode}
            onChange={handleChange}
            value={formData?.temporary || ''}
          />

          <label htmlFor='date'>Fecha</label>
          <input
            className='border-2 mb-2 border-black disabled:bg-gray-400 '
            type='date'
            name='date'
            disabled={isViewMode}
            onChange={handleChange}
            value={formData?.date || ''}
            required
          />
        </div>

        <div className='w-48 h-48 bg-gray-400'></div>

        <div className='flex flex-col items-center'>
          <label htmlFor='observations'>Observaciones</label>
          <textarea
            className='bg-red-100 w-full disabled:bg-gray-400/50'
            name='observations'
            disabled={isViewMode}
            onChange={handleChange}
            value={formData?.observations || ''}
            cols='20'
            rows='4'></textarea>
        </div>

        <div className='flex justify-between mt-6 '>
          <button type='submit' className='bg-black text-white px-2 py-1 hover:bg-gray-500 duration-150 rounded'>Enviar</button>
          <MdEdit
            onClick={() => setisViewMode(false)}
            className='bg-blue-500 rounded w-8 p-2 h-8 text-white hover:bg-blue-700 duration-150 cursor-pointer mr-1 '
          />
        </div>
      </form>
    </Modal>
  )
}

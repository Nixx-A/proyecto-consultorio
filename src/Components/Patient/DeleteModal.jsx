import Modal from '../Modal'

const DeleteModal = ({ isOpen, onClose, handleDelete }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} styles={'w-3/4 h-1/6 md:w-1/3 rounded-md shadow-2xl modal-dialog'}>
      <h2 className='text-center'>Quieres eliminar al paciente?</h2>
      <div className='flex gap-2 mt-6 justify-center'>
        <button
          className='bg-red-600 text-white rounded px-2 py-1 hover:bg-red-400 duration-150'
          onClick={handleDelete}
        >
          Eliminar
        </button>
        <button
          className='bg-black text-white rounded px-2 py-1 hover:bg-gray-600 duration-150'
          onClick={onClose}
        >
          Cancelar
        </button>
      </div>
    </Modal>
  )
}

export default DeleteModal

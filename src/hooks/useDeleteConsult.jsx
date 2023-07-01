import { useState } from 'react'
import { deletePatientConsult } from '../firebase'

export const useDeleteConsult = (email, id) => {
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)

  const handleDeleteConsult = async (consultId) => {
    try {
      setIsLoading(true)
      setError(null)

      // Call the deleteConsult function from your firebase module
      await deletePatientConsult(email, id, consultId)

      // Perform any additional operations after successful deletion, if needed

      setIsLoading(false)
    } catch (error) {
      setIsLoading(false)
      setError(error)
    }
  }

  return {
    isLoading,
    error,
    handleDeleteConsult
  }
}

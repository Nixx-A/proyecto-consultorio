import { useEffect, useState } from 'react'
import { getPatientConsults, subscribeToPatientConsults } from '../firebase'

export const useGetPatientConsults = (userEmail, patientId) => {
  const [consults, setConsults] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchPatientConsults = async () => {
      try {
        if (userEmail && patientId) {
          const fetchedConsults = await getPatientConsults(userEmail, patientId)
          setConsults(fetchedConsults)
        }
        setIsLoading(false)
      } catch (error) {
        setIsLoading(false)
        setError(error)
      }
    }

    fetchPatientConsults()

    let unsubscribe
    if (userEmail && patientId) {
      unsubscribe = subscribeToPatientConsults(userEmail, patientId, (fetchedConsults) => {
        setConsults(fetchedConsults)
      })
    }

    return () => {
      if (unsubscribe) {
        unsubscribe()
      }
    }
  }, [userEmail, patientId])

  useEffect(() => {
    if (error) {
      console.log('Error subscribing to patient consults:', error)
    }
  }, [error])

  return {
    consults,
    isLoading,
    error
  }
}

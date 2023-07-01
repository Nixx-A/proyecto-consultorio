import { useEffect, useState } from 'react'
import { getPatients, subscribeToPatients } from '../firebase'

export function usePatients (email) {
  const [patientsList, setPatientsList] = useState([])
  const [loadingGetPatient, setLoadingGetPatient] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoadingGetPatient(true)
        const querySnapshot = await getPatients(email)
        // const patients = querySnapshot.map((doc) => ({ id: doc.id, ...doc }))
        setPatientsList(querySnapshot)
      } catch (error) {
        console.error('Error fetching patients:', error)
      } finally {
        setLoadingGetPatient(false)
      }
    }

    const unsubscribe = subscribeToPatients(email, (data) => {
      setPatientsList(data)
    })

    fetchData()

    return () => unsubscribe()
  }, [email])

  return { patientsList, loadingGetPatient }
}

/*
 useEffect(() => {
    const fetchData = async () => {
      try {
        const querySnapshot = await getPatients(email)
        const patients = querySnapshot.map((doc) => ({ id: doc.id, ...doc }))
        setPatientsList(patients)
      } catch (error) {
        console.error('Error fetching patients:', error)
      }
    }

    const unsubscribe = subscribeToPatient(email, (data) => {
      setPatientsList(data)
    })

    fetchData()

    return () => unsubscribe()
  }, [email]) */

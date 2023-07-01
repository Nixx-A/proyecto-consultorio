import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { addDoc, collection, deleteDoc, doc, getDocs, getFirestore, updateDoc, onSnapshot, setDoc, getDoc } from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBgpy_lZ13-oCrVKctz7K9LhEb1i-k2GIY',
  authDomain: 'pacientes-consultorio.firebaseapp.com',
  projectId: 'pacientes-consultorio',
  storageBucket: 'pacientes-consultorio.appspot.com',
  messagingSenderId: '1073542296575',
  appId: '1:1073542296575:web:e1dceb47da208c42d7edca'
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)
export const auth = getAuth(app)

/* export const saveUser = (fullName, collectionName) => {
  const ref = ('users', 'csaas', collectionName)
  addDoc(collection(db, ref), { fullName })
}
 */

export const getPatients = async (email) => {
  const userRef = doc(db, 'users', email)
  const patientsCollectionRef = collection(userRef, 'patients')
  const querySnapshot = await getDocs(patientsCollectionRef)
  return querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
}

// Save patient
export const saveUser = async (email, fullName) => {
  const userRef = doc(db, 'users', email)
  const patientId = doc(collection(userRef, 'patients')).id
  const patientRef = doc(userRef, 'patients', patientId)
  await setDoc(patientRef, { fullName, consults: [] })
}

// Update patient
export const updatePatient = async (email, patientId, updatedFields) => {
  const patientRef = doc(db, 'users', email, 'patients', patientId)
  const patientDoc = await getDoc(patientRef)

  if (patientDoc.exists()) {
    await updateDoc(patientRef, updatedFields)
  } else {
    throw new Error('No patient document found')
  }
}

// Delete patient
export const deletePatient = async (email, patientId) => {
  const patientRef = doc(db, 'users', email, 'patients', patientId)
  await deleteDoc(patientRef)
}

// Subscribe to patients
export const subscribeToPatients = (email, callback) => {
  const patientsRef = collection(db, 'users', email, 'patients')
  return onSnapshot(patientsRef, (snapshot) => {
    const patients = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
    callback(patients)
  })
}

// PATIENTS HISTORY DATA

export const savePatientConsult = async (email, patientId, consultData) => {
  const patientRef = doc(db, 'users', email, 'patients', patientId)
  const consultsRef = collection(patientRef, 'consults')
  await addDoc(consultsRef, consultData)
}

export const getPatientConsults = async (email, patientId) => {
  const patientRef = doc(db, 'users', email, 'patients', patientId)
  const consultsRef = collection(patientRef, 'consults')
  const querySnapshot = await getDocs(consultsRef)
  return querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
}

export async function deletePatientConsult (userEmail, patientId, consultId) {
  try {
    const patientRef = doc(db, 'users', userEmail, 'patients', patientId)
    const consultRef = doc(patientRef, 'consults', consultId)
    await deleteDoc(consultRef)
    console.log('Patient consult deleted successfully')
  } catch (error) {
    throw new Error('Error deleting patient consult: ' + error.message)
  }
}

export const subscribeToPatientConsults = (email, patientId, callback) => {
  const patientRef = doc(db, 'users', email, 'patients', patientId)
  const consultsRef = collection(patientRef, 'consults')
  return onSnapshot(consultsRef, (snapshot) => {
    const consults = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
    callback(consults)
  })
}

export const updateConsult = async (email, patientId, consultId, updatedFields) => {
  const patientRef = doc(db, 'users', email, 'patients', patientId)
  const consultRef = doc(patientRef, 'consults', consultId)
  const consultDoc = await getDoc(consultRef)

  if (consultDoc.exists()) {
    await updateDoc(consultRef, updatedFields)
    console.log('Consultation updated successfully!')
  } else {
    throw new Error('No consultation document found')
  }
}

/* export const getPatients = async (collectionName) => {
  const querySnapshot = await getDocs(collection(db, collectionName))
  return querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
} */
// export const deletePatient = (collectionName, id) => deleteDoc(doc(db, collectionName, id))
// export const updatePatient = (id, collectionName, updatedFields) => updateDoc(doc(db, collectionName, id), updatedFields)

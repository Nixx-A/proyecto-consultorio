import { useState } from 'react'

export function useDialog () {
  const [dialog, setDialog] = useState()

  const openDialog = () => {
    const dialogElement = document.getElementById('add-patient-dialog')
    dialogElement.showModal()
    setDialog(dialogElement)
  }

  const closeDialog = () => {
    if (dialog) {
      dialog.close()
    }
  }

  return { dialog, openDialog, closeDialog }
}

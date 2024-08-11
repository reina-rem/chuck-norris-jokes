import { useRef, useState } from "react"

type ToastApi = {
  showMode: string
  message: string
  showInfo: (msg: string) => void
  showError: (msg: string) => void
}

export const useToast = (): ToastApi => {
  const [showMode, setShowMode] = useState<string>('')
  const [message, setMessage] = useState('')
  const timerRef = useRef<number>()

  const trigger = (msg: string, error?: 'error') => {
    if (timerRef.current) {
      clearTimeout(timerRef.current)
    }

    setMessage(msg)
    setShowMode('toast--force-hide')

    setTimeout(() => {
      setShowMode(`toast--show ${error ? 'toast--error' : ''}`)
    }, 50)

    timerRef.current = setTimeout(() => {
      setShowMode(error ? 'toast--error' : '')
    }, 2000)
  }

  const showError = (msg: string) => {
    trigger(msg, 'error')
  }

  return {
    showMode,
    message,
    showInfo: trigger,
    showError,
  }
}

import './Toast.css'

import ReactDOM from 'react-dom'

type ToastProps = {
  showMode: string
  message: string
}

export const Toast = ({ showMode, message }: ToastProps) => (
  ReactDOM.createPortal(
    <div className={`toast ${showMode ? showMode : ''}`}>
      {message}
    </div>,
    document.body
  )
)

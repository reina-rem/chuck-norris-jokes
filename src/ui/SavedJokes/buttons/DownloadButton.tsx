import './DownloadButton.css'

type DownloadButtonProps = {
  disabled: boolean
  onClick: () => void
}

export const DownloadButton = ({ disabled, onClick }: DownloadButtonProps) => (
  <div className="download-button">
    <button 
      disabled={disabled}
      className="download-button__button"
      onClick={onClick}
    >
      Download .txt
    </button>
  </div>
)

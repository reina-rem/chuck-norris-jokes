import './DeleteAllButton.css'

type DeleteAllButtonProps = {
  disabled: boolean
  onClick: () => void
}

export const DeleteAllButton = ({ disabled, onClick }: DeleteAllButtonProps) => (
  <div className="delete-all-button">
    <button 
      disabled={disabled}
      className="delete-all-button__button"
      onClick={onClick}
    >
      Clear all
    </button>
  </div>
)

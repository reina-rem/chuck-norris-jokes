import './ReactionButtons.css'

type ReactionButtonsProps = {
  onLike: () => void
  onDislike: () => void
}

export const ReactionButtons = ({ onLike, onDislike }: ReactionButtonsProps) => (
  <div className="reaction-buttons">
    <button 
      className="reaction-buttons__button reaction-buttons__button--like"
      onClick={e => {
        e.stopPropagation()
        onLike()
      }}
    >
      👍
    </button>
    <button 
      className="reaction-buttons__button reaction-buttons__button--dislike"
      onClick={e => {
        e.stopPropagation()
        onDislike()
      }}
    >
      👎
    </button>
  </div>
)

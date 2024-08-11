import './Logo.css'
import chuckImageLink from './logo.png'

export const Logo = () => (
  <div 
    className="logo" 
    
  >
    <a href="https://github.com/reina-rem/chuck-norris-jokes" target="_blank">
      <img 
        onClick={event => {
          event.stopPropagation() 
        }} 
        src={chuckImageLink}
        className="logo__image"
        alt="Chuck Norris"
      />  
    </a>
  </div>
)

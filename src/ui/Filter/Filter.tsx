import './Filter.css'

type FilterProps = {
  categories: string[]
  onCategoryChange: (category: string) => void
}

export const Filter = ({ categories, onCategoryChange }: FilterProps) => (
  <div 
    className="filter" 
    onClick={e => e.stopPropagation()}>
    <select
      className="filter__category-select"
      defaultValue=""
      onChange={event => (
        onCategoryChange(event.target.value)
      )}
    >
      <option value="">All Categories</option>
      {
        categories.map((category) => (
          <option 
            key={category}
            value={category}
          >
            {capitalizeFirstLetter(category)}
          </option>
        ))
      }
    </select>
  </div>
)

const capitalizeFirstLetter = (str: string): string => {
  return str.charAt(0).toUpperCase() + str.slice(1)
}

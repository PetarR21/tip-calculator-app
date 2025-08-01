const TipButton = ({ value, selected, setSelectedButton }) => {
  return (
    <button
      type='button'
      onClick={() => setSelectedButton(value)}
      className={`tip-button ${selected ? 'selected-button' : ''}`}
    >
      {value}%
    </button>
  )
}

export default TipButton

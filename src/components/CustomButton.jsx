import React from 'react'

const CustomButton = ({
  selected,
  setSelectedButton,
  customValue,
  setCustomValue,
  setCustomValueError,
}) => {
  const onValueChange = ({ target }) => {
    const value = target.value

    setCustomValue(value)

    if (
      isNaN(parseInt(value)) ||
      parseInt(value) < 0 ||
      value === '' ||
      !Number.isInteger(Number(value))
    ) {
      setCustomValueError('Invalid value')
    } else {
      setCustomValueError('')
    }
  }
  return (
    <input
      onClick={() => {
        setSelectedButton('custom')
      }}
      className={`custom-button ${selected ? 'custom-button-selected' : ''}`}
      type='text'
      inputMode='numeric'
      placeholder='Custom'
      value={customValue}
      onChange={onValueChange}
    />
  )
}

export default CustomButton

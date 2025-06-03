import { useEffect } from 'react'

import TipButton from './TipButton'
import CustomButton from './CustomButton'

const SelectTip = ({
  setTipPercentage,
  customValueError,
  setCustomValueError,
  customValue,
  setCustomValue,
  selectedButton,
  setSelectedButton,
}) => {
  useEffect(() => {
    if (selectedButton === 'custom') {
      if (
        !isNaN(parseInt(customValue)) &&
        Number.isInteger(Number(customValue))
      ) {
        setTipPercentage(parseInt(customValue))
      } else {
        setTipPercentage('')
      }
    }

    if (selectedButton !== 'custom') {
      setTipPercentage(selectedButton ? parseInt(selectedButton) : '')
      setCustomValueError('')
    }
  }, [selectedButton, customValue, setTipPercentage])

  return (
    <div className='form-group'>
      <div className='select-top'>
        <div className='tip-label'>Select Tip %</div>
        <div className='tip-error'>{customValueError}</div>
      </div>
      <div className='tip-options'>
        <TipButton
          value='5'
          selected={selectedButton === '5'}
          setSelectedButton={setSelectedButton}
        />
        <TipButton
          value='10'
          selected={selectedButton === '10'}
          setSelectedButton={setSelectedButton}
        />
        <TipButton
          value='15'
          selected={selectedButton === '15'}
          setSelectedButton={setSelectedButton}
        />
        <TipButton
          value='25'
          selected={selectedButton === '25'}
          setSelectedButton={setSelectedButton}
        />
        <TipButton
          value='50'
          selected={selectedButton === '50'}
          setSelectedButton={setSelectedButton}
        />
        <CustomButton
          selected={selectedButton === 'custom'}
          setSelectedButton={setSelectedButton}
          customValue={customValue}
          setCustomValue={setCustomValue}
          setCustomValueError={setCustomValueError}
        />
      </div>
    </div>
  )
}

export default SelectTip

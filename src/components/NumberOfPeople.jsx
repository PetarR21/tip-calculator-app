import { useState } from 'react'
import PersonIcon from '../assets/images/icon-person.svg'

const NumberOfPeople = ({
  peopleNumber,
  setPeopleNumber,
  peopleError,
  setPeopleError,
}) => {
  const [peopleFocus, setPeopleFocus] = useState(false)

  const onInputChange = ({ target }) => {
    const value = target.value
    setPeopleNumber(value)

    if (Number(value) === 0) {
      setPeopleError("Can't be zero")
    } else if (isNaN(value) || !Number.isInteger(Number(value))) {
      setPeopleError('Must be an integer')
    } else if (Number(value) < 0) {
      setPeopleError("Can't be negative")
    } else {
      setPeopleError('')
    }
  }

  return (
    <div className='form-group'>
      <div className='people-top'>
        <div className='people-label'>Number of People</div>
        <div className={`people-error ${!peopleError ? 'hidden' : ''}`}>
          {peopleError}
        </div>
      </div>
      <div
        className={`people-input ${peopleFocus ? 'input-focus' : ''} ${
          peopleError ? 'input-error' : ''
        }`}
      >
        <img src={PersonIcon} alt='person icon' />
        <input
          onFocus={() => setPeopleFocus(true)}
          onBlur={() => {
            setPeopleFocus(false)
            if (peopleNumber === 0) {
              setPeopleError("Can't be zero")
            }
            if (peopleNumber === '') {
              setPeopleError("Can't be empty")
            }
          }}
          type='number'
          min='0'
          step='1'
          placeholder='0'
          value={peopleNumber}
          onChange={onInputChange}
        />
      </div>
    </div>
  )
}

export default NumberOfPeople

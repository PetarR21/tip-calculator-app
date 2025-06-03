import DollarIcon from '../assets/images/icon-dollar.svg'
import { useState } from 'react'

const InputBill = ({ bill, setBill, billError, setBillError }) => {
  const [billFocus, setBillFocus] = useState(false)

  const isDollarFormat = (value) => {
    return /^(?:[1-9]\d*)(?:\.\d{1,2})?$/.test(value)
  }

  const onBillChange = ({ target }) => {
    setBill(target.value)

    if (target.value === '0' || target.value === '') {
      setBillError("Can't be zero or empty")
      return
    }
    if (!isDollarFormat(target.value)) {
      setBillError('Invalid format')
    } else {
      setBillError('')
    }
  }

  return (
    <div className='form-group'>
      <div className='bill-top'>
        <label htmlFor='bill'>Bill</label>
        <div className={`bill-error ${!billError ? 'hidden' : ''}`}>
          {billError}
        </div>
      </div>
      <div
        className={`bill-input ${billFocus ? 'input-focus' : ''} ${
          billError ? 'input-error' : ''
        }`}
      >
        <img src={DollarIcon} alt='dollar icon' />
        <input
          value={bill}
          onChange={onBillChange}
          onFocus={() => setBillFocus(true)}
          onBlur={() => {
            setBillFocus(false)
            if (bill === '') {
              setBillError("Can't be zero or empty")
            }
          }}
          type='number'
          id='bill'
          placeholder='0'
        />
      </div>
    </div>
  )
}

export default InputBill

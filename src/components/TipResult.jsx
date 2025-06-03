import { useEffect, useState } from 'react'

const TipResult = ({ bill, tipPercentage, peopleNumber, error, reset }) => {
  const [tipAmount, setTipAmount] = useState(0)
  const [totalAmount, setTotalAmount] = useState(0)

  useEffect(() => {
    if (!error && bill && tipPercentage && peopleNumber > 0) {
      const totalTip = parseFloat(bill) * (parseInt(tipPercentage) / 100)

      setTipAmount(totalTip / parseInt(peopleNumber))
      setTotalAmount((parseFloat(bill) + totalTip) / parseInt(peopleNumber))
    }
  }, [bill, tipPercentage, peopleNumber, error])

  const resetData = () => {
    setTipAmount(0)
    setTotalAmount(0)
    // Resetting the input fields is handled in the parent component
    // by resetting the state variables there.
    reset()
  }

  return (
    <div className='result'>
      <div className='result-top'>
        <div className='result-row result-amount'>
          <div className='result-label'>
            Tip Amount <br />
            <span>/ person</span>
          </div>
          <div className='result-value'>
            {error ? 'error' : `$${tipAmount.toFixed(2)}`}
          </div>
        </div>
        <div className='result-row result-total'>
          <div className='result-label'>
            Total <br />
            <span>/ person</span>
          </div>
          <div className='result-value'>
            {error ? 'error' : `$${totalAmount.toFixed(2)}`}
          </div>
        </div>
      </div>
      <div className='result-bottom'>
        <button type='button' onClick={resetData} className='result-button'>
          RESET
        </button>
      </div>
    </div>
  )
}

export default TipResult

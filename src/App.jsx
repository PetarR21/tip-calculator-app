import { useEffect, useState } from 'react'

import InputBill from './components/InputBill'
import SelectTip from './components/SelectTip'
import NumberOfPeople from './components/NumberOfPeople'
import TipResult from './components/TipResult'

const App = () => {
  const [billError, setBillError] = useState('')
  const [bill, setBill] = useState('')
  const [tipPercentage, setTipPercentage] = useState('')
  const [selectedButton, setSelectedButton] = useState('')
  const [customValue, setCustomValue] = useState('')
  const [customValueError, setCustomValueError] = useState('')
  const [peopleError, setPeopleError] = useState('')
  const [peopleNumber, setPeopleNumber] = useState('')
  const [error, setError] = useState(false)

  useEffect(() => {
    if (billError || customValueError || peopleError) {
      setError(true)
    } else {
      setError(false)
    }
  }, [billError, customValueError, peopleError])

  const reset = () => {
    setBillError('')
    setBill('')
    setTipPercentage('')
    setSelectedButton('')
    setCustomValue('')
    setCustomValueError('')
    setPeopleError('')
    setPeopleNumber('')
    setError(false)
  }

  return (
    <div className='container'>
      <header className='header'>
        <h1>SPLITTER</h1>
      </header>
      <main className='main'>
        <div className='bill-form' id='bill-form'>
          <InputBill
            bill={bill}
            setBill={setBill}
            billError={billError}
            setBillError={setBillError}
          />
          <SelectTip
            setTipPercentage={setTipPercentage}
            customValueError={customValueError}
            setCustomValueError={setCustomValueError}
            customValue={customValue}
            setCustomValue={setCustomValue}
            selectedButton={selectedButton}
            setSelectedButton={setSelectedButton}
          />
          <NumberOfPeople
            peopleNumber={peopleNumber}
            setPeopleNumber={setPeopleNumber}
            peopleError={peopleError}
            setPeopleError={setPeopleError}
          />
        </div>
        <TipResult
          bill={bill}
          tipPercentage={tipPercentage}
          peopleNumber={peopleNumber}
          error={error}
          reset={reset}
        />
      </main>
    </div>
  )
}

export default App

import React, { useCallback } from 'react'
import { useHistory } from "react-router-dom"

import { useAppContext } from '../contexts/AppContext'

const Select = ({ defaultValue }) => {
  const { departureCode } = useAppContext()

  let history = useHistory()
  const handleChange = useCallback((e) => {
    const city = e.target.value
    if (city && departureCode) {
      history.push(`/result/${city}`)
    }
  }, [history, departureCode])

  return (
    <div className="relative h-full">
      <select
        disabled={!departureCode}
        defaultValue={defaultValue}
        onChange={handleChange}
        className={`block ${departureCode && 'cursor-pointer'} appearance-none h-full w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500`}
      >
        <option value="">{!departureCode ? 'Waiting your location...' : 'Choose a place'}</option>
        <option value="amsterdam">Amsterdam</option>
        <option value="madrid">Madrid</option>
        <option value="budapest">Budapest</option>
      </select>
      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
        <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
          <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
        </svg>
      </div>
    </div>
  )
}

export default Select;

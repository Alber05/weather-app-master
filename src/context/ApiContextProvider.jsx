import { ApiContext } from './ApiContext'
import { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

function ApiContextProvider({ children }) {
  const [currentCity, setCurrentCity] = useState({
    lat: '40.416944444',
    lon: '-3.703333333'
  })

  useEffect(() => {}, [])

  return <ApiContext.Provider value={{}}>{children}</ApiContext.Provider>
}

ApiContextProvider.propTypes = {
  children: PropTypes.node.isRequired
}

export default ApiContextProvider

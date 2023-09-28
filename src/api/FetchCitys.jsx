import { useState } from 'react'
import axios from 'axios'
const geodbKey = import.meta.env.VITE_GEODB_CITIES_KEY

export async function FetchCitys(setResults, cityQuery) {
  const options = {
    method: 'GET',
    url: 'https://wft-geo-db.p.rapidapi.com/v1/geo/places',
    params: {
      types: 'CITY',
      namePrefix: cityQuery,
      namePrefixDefaultLangResults: 'true',
      includeDeleted: 'NONE',
      languageCode: 'es',
      limit: '10',
      sort: '-population'
    },
    headers: {
      'X-RapidAPI-Key': geodbKey,
      'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com'
    }
  }

  try {
    const response = await axios.request(options)
    setResults(
      response.data.data.filter((city, index) => {
        return (
          response.data.data.findIndex(
            (otherCity) =>
              otherCity.name === city.name &&
              otherCity.region === city.region &&
              otherCity.country === city.country
          ) === index
        )
      })
    )
  } catch (error) {
    console.error(error)
  }
}

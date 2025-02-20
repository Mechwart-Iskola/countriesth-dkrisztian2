import { useEffect } from "react"
import CountryCard from "../../components/countrycard/CountryCard"
import { useFetchCountries } from "../../api/api"
import './allcountries.css'

const Allcountries = () => {

  const {countries} = useFetchCountries()

  useEffect(() =>{

  },[])

  return (
    <div className="countries-grid">
      {countries.map(country => (
        <CountryCard country={country}/>
      ))}
      
    </div>
  )
}

export default Allcountries
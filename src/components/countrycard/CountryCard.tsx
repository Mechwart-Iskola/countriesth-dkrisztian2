import './countryCard.css'
import { countryType } from '../../types/types'

type countryCardProps = {
    country:countryType
}

const CountryCard = ({country}:countryCardProps) => {
  return (
    <div className='country-card'>
        <div className='country-img'>
            <img src={country?.flags.png}></img>
        </div>
        <div className='country-data'>
            <h3>{country?.name.common}</h3>
            <p><span>Population:</span>{country?.popultaion}</p>
            <p><span>Region:</span> {country?.region}</p>
            <p><span>Capital:</span> {country?.capital}</p>
        </div>
    </div>
  )
}

export default CountryCard
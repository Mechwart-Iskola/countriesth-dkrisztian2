import { useEffect, useState } from "react";
import { countryType } from "../types/types";

const fetchCountries = async () =>{
    try{
      const response = await fetch('https://restcountries.com/v3.1/all')
      if(!response.ok){
        throw new Error("A manóba!");
        
      }
      const data = await response.json()
      return data
    }
    catch(error){
      console.error(error)
      return null
    }
  }

export const useFetchCountries = () =>{
    const [countries, setCountries] = useState<countryType[]>([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState("")

    useEffect(() =>{
        const getCountries = async() => {
            try {
                const data = await fetchCountries()
                if(data)
                    setCountries(data)
                else
                    setError('Az adatok betöltése sikertelen')
            }catch (err) {
                setError('Hálózati hiba')
                console.log(err)
            }finally{
                setLoading(false)
            }
        }
        getCountries()
    },[])

    return {countries, error, loading}
}
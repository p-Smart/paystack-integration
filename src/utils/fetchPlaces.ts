import axios from "axios"
import { Dispatch, SetStateAction } from "react"

type IPlaces = {
    label: string;
    value: string;
}[]

export const fetchCountries = async (setLoading?: Dispatch<SetStateAction<boolean>>): Promise<IPlaces> => {
    setLoading && setLoading(true)
    try{
        const {data} =  await axios.get('https://api.countrystatecity.in/v1/countries', {
        headers: {
            'X-CSCAPI-KEY': process.env.NEXT_PUBLIC_WORLD_API_KEY
        }
        })

        data.sort((a, b) => a.name.localeCompare(b.name))

        return data.map( (country) => ({label: country.name, value: country.iso2}) )
    }
    catch(err){
        console.log(err.message)
        return []
    }
    finally{
        setLoading && setLoading(false)
    }
}



export const fetchStates = async (countryIso2: string, setLoading?: Dispatch<SetStateAction<boolean>>): Promise<IPlaces> => {
    setLoading && setLoading(true)
    try{
        const {data} = await axios.get(`https://api.countrystatecity.in/v1/countries/${countryIso2}/states`, {
            headers: {
              'X-CSCAPI-KEY': process.env.NEXT_PUBLIC_WORLD_API_KEY
            }
        })

        data.sort((a, b) => a.name.localeCompare(b.name))

        return data.map( (state) => ({label: state.name, value: state.iso2}) )
    }
    catch(err){
        return []
    }
    finally{
        setLoading && setLoading(false)
    }
}




export const fetchCities = async (countryIso2: string, stateIso2: string, setLoading?: Dispatch<SetStateAction<boolean>>): Promise<IPlaces> => {
    setLoading && setLoading(true)
    try{
        const {data} = await axios.get(`https://api.countrystatecity.in/v1/countries/${countryIso2}/states/${stateIso2}/cities`, {
            headers: {
              'X-CSCAPI-KEY': process.env.NEXT_PUBLIC_WORLD_API_KEY
            }
        })

        data.sort((a, b) => a.name.localeCompare(b.name))

        return data.map( (city) => ({label: city.name, value: city.id}) )
    }
    catch(err){
        return []
    }
    finally{
        setLoading && setLoading(false)
    }
}
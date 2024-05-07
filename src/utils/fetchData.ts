import axios from "axios"


interface IFetchData {
    endpoint: string, 
    payload?: {[key: string]: any};
}


const fetchData = async ({
    endpoint,
    payload,
  }: IFetchData): Promise<{[key: string]: any}> => {

    const formData = {
        ...payload
    }
    

   try{
    const {data} = await axios.post(`${process.env.NEXT_PUBLIC_API}${endpoint}`, formData)

    // if(data?.status){
        return data
    // }
    // throw new Error(data?.message)
   }
   catch(err){
    console.log(err)
    if(err?.response?.data){
        throw new Error(err?.response?.data?.error)
    }
    throw new Error(err?.message)
   }
}


export default fetchData
import axios from 'axios';
import { RefetchPropSType, useFetchReturnType } from './types'
import { useEffect, useState } from 'react';

export const useFetch = (url: string) => {
   const [isLoading, setIsLoading] = useState(false)
   const [data, setData] = useState(null)
   const [error, setError] = useState(false)

   const refetch = async (props: RefetchPropSType | null) => {
      error && setError(false)

      setIsLoading(true)
      try {
         const responce = await axios.get(`${url}${props ? `?_limit=${props.params._limit}` : ''}`)
         const fetchdata = await responce.data
         setData(fetchdata)
      } catch {
         setError(true)
      }
      setIsLoading(false)
   }

   useEffect(() => {
      refetch(null)
   }, [])

   return { data, isLoading, error, refetch } as useFetchReturnType
}
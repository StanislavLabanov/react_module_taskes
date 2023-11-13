import { useState, useLayoutEffect } from "react"
import { ReturnObjectType } from "./types"

export const useLocalStorage = <T extends string>(tokenProp: T) => {
   const [token, setToken] = useState<T | null>(tokenProp)

   const setItem = (newToken: T) => {
      localStorage.setItem('token', newToken)
      setToken(newToken)
   }

   const removeItem = () => {
      localStorage.removeItem('token')
      setToken(null)
   }

   useLayoutEffect(() => {
      localStorage.getItem('token') && setToken(localStorage.getItem('token') as T)
   }, [])

   return [token, { setItem, removeItem }] as [T, ReturnObjectType]
}
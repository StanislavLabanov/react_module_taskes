import { useRef, useState, useEffect } from "react"

export const useHover = () => {
   const [hovered, setHovered] = useState(false)
   const ref = useRef<null | HTMLDivElement>(null)

   useEffect(() => {
      if (ref.current) {
         ref.current.addEventListener("mouseover", () => setHovered(true))
         ref.current.addEventListener("mouseout", () => setHovered(false))

         return () => {
            ref.current!.removeEventListener("mouseover", () => setHovered(true))
            ref.current!.removeEventListener("mouseout", () => setHovered(false))
         }
      }
   }, [])

   return { hovered, ref }
}
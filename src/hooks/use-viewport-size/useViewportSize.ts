import { useState } from 'react';
import { useWindowEvent } from '../repeated-hook/useWindowEvent';

export const useViewportSize = () => {
   const [width, setWidth] = useState(window.innerWidth)
   const [height, setHeight] = useState(window.innerHeight)

   const handleViewportSizeChange = () => {
      setWidth(window.innerWidth)
      setHeight(window.innerHeight)
   }

   useWindowEvent('resize', handleViewportSizeChange, undefined)

   return { width, height }
}
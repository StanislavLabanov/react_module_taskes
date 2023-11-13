import { useState } from 'react';
import { useWindowEvent } from '../repeated-hook/useWindowEvent';

export const useWindowScroll = () => {
   const [scroll, setScroll] = useState({ x: 0, y: 0 });

   const handleScroll = () => {
      setScroll({ x: window.scrollX, y: window.scrollY });
   }

   const scrollTo = (prop: { y: number }) => {
      window.scrollTo(0, prop.y)
   }

   useWindowEvent('scroll', handleScroll, undefined)

   return [scroll, scrollTo] as [{ x: number, y: number }, (prop: { y: number }) => void]
}
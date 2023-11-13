import { FC } from "react";
import { useWindowScroll } from "../hooks/use-window-scroll/useWindowScroll";

const HookUseWindowScrollComponent: FC = () => {
   const [scroll, scrollTo] = useWindowScroll()

   return (
      <div style={{ height: '200vh' }}>
         <p style={{ position: 'fixed', top: '50vh', left: 0 }}>Scroll position x: {scroll.x}, y: {scroll.y}</p>
         <button style={{ marginTop: '70vh' }} onClick={() => scrollTo({ y: 0 })}>Scroll to top</button>
      </div>
   )
}

export default HookUseWindowScrollComponent
import { FC } from "react";
import { useHover } from "../hooks/use-hover/useHover";

const HookUseHoverComponent: FC = () => {
   const { hovered, ref } = useHover();

   return (
      <div ref={ref}>
         {hovered ? 'На меня навели мышку' : 'Наведи мышкой на меня'}
      </div>
   )
}

export default HookUseHoverComponent
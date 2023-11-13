import { FC } from "react";
import { useViewportSize } from "../hooks/use-viewport-size/useViewportSize";

const HookUseViewportSizeComponent: FC = () => {
   const { height, width } = useViewportSize();

   return (
      <>
         Width: {width}, height: {height}
      </>
   )
}

export default HookUseViewportSizeComponent
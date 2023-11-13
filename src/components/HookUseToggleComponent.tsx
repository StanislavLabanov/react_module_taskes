import { FC } from "react";
import { useToggle } from "../hooks/use-toggle/useToggle";

const HookUseToggleComponent: FC = () => {
   const [value, toggle] = useToggle(['blue', 'orange', 'cyan', 'teal'])

   return <button onClick={() => toggle()}>{String(value)}</button>
}

export default HookUseToggleComponent
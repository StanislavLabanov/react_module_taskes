import { useReducer } from "react"

interface StateType {
   value: string | boolean
}

interface ActionType {
   type: string
   payload: string | boolean
}

const reduser = (state: StateType, action: ActionType) => {
   switch (action.type) {
      case 'string':
         return {
            ...state,
            value: action.payload
         }
      case 'boolean':
         return {
            ...state,
            value: action.payload
         }
      default: return state
   }
}

export function useToggle<T extends string[]>(mass?: T) {
   const [state, dispatch] = useReducer(reduser, { value: mass ? mass[0] : false })

   const booleanDispatchHendler = (payload: boolean) => {
      dispatch({ type: 'boolean', payload: payload })
   }

   const stringDispatchHendler = (payload: string) => {
      dispatch({ type: 'string', payload: payload })
   }

   const toggle = (text?: string) => {
      if (mass) {
         const indexOfcheck = mass.indexOf(state.value as string) === mass.length - 1
         const indexActive = mass[mass.indexOf(state.value as string) + 1]

         stringDispatchHendler(
            text
               ?
               state.value === text
                  ? mass[0]
                  : indexOfcheck ? text : indexActive
               : indexOfcheck ? mass[0] : indexActive
         )
      } else {
         text
            ?
            state.value === text
               ? booleanDispatchHendler(false)
               :
               state.value
                  ? stringDispatchHendler(text)
                  : booleanDispatchHendler(!state.value)
            : booleanDispatchHendler(!state.value)
      }
   }

   return [state.value, toggle] as [string[] | boolean, (text?: string) => void]
}
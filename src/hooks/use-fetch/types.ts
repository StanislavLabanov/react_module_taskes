export interface RefetchPropSType {
   params: {
      _limit: number
   }
}

type RefetchType = (props: RefetchPropSType) => void

export interface useFetchReturnType {
   data: any
   isLoading: boolean
   error: boolean
   refetch: RefetchType
}
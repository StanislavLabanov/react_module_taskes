import { FC } from "react";
import { useFetch } from "../hooks/use-fetch/useFetch";

const HookUseFetchComponent: FC = () => {
   const {
      data,
      isLoading,
      error,
      refetch
   } = useFetch('https://jsonplaceholder.typicode.com/posts');

   return (
      <div>
         <div>
            <button onClick={() => refetch({
               params: {
                  _limit: 3
               }
            })}>
               Перезапросить
            </button>
         </div>
         {isLoading && 'Загрузка...'}
         {error && 'Произошла ошибка'}
         {data && !isLoading && data.map((item: any) => <div key={item.id}>{item.title}</div>)}
      </div>
   )
}

export default HookUseFetchComponent

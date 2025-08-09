import { getProducts } from '@/apis/getProducts'
import { useQuery } from '@tanstack/react-query'

export const useGetProducts = (page: number, limit: number) => {
  return useQuery({
    queryKey: ['products'],
    queryFn: () => getProducts(page, limit)
  })
}
